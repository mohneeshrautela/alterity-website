import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link2, User, Sparkles } from 'lucide-react'
import './ChatInterface.css'

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// Eases scrollTop toward `target` over `durationMs`, always starting from
// wherever the container currently sits — so if a new message extends the
// target mid-animation, it retargets smoothly instead of the native
// scrollTo({behavior:'smooth'}) snap/restart that happens when a second
// call interrupts a first one still in flight.
function animateScrollTop(el, target, durationMs, frameRef) {
  cancelAnimationFrame(frameRef.current)
  const start = el.scrollTop
  const distance = target - start
  if (Math.abs(distance) < 1) return
  const startTime = performance.now()
  const step = (now) => {
    const t = Math.min((now - startTime) / durationMs, 1)
    // ease-in-out cubic: zero velocity at both ends, so a freshly-retargeted
    // scroll never opens with an abrupt first-frame jump (ease-out's velocity
    // peaks at t=0, which is what made consecutive messages feel rough).
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    el.scrollTop = start + distance * eased
    if (t < 1) frameRef.current = requestAnimationFrame(step)
  }
  frameRef.current = requestAnimationFrame(step)
}

const DEFAULT_UI = {
  height: 360,
  backgroundColor: '#ffffff',
  autoRestart: false,
  restartDelay: 3000,
  loaderDotColor: '#9ca3af',
  linkBubble: { backgroundColor: '#f3f4f6', textColor: '#374151', iconColor: '#374151', borderColor: '#e5e7eb' },
  leftChat: { backgroundColor: '#ffffff', textColor: '#000000', borderColor: '#d1d1d1', showBorder: true, nameColor: '#000000' },
  rightChat: { backgroundColor: '#ffffff', textColor: '#000000', borderColor: '#d1d1d1', showBorder: false, nameColor: '#000000' },
}

