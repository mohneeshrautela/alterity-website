import './AnnouncementBar.css'

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__inner">
        <span className="announcement-bar__badge">New</span>
        <p className="announcement-bar__text">
          Alterity AI agents now support{' '}
          <strong>real-time language switching</strong> mid-call — reach every customer in their language.{' '}
          <a href="#" className="announcement-bar__link">
            Hear it live <span className="announcement-bar__arrow">→</span>
          </a>
        </p>
      </div>
    </div>
  )
}
