// Generated from the reviewed blog plan File (gen 22). datePublished: go-live date.
export const USECASE_PROSE = {
  "nbfc-collections": {
    "kind": "usecases",
    "slug": "nbfc-collections",
    "related": [
      {
        "to": "/blog/nbfc-collections-calls-explained",
        "title": "How Payment Reminder and Collections Calls Work in NBFC Lending"
      },
      {
        "to": "/compare/voice-vs-sms-whatsapp-payment-reminders",
        "title": "Voice Calls vs SMS and WhatsApp for Payment Reminders"
      },
      {
        "to": "/use-cases/nbfc-lending",
        "title": "Voice AI agents for NBFC collections"
      }
    ],
    "title": "AI Callers for NBFC Collections in India",
    "description": "How NBFCs use AI voice agents for payment reminders, promise-to-pay follow-ups and multilingual collection calls, with human handoff and per-minute pricing.",
    "intro": [
      "Collections teams at NBFCs run on calls: payment reminders before the due date, follow-ups after it, and promise-to-pay checks after that. An AI voice agent runs those calling workflows at scale, in the borrower's language, and hands the call to a person when the conversation needs one."
    ],
    "sections": [
      {
        "heading": "1. What does the collections call calendar look like?",
        "blocks": [
          {
            "kind": "p",
            "text": "Pre-due reminders go out before an EMI date, so the first contact is a service call, not a chase. After the due date, the agent follows up on missed payments and records the outcome of every call - promised to pay, asked for a callback, wrong number, unreachable. When a borrower commits to a date, the agent calls back on that date to check the promise was kept. Every call is recorded and transcribed, so the review that matters - what was said, what was committed - does not depend on agent notes."
          }
        ]
      },
      {
        "heading": "2. Which languages do borrowers take the call in?",
        "blocks": [
          {
            "kind": "p",
            "text": "A lending portfolio usually spans states, so language is configured per campaign and each region's borrowers hear the call in their own language. Agents call end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages. The agent understands speech in all 22 scheduled Indian languages and follows the caller when they switch between Hindi and English within the same call."
          }
        ]
      },
      {
        "heading": "3. When does a collections call go to your team?",
        "blocks": [
          {
            "kind": "p",
            "text": "When a collections call turns into a negotiation on the amount or date, a dispute over the account, or a hardship conversation, it belongs with a person. The agent works inside a scope set before the first call goes out; a call that crosses it routes to your team with the recording and transcript attached, so the borrower does not repeat themselves."
          }
        ]
      },
      {
        "heading": "4. What do collections calls cost?",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. The rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, beyond that per second. A hypothetical example: a month with 10,000 billable minutes across pre-due, follow-up and promise-to-pay calls costs ₹40,000 plus GST. The pricing page works through more volumes."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 18 November 2026. See it on your portfolio: start a pilot."
          }
        ]
      },
      {
        "heading": "5. How does it fit your lending stack?",
        "blocks": [
          {
            "kind": "p",
            "text": "Call outcomes - promised to pay, callback requested, unreachable - land on the borrower's record: Alterity integrates with CRMs including Zoho, HubSpot and Salesforce, and connects with your existing telephony and IVR setup, so the agent sits behind your current numbers rather than replacing them."
          },
          {
            "kind": "caption",
            "text": "CRM integrations confirmed by the Alterity team, November 2026. See it on your portfolio: start a pilot."
          }
        ]
      }
    ]
  },
  "cod-confirmation": {
    "kind": "usecases",
    "slug": "cod-confirmation",
    "related": [
      {
        "to": "/use-cases/ecommerce-retail",
        "title": "Voice AI agents for COD order confirmation"
      },
      {
        "to": "/blog/evaluate-voice-ai-pilot",
        "title": "How to Evaluate a Voice AI Pilot: Calls, Corrections and Human Handoffs"
      }
    ],
    "title": "AI COD Confirmation Calls for E-commerce in India",
    "description": "How e-commerce teams use AI voice agents to confirm COD orders before dispatch, reduce avoidable returns and capture cancellations early.",
    "intro": [
      "Cash on delivery is convenient for buyers and risky for sellers: an unconfirmed COD order can ship, bounce and come back as return-to-origin, and an avoidable return can mean paying for shipping on a parcel that only ever travels out and back. A confirmation call before dispatch is one of the few chances to catch that early, while the shipment can still be stopped."
    ],
    "sections": [
      {
        "heading": "1. What a confirmation call does",
        "blocks": [
          {
            "kind": "p",
            "text": "Minutes after a COD order is placed, an AI voice agent calls the customer: it confirms the order and the delivery address, answers the basic questions buyers ask at this point, and records the outcome. Confirmed orders ship. Cancelled orders stop before they leave the warehouse. No-answer numbers go into a retry sequence instead of straight to dispatch."
          }
        ]
      },
      {
        "heading": "2. Which orders get called?",
        "blocks": [
          {
            "kind": "p",
            "text": "Confirm new COD orders right after purchase. Re-confirm flagged orders - high value, first-time buyer, incomplete address - before dispatch. Capture cancellations early, while the parcel has not shipped yet. Reschedule deliveries when the customer asks. Every outcome lands on the order record, so your team works from what the customer actually said, not from guesswork."
          }
        ]
      },
      {
        "heading": "3. Which languages do buyers hear?",
        "blocks": [
          {
            "kind": "p",
            "text": "Confirmation calls are short, and language friction is an easy way to lose one - so the buyer hears the call in their own language. Agents call end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages, and follow the caller when they switch between Hindi and English within the same call."
          },
          {
            "kind": "callout",
            "text": "Language coverage applies to every outbound workflow, not just confirmations.",
            "to": "/use-cases/multilingual-outbound",
            "cta": "AI outbound calling in Hindi and Indian languages"
          }
        ]
      },
      {
        "heading": "4. When does the buyer reach a person?",
        "blocks": [
          {
            "kind": "p",
            "text": "When a buyer is confused, upset, or asking for an unusual change - a different product, a partial cancellation, an address outside the usual format - the call belongs with a person. The agent works inside a defined scope and routes those calls to your team with the recording and transcript attached."
          }
        ]
      },
      {
        "heading": "5. What do confirmation calls cost?",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment - the rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. Confirmation calls are short, so the rounding step matters. A hypothetical example: if each of 5,000 answered calls lasts 40 seconds, every call rounds up to one minute - 5,000 billable minutes, ₹20,000 plus GST - and every avoided return comes out of that number. The actual cost depends on each answered call's duration and the rounding steps."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 18 November 2026. Integrates with CRMs including Zoho, HubSpot and Salesforce. See it on your order flow: start a pilot."
          }
        ]
      }
    ]
  },
  "multilingual-outbound": {
    "kind": "usecases",
    "slug": "multilingual-outbound",
    "related": [
      {
        "to": "/blog/test-multilingual-voice-agent",
        "title": "How to Test a Multilingual Voice Agent Before You Buy"
      },
      {
        "to": "/languages",
        "title": "Languages Alterity agents speak"
      }
    ],
    "title": "AI Outbound Calling in Hindi and Indian Languages",
    "description": "AI outbound calls in 11 Indian languages plus English: payment reminders, order confirmations and reactivation in the customer's language.",
    "intro": [
      "An outbound call only works if the person who picks up actually follows it. A reminder or confirmation delivered in a language the customer is not comfortable in can get cut short in seconds - and the outcome your team needed never gets recorded. Calling each customer in their own language is one of the simplest ways to give the call a fair chance."
    ],
    "sections": [
      {
        "heading": "1. Which outbound workflows run in Indian languages?",
        "blocks": [
          {
            "kind": "p",
            "text": "Payment and EMI reminders before and after the due date. Order and delivery confirmations. Appointment reminders and rescheduling. Reactivation calls to lapsed customers. Feedback calls after a delivery or a service visit. Each call goes out in the customer's language, taken from their profile or previous interactions, and every outcome lands back on their record."
          },
          {
            "kind": "callout",
            "text": "The most common multilingual workflow we see: reminder calls before and after a due date.",
            "to": "/use-cases/payment-reminders",
            "cta": "AI voice agents for payment reminder calls"
          }
        ]
      },
      {
        "heading": "2. Which languages does it speak?",
        "blocks": [
          {
            "kind": "p",
            "text": "Agents call end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages, and follow the caller when they switch between Hindi and English within the same call. Code-switching is how a large share of real conversations go; the agent does not force the caller back into one language."
          }
        ]
      },
      {
        "heading": "3. How should you test a multilingual agent before buying?",
        "blocks": [
          {
            "kind": "p",
            "text": "Any vendor's language claim deserves a live check, ours included. Call the demo agent in the language your customers actually speak. Try switching languages mid-sentence. Try a noisy line and a strong regional accent. Listen for whether it recovers gracefully when it mishears, and ask to hear real call recordings rather than a scripted demo."
          }
        ]
      },
      {
        "heading": "4. When does a call go to your team?",
        "blocks": [
          {
            "kind": "p",
            "text": "A customer who is confused, upset or asking for something outside the call's purpose should reach a person - whatever language the conversation is in. The agent works inside a defined scope and routes those calls to your team with the recording and transcript attached."
          }
        ]
      },
      {
        "heading": "5. What do multilingual outbound calls cost?",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment - the rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, beyond that per second. Language does not change the rate: a call in Tamil bills the same as a call in English. A hypothetical example: if each of 2,000 answered calls lasts 50 seconds, every call rounds up to one minute - 2,000 billable minutes, ₹8,000 plus GST. The actual cost depends on each answered call's duration and the rounding steps."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 18 November 2026. Language list per the live languages page. Hear it in your customers' language: start a pilot."
          }
        ]
      }
    ]
  },
  "ivr-ai-handoff": {
    "kind": "usecases",
    "slug": "ivr-ai-handoff",
    "related": [
      {
        "to": "/compare/ai-voice-agents-vs-ivr",
        "title": "AI Voice Agents vs Traditional IVR"
      },
      {
        "to": "/use-cases/ivr-replacement",
        "title": "Replace your IVR with an AI-powered one"
      },
      {
        "to": "/ivr",
        "title": "Alterity IVR"
      }
    ],
    "title": "Adding AI Voice Agents to Your Existing IVR",
    "description": "Keep your existing IVR and phone numbers: add AI voice agents that handle routine calls end to end and hand off to your team with full context.",
    "intro": [
      "A traditional IVR guides callers through fixed menus and keypad input; an AI voice agent can simply talk to them. Adding an agent to your existing setup does not mean ripping anything out: the agent can sit behind your current numbers and IVR, handle the calls it is scoped for, and pass the rest to your team."
    ],
    "sections": [
      {
        "heading": "1. Two ways to combine them",
        "blocks": [
          {
            "kind": "p",
            "text": "Your existing IVR keeps answering every call, and specific menu options route to the agent for the intents it handles best - routine questions, confirmations, reminders, status checks. Anything else follows the paths you set, including straight to your team. Either way, your published numbers stay the same and callers keep dialing the numbers they already know."
          }
        ]
      },
      {
        "heading": "2. What a handoff carries",
        "blocks": [
          {
            "kind": "p",
            "text": "When a call needs a person - a confused or upset customer, an unusual request, anything outside the agent's defined scope - it reaches your team with the recording and transcript attached, along with whatever the agent has already collected: name, account or order details, and what the caller asked for. Your team picks up the conversation instead of starting it over."
          }
        ]
      },
      {
        "heading": "3. When to keep the IVR and when to go further",
        "blocks": [
          {
            "kind": "p",
            "text": "The IVR stays in front for as long as it serves the line - nothing in the setup forces the menu out. As the agent proves itself on a scope, more menu options can route to it, and that progression is a choice you make call type by call type."
          }
        ]
      },
      {
        "heading": "4. What it costs",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment - the rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. A hypothetical example: if each of 3,000 answered calls lasts 45 seconds, every call rounds up to one minute - 3,000 billable minutes, ₹12,000 plus GST. The actual cost depends on each answered call's duration and the rounding steps."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 12 November 2026. See the agent on your own call flows: start a pilot."
          }
        ]
      }
    ]
  },
  "payment-reminders": {
    "kind": "usecases",
    "slug": "payment-reminders",
    "related": [
      {
        "to": "/compare/voice-vs-sms-whatsapp-payment-reminders",
        "title": "Voice Calls vs SMS and WhatsApp for Payment Reminders"
      },
      {
        "to": "/use-cases/nbfc-collections",
        "title": "AI Callers for NBFC Collections in India"
      },
      {
        "to": "/use-cases/multilingual-outbound",
        "title": "AI Outbound Calling in Hindi and Indian Languages"
      },
      {
        "to": "/use-cases/insurance-premium-renewal-reminders",
        "title": "AI voice agents for insurance premium renewal reminders"
      }
    ],
    "title": "AI Voice Agents for Payment Reminder Calls",
    "description": "How finance and operations teams use AI voice agents for payment reminder calls, in the customer's language, with human handoff and per-minute pricing.",
    "intro": [
      "Payment reminders repeat on a schedule: before the due date, on it, and after it. An AI voice agent runs those calls at scale, in the customer's language, and hands the call to a person when the conversation needs one."
    ],
    "sections": [
      {
        "heading": "1. What reminder workflows does it run?",
        "blocks": [
          {
            "kind": "p",
            "text": "The full reminder calendar: calls before a due date, on it, and after it. After a missed payment, the agent follows up and records the outcome of every call - promised to pay, asked for a callback, wrong number, unreachable. Every call is recorded and transcribed, so the review that matters - what was said, what was committed - does not depend on agent notes."
          },
          {
            "kind": "callout",
            "text": "Voice is one layer of a reminder sequence - SMS and WhatsApp cover the rest differently.",
            "to": "/compare/voice-vs-sms-whatsapp-payment-reminders",
            "cta": "Voice calls vs SMS and WhatsApp for payment reminders"
          }
        ]
      },
      {
        "heading": "2. Which languages do reminder calls run in?",
        "blocks": [
          {
            "kind": "p",
            "text": "Language is configured per campaign, so a reminder portfolio that spans regions runs each region's calls in its own language. Agents call end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages. The agent understands speech in all 22 scheduled Indian languages and follows the caller when they switch between Hindi and English within the same call."
          }
        ]
      },
      {
        "heading": "3. When does a person take over?",
        "blocks": [
          {
            "kind": "p",
            "text": "When a reminder call turns into a dispute about the amount, a negotiation on dates, or a hardship conversation, it belongs with a person. The agent works inside a scope set before the first call goes out; a call that crosses it routes to your team with the recording and transcript attached, so your team picks up the conversation with full context instead of starting over."
          }
        ]
      },
      {
        "heading": "4. What do reminder calls cost?",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. The rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, beyond that per second. A hypothetical example: if each of 5,000 reminder calls in a month lasts 45 seconds, every call rounds up to one minute - 5,000 billable minutes, ₹20,000 plus GST. The pricing page works through more volumes."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 18 November 2026. See the agent on your own reminder flows: start a pilot."
          }
        ]
      },
      {
        "heading": "5. How does it fit your existing stack?",
        "blocks": [
          {
            "kind": "p",
            "text": "Reminder outcomes land on the customer's record: Alterity integrates with CRMs including Zoho, HubSpot and Salesforce, and connects with your existing telephony and IVR setup - the agent sits behind your current numbers rather than replacing them. Voice is one layer of a reminder sequence; where SMS and WhatsApp fit alongside it is covered in the comparison linked below."
          },
          {
            "kind": "caption",
            "text": "CRM integrations confirmed by the Alterity team, November 2026. See it on your reminders: start a pilot."
          }
        ]
      }
    ]
  },
  "insurance-premium-renewal-reminders": {
    "kind": "usecases",
    "slug": "insurance-premium-renewal-reminders",
    "related": [
      {
        "to": "/use-cases/insurance",
        "title": "Voice AI agents for insurance renewals"
      },
      {
        "to": "/use-cases/payment-reminders",
        "title": "AI Voice Agents for Payment Reminder Calls"
      }
    ],
    "title": "AI voice agents for insurance premium renewal reminders",
    "description": "Alterity's AI voice agents run insurance premium renewal reminder calls in 11 Indian languages - before the due date, during the grace period and after lapse - with insurer-approved scripts, payment-link follow-up and every call on record. Flat Rs 4 per connected minute plus GST.",
    "intro": [
      "Premiums lapse when reminders arrive late, in the wrong language, or without a way to pay on the call. An AI voice agent runs the renewal cadence for every policy on the list - before the due date, on it, through the grace period, and after lapse - in the policyholder's language, and hands the call to a person when the conversation needs one."
    ],
    "sections": [
      {
        "heading": "1. The renewal window, run as a cadence",
        "blocks": [
          {
            "kind": "p",
            "text": "Sync the policies due in a window, approve the script with your compliance team, and set the calling hours. The dialer calls inside those hours: a first reminder before the due date, a nudge on it, follow-ups through the grace period, and revival calls after lapse. Every call ends in a logged outcome - renewed, promised to pay, asked for a callback, wrong number, unreachable - captured as structured fields that sync back to your systems over webhooks. Every call is recorded and transcribed, so what was said and what was committed never depends on agent notes."
          },
          {
            "kind": "callout",
            "text": "The same reminder cadence runs outside insurance - EMIs, invoices, subscription dues.",
            "to": "/use-cases/payment-reminders",
            "cta": "AI voice agents for payment reminder calls"
          }
        ]
      },
      {
        "heading": "2. In the policyholder's language",
        "blocks": [
          {
            "kind": "p",
            "text": "Agents call end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages. The agent understands speech in all 22 scheduled Indian languages and follows the caller when they switch between Hindi and English within the same call. Language is configured per campaign, so a portfolio that spans regions runs each region's calls in its own language."
          }
        ]
      },
      {
        "heading": "3. Approved scripts and disclosures, not improvisation",
        "blocks": [
          {
            "kind": "p",
            "text": "Renewal options, premium amounts and required disclosures are read from your approved script and knowledge base - not improvised. What the agent may and may not say is set before the first call goes out. When a conversation crosses that scope - a coverage dispute, an advice question, a grievance - the call routes to your team with the recording and transcript attached, so your people pick it up with full context. The complete call stays on record either way."
          }
        ]
      },
      {
        "heading": "4. Payment follow-through on the same call",
        "blocks": [
          {
            "kind": "p",
            "text": "When a policyholder is ready to pay, the agent sends a payment link over WhatsApp after the call and logs the commitment. Renewal intent and payment outcomes land on the policy record through CRM integrations including Zoho, HubSpot and Salesforce, so the reminder list, the call outcome and the payment status stay in one place."
          }
        ]
      },
      {
        "heading": "5. What it costs",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat Rs 4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. The rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, beyond that per second. A hypothetical example: a month with 10,000 billable minutes - after the per-call rounding - costs Rs 40,000 plus GST. The pricing page works through more volumes."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 17 November 2026. Run the cadence on your own renewal list: start a pilot."
          }
        ]
      },
      {
        "heading": "6. Where it fits in your stack",
        "blocks": [
          {
            "kind": "p",
            "text": "The agent can sit behind your existing numbers and IVR rather than replacing them, and connects with your current telephony setup. The dialer, agents and dashboard behind these steps are described on the product page. See the agent on your renewal flows: start a pilot."
          }
        ]
      },
      {
        "heading": "Asked before a pilot",
        "blocks": [
          {
            "kind": "p",
            "text": "Can it explain policy terms or coverage? It answers from your approved knowledge base. Questions beyond approved wording are handed to your team, and the full call stays on record."
          },
          {
            "kind": "p",
            "text": "How does the grace-period cadence work? You set the windows: reminders before the due date, on it, during the grace period, and revival calls after lapse. The dialer calls inside the hours you set, and intent is captured as structured fields per call."
          },
          {
            "kind": "p",
            "text": "Does it work in regional languages? Yes - 11 Indian languages plus English, including Hindi-English switching within the same call, set per campaign. See which languages Alterity agents speak."
          }
        ]
      }
    ]
  },

  "ivr-replacement": {
    "kind": "usecases",
    "slug": "ivr-replacement",
    "related": [
      {
        "to": "/compare/ai-voice-agents-vs-ivr",
        "title": "AI Voice Agents vs Traditional IVR"
      },
      {
        "to": "/use-cases/ivr-ai-handoff",
        "title": "Adding AI Voice Agents to Your Existing IVR"
      },
      {
        "to": "/ivr",
        "title": "Alterity IVR"
      }
    ],
    "title": "Replace your IVR with an AI-powered one",
    "description": "Replace your IVR with an AI-powered one: menus where they work, AI voice agents in 11 Indian languages when calls need it. Rs 4 per connected minute plus GST.",
    "intro": [
      "Replacing your IVR does not mean ripping out the menu your callers know. An Alterity IVR is a flow: keypad menus, information playback and digit capture where they work, an AI voice agent at the steps where a caller's need goes beyond a menu, and your team when a person should take over. Your published numbers stay the same, and call types move to the new flow one at a time."
    ],
    "sections": [
      {
        "heading": "1. Menus where they win, AI where they don't",
        "blocks": [
          {
            "kind": "p",
            "text": "Every call lands in a flow you design - routing, information and keypad input where a fixed path works. When a caller's need goes beyond a menu, the flow hands that call to an Alterity AI voice agent: it understands free-form speech, asks follow-up questions and can take actions during the call. Where you configure it, the agent transfers the caller to your team, with the recording, transcript and collected details traveling with the call."
          },
          {
            "kind": "diagram",
            "diagram": "ivr-first-flow",
            "caption": "One flow: menus serve the routine, AI takes the calls that need conversation, your team takes the rest - with full context."
          }
        ]
      },
      {
        "heading": "2. Keep your numbers, move one call type at a time",
        "blocks": [
          {
            "kind": "p",
            "text": "Your published numbers stay the same - callers keep dialing the numbers they already know. The new flow sits behind your current lines, and specific menu options route to the AI agent for the intents it handles best; everything else follows the paths you set. Call types move from fixed flows to conversation one at a time, so a pilot can start with a single line - after-hours calls, status checks, or one busy menu option - and widen as it proves out."
          },
          {
            "kind": "callout",
            "text": "Want to keep your current IVR exactly as it is and add agents only where they help?",
            "to": "/use-cases/ivr-ai-handoff",
            "cta": "Adding AI voice agents to your existing IVR"
          }
        ]
      },
      {
        "heading": "3. AI is a step, not a requirement",
        "blocks": [
          {
            "kind": "p",
            "text": "A menu-only flow is complete on its own and can be assigned to one of your phone numbers - simple routing, information playback and digit capture may never need an agent at all. Alterity's IVR Studio builds both on one canvas - menu, information, digit collection, AI agent and human-handoff steps - so each line gets the mix that fits it, and the mix can change call type by call type."
          },
          {
            "kind": "diagram",
            "diagram": "ivr-example-flow",
            "caption": "An example flow on one number: menu steps, an AI agent step and human-handoff steps, designed in the same IVR Studio canvas."
          }
        ]
      },
      {
        "heading": "4. In the caller's language",
        "blocks": [
          {
            "kind": "p",
            "text": "Agents speak to callers end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages. The agent understands speech in all 22 scheduled Indian languages and follows the caller when they switch between Hindi and English within the same call. Language is configured per campaign, so a portfolio that spans regions runs each region's calls in its own language."
          }
        ]
      },
      {
        "heading": "5. What it costs",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat \u20B94 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. The rate bundles speech-to-text, the language model, the voice, telephony and analytics. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, beyond that per second. A hypothetical example: a month with 10,000 billable minutes - after the per-call rounding - costs \u20B940,000 plus GST. The pricing page works through more volumes."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 17 November 2026. Hear the difference on your own line: start a pilot."
          }
        ]
      },
      {
        "heading": "6. Every call on record",
        "blocks": [
          {
            "kind": "p",
            "text": "Each call is recorded and transcribed, with summaries and outcomes in the same dashboard as your agents, campaigns and flows. What was said and what was committed never depends on agent notes."
          }
        ]
      },
      {
        "heading": "Asked before a pilot",
        "blocks": [
          {
            "kind": "p",
            "text": "Do we have to replace the whole IVR at once? No. Most teams start with one line or one intent behind their existing numbers and move more call types as the flow proves itself. Menus and AI run together on the same number indefinitely."
          },
          {
            "kind": "p",
            "text": "What happens when a caller needs a person? The flow transfers the call to your team with the recording and transcript attached, along with whatever the caller has already told the menu or the agent, so your people continue the conversation instead of starting it over."
          },
          {
            "kind": "p",
            "text": "Does it work in regional languages? Yes - 11 Indian languages plus English, including Hindi-English switching within the same call, set per campaign. See which languages Alterity agents speak."
          }
        ]
      }
    ]
  }
}