function MessageLoader({ dotColor }) {
  return (
    <motion.div
      className="chatui__loader"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {[0, 0.15, 0.3].map((delay) => (
        <motion.span
          key={delay}
          className="chatui__dot"
          style={{ backgroundColor: dotColor }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      ))}
    </motion.div>
  )
}

function LinkBadge({ link, linkStyle }) {
  return (
    <div
      className="chatui__link-badge"
      style={{ backgroundColor: linkStyle.backgroundColor, color: linkStyle.textColor, borderColor: linkStyle.borderColor }}
    >
      <Link2 size={12} color={linkStyle.iconColor} />
      <span>{link.text}</span>
    </div>
  )
}

function MessageBubble({ message, isLeft, ui, onContentReady, isLoading, isVisible }) {
  const chatStyle = isLeft ? ui.leftChat : ui.rightChat

  useEffect(() => {
    if (isVisible) onContentReady?.()
  }, [isVisible, onContentReady])

  const bubbleStyle = {
    backgroundColor: chatStyle.backgroundColor,
    color: chatStyle.textColor,
    borderColor: chatStyle.borderColor,
    borderWidth: chatStyle.showBorder ? '1px' : '0',
  }

  return (
    <div
      className={`chatui__bubble ${isLeft ? 'chatui__bubble--left' : 'chatui__bubble--right'}`}
      style={bubbleStyle}
    >
      {/* popLayout (not "wait"): waiting for the loader's exit before mounting
          the (taller) content briefly collapses this bubble to zero height,
          fighting the scroll animation. Plain overlap (no mode) stacks the
          exiting loader in normal flow alongside the new content, inflating
          the bubble's height for the loader's ~0.2s exit before it snaps back
          down — the "hiccup". popLayout pulls the exiting loader out of flow
          (absolutely positioned) so the bubble sizes to the content
          immediately, with no collapse and no inflate-then-shrink. */}
      <AnimatePresence mode="popLayout">
        {isLoading && !isVisible ? (
          <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <MessageLoader dotColor={ui.loaderDotColor} />
          </motion.div>
        ) : isVisible ? (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {message.type === 'text' && (
              <p className="chatui__text" style={{ color: chatStyle.textColor }}>{message.content}</p>
            )}
            {message.type === 'text-with-links' && (
              <div>
                <p className="chatui__text chatui__text--links" style={{ color: chatStyle.textColor }}>{message.content}</p>
                <div className="chatui__links">
                  {message.links?.map((link) => <LinkBadge key={link.text} link={link} linkStyle={ui.linkBubble} />)}
                </div>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function Avatar({ person, isAgent }) {
  return (
    <div className={`chatui__avatar ${isAgent ? 'chatui__avatar--agent' : 'chatui__avatar--customer'}`}>
      {isAgent ? <Sparkles size={14} /> : <User size={14} />}
    </div>
  )
}

function MessageWrapper({ message, config, ui, previousMessageComplete, onMessageComplete, previousMessage, nextMessage, onVisibilityChange, isNextVisible }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [completed, setCompleted] = useState(false)

  const isLeft = message.sender === 'left'
  const person = isLeft ? config.leftPerson : config.rightPerson
  const chatStyle = isLeft ? ui.leftChat : ui.rightChat

  const isContinuation = previousMessage?.sender === message.sender
  const nextSameSender = nextMessage?.sender === message.sender
  const showAvatar = !nextSameSender || !isNextVisible

  useEffect(() => {
    if (!previousMessageComplete) return
    const loaderDelay = 450
    const { loader } = message
    if (loader?.enabled) {
      const t1 = setTimeout(() => setIsLoading(true), loaderDelay)
      const t2 = setTimeout(() => {
        setIsLoading(false)
        setIsVisible(true)
        onVisibilityChange?.(message.id)
      }, loaderDelay + (loader.duration || 900))
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
    setIsVisible(true)
    onVisibilityChange?.(message.id)
    return undefined
  }, [message, previousMessageComplete, onVisibilityChange])

  const handleContentReady = useCallback(() => {
    if (!completed) {
      setCompleted(true)
      setTimeout(() => onMessageComplete?.(message.id), 300)
    }
  }, [completed, onMessageComplete, message.id])

  if (!isLoading && !isVisible) return null

  return (
    <div className={`chatui__row ${isLeft ? '' : 'chatui__row--right'}`}>
      <AnimatePresence mode="wait">
        {showAvatar ? (
          <motion.div key="avatar" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}>
            <Avatar person={person} isAgent={!isLeft} />
          </motion.div>
        ) : (
          <div className="chatui__avatar-spacer" key="spacer" />
        )}
      </AnimatePresence>

      <motion.div
        className="chatui__col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ alignItems: isLeft ? 'flex-start' : 'flex-end' }}
      >
        {!isContinuation && (
          <motion.div className="chatui__name" style={{ color: chatStyle.nameColor }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.25 }}>
            {person.name}
          </motion.div>
        )}
        <MessageBubble message={message} isLeft={isLeft} ui={ui} onContentReady={handleContentReady} isLoading={isLoading} isVisible={isVisible} />
      </motion.div>
    </div>
  )
}

export default function ChatInterface({ config, uiConfig = {} }) {
  const rootRef = useRef(null)
  const containerRef = useRef(null)
  const scrollFrameRef = useRef(0)
  const [completedMessages, setCompletedMessages] = useState([])
  const [visibleMessages, setVisibleMessages] = useState([])
  const [hasStarted, setHasStarted] = useState(false)
  const [runKey, setRunKey] = useState(0)

  const ui = useMemo(() => ({
    ...DEFAULT_UI,
    ...uiConfig,
    linkBubble: { ...DEFAULT_UI.linkBubble, ...uiConfig.linkBubble },
    leftChat: { ...DEFAULT_UI.leftChat, ...uiConfig.leftChat },
    rightChat: { ...DEFAULT_UI.rightChat, ...uiConfig.rightChat },
  }), [uiConfig])

  // Play the sequence once, starting only when the widget actually scrolls
  // into view — not immediately on mount while it's still off-screen.
  useEffect(() => {
    if (hasStarted) return
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  const handleMessageComplete = useCallback((messageId) => {
    setCompletedMessages((prev) => {
      if (prev.includes(messageId)) return prev
      const next = [...prev, messageId]
      if (next.length === config.messages.length && ui.autoRestart) {
        // Give each message a fresh key (remounts them, resetting their own
        // loading/visible state) for a clean replay. This keeps looping even
        // while the widget is scrolled off-screen — it just runs quietly in
        // its own box; scrollToBottom() only ever touches that box, never
        // the page, so the loop can't drag your scroll position around.
        setTimeout(() => {
          setCompletedMessages([])
          setVisibleMessages([])
          setRunKey((k) => k + 1)
        }, ui.restartDelay)
      }
      return next
    })
  }, [config.messages.length, ui.autoRestart, ui.restartDelay])

  const handleVisibilityChange = useCallback((messageId) => {
    setVisibleMessages((prev) => (prev.includes(messageId) ? prev : [...prev, messageId]))
  }, [])

  // Scroll only the widget's own internal container, never the page —
  // scrollIntoView() would otherwise drag the whole viewport back here.
  // Triggered directly off the state changes that mean "a message just
  // appeared" (visibleMessages) or "a message just finished" (completedMessages)
  // rather than a MutationObserver watching the whole subtree, which was
  // firing on unrelated animation-driven DOM churn and unreliably missing
  // the final message's reveal. Double rAF waits for that message's content
  // to actually be laid out before measuring scrollHeight; the custom
  // easing in animateScrollTop (rather than scrollTo's native 'smooth')
  // keeps consecutive messages from interrupting/restarting each other's
  // scroll animation, which is what made it feel rough.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let raf1 = requestAnimationFrame(() => {
      raf1 = requestAnimationFrame(() => {
        animateScrollTop(el, el.scrollHeight, 550, scrollFrameRef)
      })
    })
    return () => cancelAnimationFrame(raf1)
  }, [visibleMessages, completedMessages])

  const gradientBackground = useMemo(
    () => `linear-gradient(to bottom, ${hexToRgba(ui.backgroundColor, 1)} 0%, ${hexToRgba(ui.backgroundColor, 0.9)} 25%, ${hexToRgba(ui.backgroundColor, 0)} 100%)`,
    [ui.backgroundColor]
  )

  return (
    <div key={runKey} ref={rootRef} className="chatui" style={{ height: ui.height, backgroundColor: ui.backgroundColor }}>
      <div className="chatui__fade" style={{ background: gradientBackground }} />
      <div ref={containerRef} className="chatui__scroll">
        <div className="chatui__list">
          {config.messages.map((message, i) => {
            const previousMessageComplete = i === 0 ? hasStarted : completedMessages.includes(config.messages[i - 1].id)
            const previousMessage = i > 0 ? config.messages[i - 1] : null
            const nextMessage = i < config.messages.length - 1 ? config.messages[i + 1] : null
            const isNextVisible = nextMessage ? visibleMessages.includes(nextMessage.id) : false
            const isContinuation = previousMessage?.sender === message.sender
            const spacingClass = i === 0 ? '' : isContinuation ? 'chatui__spacer--tight' : 'chatui__spacer--wide'
            return (
              <div key={message.id} className={spacingClass}>
                <MessageWrapper
                  message={message}
                  config={config}
                  ui={ui}
                  previousMessageComplete={previousMessageComplete}
                  onMessageComplete={handleMessageComplete}
                  onVisibilityChange={handleVisibilityChange}
                  previousMessage={previousMessage}
                  nextMessage={nextMessage}
                  isNextVisible={isNextVisible}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
