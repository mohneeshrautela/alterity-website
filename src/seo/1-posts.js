// Generated from the reviewed blog plan File (gen 22). datePublished: go-live date.
export const POSTS = [
  {
    "slug": "ai-voice-agent-vs-telecaller-cost-india",
    "title": "AI Voice Agent vs Telecaller in India: The Real Cost per Call (2026)",
    "description": "What an AI voice agent costs per call in India versus a telecaller team: the ₹4 connected-minute rate, salary benchmarks and a worksheet.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "When a business compares an AI voice agent with a telecalling team, the first number each side quotes is a rate: rupees per minute on one side, salary per month on the other. Neither number says much on its own. The comparison that matters is cost per completed task - a payment promised, an appointment confirmed, a record updated.",
      "Two measures sound alike and are not the same. Cost per call is total calling spend divided by call count - for a single call, the rate multiplied by connected minutes, after billing rounding and any fees. The denominator matters: counting only answered calls gives a higher figure than counting every attempt, so any quote needs its convention stated. Cost per completed task divides the month's total spend by verified completed tasks, such as a payment promised or an appointment confirmed - not by calls that merely happened. The examples in this article use that one measure."
    ],
    "sections": [
      {
        "heading": "1. The short answer",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity's pay-as-you-go rate is ₹4 per connected minute. That bundles speech-to-text, text-to-speech, the language model, telephony and analytics, so none of them arrives as a separate bill. Rates are in INR plus GST, there is no setup fee, and each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. At that rate, a month with 10,000 billable minutes - after the per-call rounding - costs ₹40,000 plus GST. Because calls round up, billable minutes run higher than connected minutes, so the same month of calling always costs at least the connected-minute figure, and more when calls are short."
          },
          {
            "kind": "caption",
            "text": "Source: alterity.io/pricing, verified 12 November 2026."
          }
        ]
      },
      {
        "heading": "2. Why per-minute rates are hard to compare",
        "blocks": [
          {
            "kind": "p",
            "text": "Vendors differ on what the rate includes, whether tax is added on top, and how time is rounded. One quote bundles telephony and models; another lists them separately. One bills to the second; another rounds each call up. Compare two quotes only after listing what each covers - bundled and unbundled rates are not the same currency. This article does not compare vendors' rates; it works through one public rate and the human baseline."
          }
        ]
      },
      {
        "heading": "3. Cost per completed task, not cost per minute",
        "blocks": [
          {
            "kind": "p",
            "text": "The rate buys minutes. What the business wants is completed tasks. Divide total spend by the tasks actually completed - a payment promised, an appointment confirmed, a details update finished. A low rate with a low completion share can cost more per task than a higher rate that completes more."
          },
          {
            "kind": "p",
            "text": "An example with made-up volumes: 10,000 billable minutes at ₹4 is ₹40,000, after the per-call rounding. If those calls confirm 2,000 appointments, the cost per confirmed appointment is ₹20. If they confirm 1,000, it is ₹40. The rate did not change; the outcome did. This is why pilot measurement matters more than rate shopping."
          }
        ]
      },
      {
        "heading": "4. Counting the human side honestly",
        "blocks": [
          {
            "kind": "p",
            "text": "One public reference point: Indeed reports an average base salary for telemarketers in India of ₹16,594 per month, from 2.6k reported salaries, updated 28 May 2026. That is base pay for one person. Add recruiting, training, supervision, attrition, telephony and workspace from your own books, and count capacity honestly: a person makes one call at a time, works fixed hours and takes leave."
          },
          {
            "kind": "p",
            "text": "The point is not that one side always wins. It is that the human figure on a spreadsheet is usually base salary, while the AI figure is the whole stack. Compare like with like."
          },
          {
            "kind": "caption",
            "text": "Source: in.indeed.com/career/telemarketer/salaries, figure rechecked 6 November 2026."
          }
        ]
      },
      {
        "heading": "5. A worksheet you can fill in",
        "blocks": [
          {
            "kind": "p",
            "text": "For one month, write down:"
          },
          {
            "kind": "bullets",
            "items": [
              "AI side: expected calls, average connected minutes per call, and the share of calls that should complete their task. Apply the per-call rounding to get billable minutes, multiply by your quoted rate and add GST.",
              "Human side: seats, fully loaded cost per seat (salary plus the overheads above), calls each seat actually finishes in a day, and the share that complete their task.",
              "Divide each side's monthly cost by its completed tasks. Compare those two numbers, not the rates."
            ]
          },
          {
            "kind": "p",
            "text": "Then run a pilot and replace the estimates with measured numbers. The companion article below is the evaluation method."
          }
        ]
      }
    ]
  },
  {
    "slug": "evaluate-voice-ai-pilot",
    "title": "How to Evaluate a Voice AI Pilot: Calls, Corrections and Human Handoffs",
    "description": "A practical way to evaluate a voice AI pilot: score tasks, test corrections and languages, and end with a written readout, not a demo.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [],
    "sections": [
      {
        "heading": "1. What a pilot should answer",
        "blocks": [
          {
            "kind": "p",
            "text": "A voice AI pilot should answer a specific question about a specific workflow. Start there, rather than with a list of features or a polished demonstration."
          },
          {
            "kind": "p",
            "text": "Write down what a completed task means. An appointment confirmation, a support resolution and a callback request are different outcomes. Decide which ones the pilot is meant to handle and which should reach a person."
          },
          {
            "kind": "p",
            "text": "Build test conversations around that scope. Include the routine path, then change one thing at a time: the caller corrects a date, interrupts, switches language or asks for a person. For each case, write the expected next step before reviewing the result."
          },
          {
            "kind": "p",
            "text": "Review the conversation and the record together. A correction appearing in the transcript does not prove that the next response or final summary used it. Listen to what was said and compare it with the action your team would take."
          },
          {
            "kind": "p",
            "text": "Record the remaining work. Track time spent reviewing exceptions, correcting summaries and returning calls. A handoff can be the right outcome, but it should still be visible in the evaluation."
          },
          {
            "kind": "p",
            "text": "Finish with a decision, not a showcase. State what the pilot handled, what failed, what still needed people and what you would change before expanding it. Keep the sample and its limits beside the conclusion."
          }
        ]
      },
      {
        "heading": "2. Score the pilot on what the calls were supposed to do",
        "blocks": [
          {
            "kind": "p",
            "text": "A pilot produces plenty of numbers. Most of them describe activity, not outcomes. Minutes connected, calls placed, average duration - these tell you the system ran. They do not tell you whether it worked."
          },
          {
            "kind": "p",
            "text": "Score the pilot against the task each call was meant to complete, and set the pass bar before the pilot starts, in writing. A vendor that defines success after the results arrive can always claim a successful pilot."
          }
        ]
      },
      {
        "heading": "3. Test the boundary of the workflow",
        "blocks": [
          {
            "kind": "p",
            "text": "Include a request the agent should not complete, such as changing an appointment when no verified slot is available. Write down the safe next step in advance: ask a clarifying question, leave the record unchanged or route the request to a person. Review whether the call and the final record stay within that boundary."
          }
        ]
      },
      {
        "heading": "4. Run the language test early",
        "blocks": [
          {
            "kind": "p",
            "text": "A pilot that runs only in English tells you almost nothing about how the system will perform for your customers. Pick the two or three languages that make up most of your call volume and make them part of the pilot from week one."
          },
          {
            "kind": "p",
            "text": "What to listen for: does the agent understand a caller who switches languages mid-sentence? Does it keep the conversation moving on a noisy line, with a strong regional accent? When it mishears, does it recover gracefully or loop?"
          },
          {
            "kind": "p",
            "text": "Measure recognition quality per language, not as one blended average - an average can hide a language where the system fails half the time. And test on phone audio, not studio recordings: compression and background noise change the results."
          }
        ]
      },
      {
        "heading": "5. End the pilot with a readout, not a vibe",
        "blocks": [
          {
            "kind": "p",
            "text": "A pilot should end with a written readout, not a demo and a feeling. Ask the vendor - or your own team - for four things: a sample of real recordings you reviewed yourself, scored per language; the correction and handoff logs, not just the averages; the cost per completed task against your current baseline, with the assumptions shown; and a clear list of where the system failed. Zero observed failures proves nothing on its own - make sure the pilot deliberately includes the hard cases: noisy lines, strong accents, language switches, out-of-scope requests."
          }
        ]
      }
    ]
  },
  {
    "slug": "connected-minute-voice-ai-billing",
    "title": "What a Connected Minute Means in Voice AI Billing",
    "description": "What a connected minute is in voice AI billing, how per-call rounding works at the public ₹4 rate, and what to ask any vendor about billing.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "Alterity bills voice calls by the connected minute. Billing units differ across vendors - per minute, per call, per seat or bundled into platform fees - so two quotes with the same per-minute number can produce very different bills. The difference is usually in what counts as connected, how time is rounded, and what the rate includes."
    ],
    "sections": [
      {
        "heading": "1. What a connected minute is",
        "blocks": [
          {
            "kind": "p",
            "text": "A connected minute is time on a call after it connects: it starts when the call is answered - by a person or an answering machine, however briefly - and ends when the call hangs up. Calls that never connect (no answer, busy, failed) do not produce connected minutes. When you estimate a monthly bill, start from the calls that will actually connect, not the number of dials."
          }
        ]
      },
      {
        "heading": "2. How the Alterity rate works",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. That one rate bundles speech-to-text, the language model, the voice, telephony and analytics, so none of them arrives as a separate bill. Committed monthly volumes move to a custom enterprise plan."
          },
          {
            "kind": "p",
            "text": "Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. So a 20-second call bills 30 seconds (₹2), a 45-second call bills one minute (₹4), and a 90-second call bills 90 seconds (₹6) - all plus GST."
          },
          {
            "kind": "caption",
            "text": "Source: alterity.io/pricing, verified 12 November 2026."
          }
        ]
      },
      {
        "heading": "3. Why rounding changes your effective rate",
        "blocks": [
          {
            "kind": "p",
            "text": "Because each call rounds up, billable minutes run higher than connected minutes. The effect is largest on short calls: a campaign of 20-second answer-and-confirm calls bills one and a half times its connected time. A month with 10,000 billable minutes - after the per-call rounding - costs ₹40,000 plus GST, and the same month of calling always costs at least the connected-minute figure. When you model costs, estimate average call duration first, apply the rounding steps, then multiply."
          }
        ]
      },
      {
        "heading": "4. What the rate includes - and what to ask other vendors",
        "blocks": [
          {
            "kind": "p",
            "text": "A bundled rate and an unbundled rate are not the same currency. Some vendors quote a platform fee and charge telephony, speech-to-text and the language model separately; others quote one number for everything. Before comparing two quotes, list what each covers. Four questions settle most of it: What exactly counts as a connected minute? How is each call rounded? What is included in the rate, and what bills separately? Is tax included or added on top?"
          },
          {
            "kind": "p",
            "text": "The point of a clear unit is that you can check a bill yourself. Take a week of real calls, apply the steps, and the number should match the invoice. If it does not, the quote was not the whole story."
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-voice-agent-monthly-cost-india",
    "title": "What an AI Voice Agent Costs per Month in India",
    "description": "Worked monthly costs for an AI voice agent in India at the public ₹4 rate: 1,000, 10,000 and 50,000 billable minutes, and what drives the total.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "Monthly cost questions deserve monthly arithmetic. At Alterity's public pay-as-you-go rate of ₹4 per connected minute plus GST, the monthly bill is a straight multiplication - once you account for how each call is rounded."
    ],
    "sections": [
      {
        "heading": "1. The rate and the rounding",
        "blocks": [
          {
            "kind": "p",
            "text": "The rate bundles speech-to-text, the language model, the voice, telephony and analytics, with no setup fee and no minimum monthly commitment. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. Because calls round up, billable minutes run higher than connected minutes, so the figures below are in billable minutes - after rounding."
          },
          {
            "kind": "caption",
            "text": "Source: alterity.io/pricing, verified 12 November 2026."
          }
        ]
      },
      {
        "heading": "2. Worked monthly volumes",
        "blocks": [
          {
            "kind": "bullets",
            "items": [
              "1,000 billable minutes in a month: ₹4,000 plus GST. Roughly a small pilot - a few hundred short confirmation calls.",
              "10,000 billable minutes: ₹40,000 plus GST. For example, about 5,000 answered calls averaging two billable minutes each.",
              "50,000 billable minutes: ₹2,00,000 plus GST. Steady outbound volume across several campaigns."
            ]
          },
          {
            "kind": "p",
            "text": "Committed monthly volumes move to a custom enterprise plan, so high-volume buyers should model both. There is no setup fee and no contract at the pay-as-you-go rate, so a pilot does not commit you to the next tier."
          }
        ]
      },
      {
        "heading": "3. What drives the total",
        "blocks": [
          {
            "kind": "p",
            "text": "Two numbers drive a monthly bill: answered calls and average call duration. Estimate the calls that will actually connect - not dials - and be honest about duration: payment-reminder calls are short, support calls run long. Apply the rounding steps call by call rather than to an average, because short calls carry the heaviest rounding. The companion article on connected minutes works through the mechanics."
          }
        ]
      },
      {
        "heading": "4. What the month buys",
        "blocks": [
          {
            "kind": "p",
            "text": "A monthly bill buys minutes, not outcomes. Whether ₹40,000 is expensive depends on what the calls complete - payments promised, orders confirmed, appointments kept. The telecaller comparison article works through cost per completed task; it is the number worth comparing, not the rate."
          }
        ]
      }
    ]
  },
  {
    "slug": "compare-ai-voice-calling-prices-india",
    "title": "How to Compare AI Voice Calling Prices in India",
    "description": "Per minute, per call, per seat or platform fee: put two AI voice calling quotes on the same footing, with Alterity's flat ₹4 rate as the worked example.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "Vendors price AI voice calling in several ways - per minute, per call, per seat, or bundled into a platform fee - and the models do not compare line to line. Two quotes for the same calling workload can produce very different bills. This guide shows how to put any quote on the same footing, using Alterity's own rate - a flat ₹4 per connected minute plus GST, with speech-to-text, the language model, the voice, telephony and analytics bundled in - as the worked example."
    ],
    "sections": [
      {
        "heading": "Start with what is billable",
        "blocks": [
          {
            "kind": "p",
            "text": "Before any number, establish what the meter counts. Alterity bills connected minutes: the clock starts when a call is answered - by a person or an answering machine, however briefly - and stops when it hangs up. Calls that never connect (no answer, busy, failed) produce no billable time. Ask every vendor the same question: does the clock start at dial or at answer?"
          }
        ]
      },
      {
        "heading": "Run the rounding on your own call lengths",
        "blocks": [
          {
            "kind": "p",
            "text": "Per-call rounding changes what a per-minute rate means. Alterity's steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. Worked examples at the ₹4 rate: a 20-second call costs ₹2, a 45-second call costs ₹4, a 90-second call costs ₹6. Short calls feel rounding most - apply each vendor's rounding to your own expected call durations, not to an average."
          }
        ]
      },
      {
        "heading": "Put every quote on the same unit",
        "blocks": [
          {
            "kind": "p",
            "text": "Convert each quote to one monthly figure using your volumes: your connected calls per month multiplied by your expected durations, with that vendor's rounding applied call by call. Four questions make any quote convertible: What counts as billable time? How does per-call rounding work? What is bundled, and what arrives as a separate bill? Is there a setup fee or a minimum monthly commitment? A quote that cannot answer all four cannot be compared."
          }
        ]
      },
      {
        "heading": "The bottom line",
        "blocks": [
          {
            "kind": "p",
            "text": "At ₹4 per connected minute plus GST - no setup fee, no minimum monthly commitment - a month of 10,000 billable minutes costs ₹40,000 plus GST. The only rate comparison that matters is the one run on your own call volumes and durations."
          },
          {
            "kind": "caption",
            "text": "Source: alterity.io/pricing, verified 12 November 2026. Run your volumes: the pricing calculator on the site models your own call mix."
          }
        ]
      }
    ]
  },
  {
    "slug": "test-multilingual-voice-agent",
    "title": "How to Test a Multilingual Voice Agent Before You Buy",
    "description": "A practical test protocol for multilingual voice agents: per-language scripts, code-switching, noisy lines, accents and mishearing recovery.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "Language coverage is a standard claim in voice AI, and the claim is the cheapest part of the product. What matters is whether the agent holds up on your calls, in your customers' languages, under your call conditions. That is testable before you sign anything - here is a protocol."
    ],
    "sections": [
      {
        "heading": "1. Build the test script from real calls",
        "blocks": [
          {
            "kind": "p",
            "text": "Pull phrases from your own call recordings, not from a textbook: how your customers actually greet, how they state an order number or an amount, how they ask the questions your team hears daily. A demo built on the vendor's script tells you about the vendor's script."
          }
        ]
      },
      {
        "heading": "2. Test each language separately",
        "blocks": [
          {
            "kind": "p",
            "text": "A fluent Hindi demo says nothing about Tamil or Bengali. Run the same script in every language you plan to use, and treat \"we support 15 languages\" as fifteen separate claims to verify. Alterity, for the record, calls end to end in 11 Indian languages - Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English and mainstream foreign languages: test whichever of those you need."
          }
        ]
      },
      {
        "heading": "3. Test the switch",
        "blocks": [
          {
            "kind": "p",
            "text": "A large share of real Indian conversations code-switch - a sentence that starts in Hindi and ends in English, a number stated in English inside a Tamil sentence. Switch mid-sentence during the test and watch whether the agent follows or forces the caller back into one language."
          }
        ]
      },
      {
        "heading": "4. Test the hard conditions",
        "blocks": [
          {
            "kind": "p",
            "text": "Call from a noisy room. Use a speakerphone. Speak fast, and with the regional accent your customers have. When the agent mishears - and every agent sometimes does - watch what it does: a good agent confirms the number or date back instead of guessing and moving on."
          }
        ]
      },
      {
        "heading": "5. Judge the evidence, not the demo",
        "blocks": [
          {
            "kind": "p",
            "text": "Ask for real call recordings in each language, and score them against task completion: did the call achieve what it was meant to, and did the agent know when to hand off to a person? Fluency that does not complete the task is a demo, not a result."
          },
          {
            "kind": "caption",
            "text": "Test us the same way: start a pilot and run this protocol on Alterity."
          }
        ]
      }
    ]
  },
  {
    "slug": "nbfc-collections-calls-explained",
    "title": "How Payment Reminder and Collections Calls Work in NBFC Lending",
    "description": "The call calendar of a loan: pre-due reminders, missed-payment follow-ups, promise-to-pay tracking, and where automation fits in NBFC collections.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "Collections in lending runs on phone calls: reminders before a due date, follow-ups after a missed one, checks on promises to pay. The work is high-volume and repetitive, which is exactly why lenders look at automation for it. Here is how the calling cycle typically runs."
    ],
    "sections": [
      {
        "heading": "1. The call calendar of a loan",
        "blocks": [
          {
            "kind": "p",
            "text": "Before the EMI date, a reminder goes out as a service call, not a chase. On or after the due date, follow-ups begin on missed payments. When a borrower commits to a date, that promise-to-pay gets its own callback on the day, to check it was kept. Each stage has its own tone, script and success measure."
          }
        ]
      },
      {
        "heading": "2. What a good collections call records",
        "blocks": [
          {
            "kind": "p",
            "text": "The outcome categories matter as much as the conversation: promised to pay with a date, asked for a callback, wrong number, unreachable, dispute raised. Recorded and transcribed calls mean the record of what was said and committed does not depend on an agent's notes - which matters when an account is reviewed later."
          }
        ]
      },
      {
        "heading": "3. Where automation fits",
        "blocks": [
          {
            "kind": "p",
            "text": "The repetitive first contacts - reminders, follow-ups, promise-to-pay checks - are the automatable layer: an AI voice agent can run them at portfolio scale, in the borrower's language, with every outcome written back to the CRM. Hardship conversations, disputes and negotiations belong with people; the agent's job is to recognize those and hand off with the full context attached."
          }
        ]
      },
      {
        "heading": "4. What to ask a vendor",
        "blocks": [
          {
            "kind": "p",
            "text": "Can you hear real call recordings, with transcripts, in the languages your borrowers speak? Does every outcome land on the borrower's record in your CRM automatically? Is the agent's scope defined, with a clean route to your team for anything outside it? Alterity's answers: yes, via integrations with CRMs including Zoho, HubSpot and Salesforce, and yes."
          },
          {
            "kind": "caption",
            "text": "CRM integrations confirmed by the Alterity team, November 2026. See it on your portfolio: start a pilot."
          }
        ]
      }
    ]
  },
  {
    "slug": "appointment-reminder-calls-clinics",
    "title": "Appointment Reminder Calls for Clinics and Healthcare Providers",
    "description": "How clinics use reminder calls: appointment confirmations, rescheduling and waitlist backfills in the patient's language, with clinical questions sent to staff.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "An empty slot is a cost a clinic cannot recover: the doctor's time was reserved, and the patient who missed it still needs care. Reminder calls are the standard answer, and how they run decides how much they help."
    ],
    "sections": [
      {
        "heading": "1. The reminder workflows that matter",
        "blocks": [
          {
            "kind": "p",
            "text": "A confirmation call a day or two before the appointment. A rescheduling option inside the same call, so a patient who cannot make it says so instead of silently not showing up. And when a slot does free up, a call down the waitlist to backfill it. Each of these is a short, structured conversation - the kind an AI voice agent is built to run at scale."
          }
        ]
      },
      {
        "heading": "2. In the patient's language",
        "blocks": [
          {
            "kind": "p",
            "text": "The agent calls each patient in the language they are comfortable in - end to end in 11 Indian languages: Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English, and follows the caller when they switch between Hindi and English within the same call."
          }
        ]
      },
      {
        "heading": "3. A firm scope, with people behind it",
        "blocks": [
          {
            "kind": "p",
            "text": "The agent confirms, reschedules and records - it does not give medical advice, answer clinical questions or discuss reports. Anything outside its defined scope routes to your staff with the recording and transcript attached."
          }
        ]
      },
      {
        "heading": "4. What it costs",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. Reminder calls are short, and each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second. Run your appointment volume through the steps for your own figure."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 12 November 2026. See it on your appointment book: start a pilot."
          }
        ]
      }
    ]
  },
  {
    "slug": "education-fee-admissions-calling",
    "title": "Fee Reminder and Admissions Calling for Education Providers",
    "description": "How education providers use AI calling for fee reminders, admissions follow-ups and parent communication - in the family's language, at ₹4 per connected minute.",
    "datePublished": "2026-11-13",
    "byline": "Alterity team",
    "intro": [
      "Schools, colleges and coaching institutes run on conversations with families: fee reminders, admissions follow-ups, event and meeting notices. The volume spikes around dates that matter - fee deadlines, admission seasons - which is exactly when the calling outgrows the office staff."
    ],
    "sections": [
      {
        "heading": "1. The workflows it covers",
        "blocks": [
          {
            "kind": "p",
            "text": "Fee reminders before and after a due date, with the outcome recorded. Admissions follow-ups with prospective families who enquired but have not applied. Reminders for parent-teacher meetings, orientations and document deadlines. Each call is short and structured, and every outcome lands on the student's record."
          }
        ]
      },
      {
        "heading": "2. Families answer in their own language",
        "blocks": [
          {
            "kind": "p",
            "text": "The agent calls each family in the language they are comfortable in - end to end in 11 Indian languages: Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia and Urdu - plus English, and follows the caller when they switch between Hindi and English within the same call."
          }
        ]
      },
      {
        "heading": "3. Where your team steps in",
        "blocks": [
          {
            "kind": "p",
            "text": "A parent with a fee-dispute, a special request or an admissions question beyond the basics should reach your office. The agent works inside a defined scope and routes those calls to your team with the recording and transcript attached."
          }
        ]
      },
      {
        "heading": "4. What it costs",
        "blocks": [
          {
            "kind": "p",
            "text": "Alterity charges a flat ₹4 per connected minute plus GST, pay as you go, with no setup fee and no minimum monthly commitment. Each call bills in steps: up to 30 seconds bills as 30 seconds, 31 to 60 seconds bills as a full minute, and beyond a minute you pay per second - so a month of short reminder calls stays proportionately inexpensive. Run your own call volumes through the steps for a figure."
          },
          {
            "kind": "caption",
            "text": "Pricing source: alterity.io/pricing, verified 12 November 2026. See it on your admissions or fee flow: start a pilot."
          }
        ]
      }
    ]
  },
]

export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug)