export const COMPARE_PAGES = {
  "ai-voice-agents-vs-ivr": {
    "kind": "compare",
    "slug": "ai-voice-agents-vs-ivr",
    "related": [
      {
        "to": "/use-cases/ivr-ai-handoff",
        "title": "Adding AI Voice Agents to Your Existing IVR"
      },
      {
        "to": "/ivr",
        "title": "Alterity IVR"
      }
    ],
    "title": "AI Voice Agents vs Traditional IVR",
    "description": "AI voice agents vs traditional IVR: what each is good at, how the caller experience differs, when a hybrid makes sense, and how to compare costs.",
    "intro": [
      "A traditional IVR runs fixed call flows - menus, keypad input, and often speech recognition for simple intents. An AI voice agent holds an open conversation. Both answer phone lines, and both can connect to your other systems; the choice starts with what you need the call to achieve."
    ],
    "sections": [
      {
        "heading": "1. What each is good at",
        "blocks": [
          {
            "kind": "p",
            "text": "An IVR handles fixed flows well: routing to the right team, simple data capture, structured confirmations - including speech-enabled menus for straightforward intents. It works best when requests follow paths designed in advance. An AI voice agent handles requests that were not scripted: it understands callers in their own words, collects details, answers questions and completes a defined task end to end."
          }
        ]
      },
      {
        "heading": "2. The caller experience difference",
        "blocks": [
          {
            "kind": "p",
            "text": "With a fixed flow, the caller follows the paths offered - smooth when their need matches one of them. With a conversation, the caller simply says what they need. How much the difference matters depends on how varied your calls are: a line where most callers want one of a few known things can suit a fixed flow, while a line where requests vary widely benefits from conversation."
          }
        ]
      },
      {
        "heading": "3. It is not either/or",
        "blocks": [
          {
            "kind": "p",
            "text": "Many setups combine the two: the IVR keeps answering, and specific options route to an AI agent for the intents it handles best, with the agent handing off to your team where you configure it. Call types can move from fixed flows to conversation one at a time, and on Alterity the agent can sit behind your current numbers rather than replacing them."
          }
        ]
      },
      {
        "heading": "4. Comparing costs honestly",
        "blocks": [
          {
            "kind": "p",
            "text": "Compare cost per completed task rather than cost per minute: what each setup costs you for a call that actually achieved something - a confirmation recorded, an appointment rescheduled. Run your own call volumes on both sides of the comparison. On the Alterity side the arithmetic is simple: a flat ₹4 per connected minute plus GST, all-inclusive, with no setup fee and no minimum monthly commitment."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 12 November 2026. Try the difference on your own line: start a pilot."
          }
        ]
      }
    ]
  },
  "voice-vs-sms-whatsapp-payment-reminders": {
    "kind": "compare",
    "slug": "voice-vs-sms-whatsapp-payment-reminders",
    "related": [
      {
        "to": "/use-cases/nbfc-collections",
        "title": "AI Callers for NBFC Collections in India"
      },
      {
        "to": "/blog/nbfc-collections-calls-explained",
        "title": "How Payment Reminder and Collections Calls Work in NBFC Lending"
      }
    ],
    "title": "Voice Calls vs SMS and WhatsApp for Payment Reminders",
    "description": "SMS, WhatsApp or a voice call for payment reminders? Where each channel works, why teams combine them, and what AI voice reminders cost.",
    "intro": [
      "Payment reminders can go out by SMS, WhatsApp or voice call, and most teams end up using more than one. Each channel reaches customers differently, so the useful question is not which channel wins but which job each one does best."
    ],
    "sections": [
      {
        "heading": "1. Where text channels work",
        "blocks": [
          {
            "kind": "p",
            "text": "SMS and WhatsApp are cheap, fast and easy to automate: a due-date notification with a payment link is a good use of a message. For customers who read and act on messages, that may be all a reminder needs."
          }
        ]
      },
      {
        "heading": "2. Where a voice call earns its cost",
        "blocks": [
          {
            "kind": "p",
            "text": "Text channels can be two-way as well - customers reply, and automated flows can capture confirmations. The real difference is synchronicity: a spoken conversation happens in real time, while a text exchange unfolds at the customer's pace or not at all. When a reminder needs a back-and-forth settled in one touch - confirm the customer understood, answer the question they have right then, record a promise to pay with a date, reschedule - a call does it in minutes instead of across a thread. For high-value accounts, repeated non-payers, or customers who do not respond to messages, that real-time resolution is usually what the calling layer is for."
          }
        ]
      },
      {
        "heading": "3. A pattern that uses both",
        "blocks": [
          {
            "kind": "p",
            "text": "A common sequence: message first, call when the message gets no response, and call first for the accounts that matter most. The AI voice agent runs the calling layer at scale - in the customer's language - and writes every outcome back to your CRM, so the next step in the sequence follows what actually happened."
          }
        ]
      },
      {
        "heading": "4. What the calling layer costs",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. A hypothetical example: if each of 1,000 answered calls lasts 35 seconds, every call rounds up to one minute - 1,000 billable minutes, ₹4,000 plus GST. The actual cost depends on each answered call's duration and the rounding steps."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 12 November 2026. Integrates with CRMs including Zoho, HubSpot and Salesforce. Hear it on your reminder flow: start a pilot."
          }
        ]
      }
    ]
  }
}
