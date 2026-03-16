import '../TermsPage/TermsPage.css'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/Accordion'

const SECTIONS = [
  {
    num: '1',
    title: 'Nature of Role under DPDP Act, 2023',
    subsections: [
      {
        label: 'Data Fiduciary',
        body: 'We act as a Data Fiduciary for the personal data provided by You (our business clients) to create and manage your account.',
      },
      {
        label: 'Data Processor',
        body: 'For personal data of end-consumers contained within voice calls, recordings, or transcripts processed by our AI agents, we act as a Data Processor on Your behalf. You remain the Data Fiduciary for your end-consumers\u2019 data.',
      },
    ],
  },
  {
    num: '2',
    title: 'Information We Collect',
    body: 'We collect information necessary to provide AI-powered voice services, including:',
    subsections: [
      {
        label: 'Account Information',
        body: 'Name, business email address, phone number, and billing address.',
      },
      {
        label: 'Operational Data',
        body: 'Phone numbers called, call timestamps, and call duration.',
      },
      {
        label: 'Voice and Text Data',
        body: 'Audio recordings of calls and machine-generated transcripts used to fulfill conversational workflows.',
      },
      {
        label: 'Technical Data',
        body: 'IP addresses, browser type, and device identifiers collected via cookies to improve platform performance.',
      },
    ],
  },
  {
    num: '3',
    title: 'Purpose of Processing (Lawful Basis)',
    body: 'Under the Digital Personal Data Protection Act, 2023 (DPDP Act), we process personal data only for lawful purposes based on consent or legitimate uses.\n\nThese purposes include:\n\nProviding, maintaining, and improving our Voice AI agents.\n\nProcessing payments and preventing fraudulent transactions.\n\nComplying with applicable legal and regulatory obligations, including telecom regulations in India.\n\nTraining and improving AI systems using anonymized and de-identified data.',
  },
  {
    num: '4',
    title: 'Rights of the Data Principal',
    body: 'Under the Digital Personal Data Protection Act, 2023, You (and where applicable, your end-consumers) have the following rights:',
    subsections: [
      {
        label: 'Right to Access',
        body: 'You may request a summary of the personal data being processed.',
      },
      {
        label: 'Right to Correction and Erasure',
        body: 'You may request correction of inaccurate personal data or request deletion of personal data that is no longer necessary for the purpose for which it was collected.',
      },
      {
        label: 'Right to Withdraw Consent',
        body: 'You may withdraw your consent at any time. Withdrawal of consent will not affect the legality of processing conducted prior to the withdrawal.',
      },
      {
        label: 'Right to Grievance Redressal',
        body: 'You have the right to approach our Grievance Officer regarding any concerns related to personal data processing.',
      },
    ],
  },
  {
    num: '5',
    title: 'Data Storage and Transfer',
    subsections: [
      {
        label: 'Data Localization',
        body: 'We prioritize storing personal data on secure servers located within India.',
      },
      {
        label: 'Cross-Border Data Transfers',
        body: 'If data is transferred outside India for processing purposes, such transfers are conducted in accordance with the applicable provisions of the Digital Personal Data Protection Act, 2023 and any applicable government notifications.',
      },
    ],
  },
  {
    num: '6',
    title: 'Data Retention',
    body: 'We retain personal data only for as long as necessary to fulfill the purposes described in this Policy or as required by applicable law.\n\nFinancial and transactional records may be retained for the duration required under applicable Indian laws and regulations.\n\nAudio recordings and associated transcripts are retained only for the duration necessary for service delivery and operational purposes.',
  },
  {
    num: '7',
    title: 'Security Measures',
    body: 'We implement industry-standard technical and organizational measures to protect personal data, including:',
    subsections: [
      {
        label: 'Encryption',
        body: 'Data is encrypted both in transit and at rest using secure protocols.',
      },
      {
        label: 'Access Control',
        body: 'Role-based access controls are implemented to limit access to sensitive data.',
      },
      {
        label: 'Audit Logging',
        body: 'System access and processing activities are logged and monitored.',
      },
    ],
  },
  {
    num: '8',
    title: "Children's Privacy",
    body: 'Our Platform is intended for users who are 18 years of age or older. We do not knowingly collect or process personal data from children. If we become aware that personal data from a child has been collected, such data will be deleted promptly.',
  },
  {
    num: '9',
    title: 'Grievance Redressal Officer',
    body: 'In compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, users may contact our Grievance Officer for any privacy-related concerns.\n\nName: Aaryan Mehta\nDesignation: Grievance and Data Protection Officer\nEmail: support@alterity.io\n\nAddress: Lotus Boulevard, Tower 22/803, Sector 100, Noida, Uttar Pradesh \u2013 201304, India',
  },
  {
    num: '10',
    title: 'Data Protection and Security',
    body: 'Your Data is Your Competitive Advantage. We Keep it That Way.\n\nAlterity is built with a privacy-first architecture, ensuring alignment with Indian and global data protection standards.',
    subsections: [
      {
        label: 'DPDP Act (2023) Ready',
        body: 'Our platform is designed to align with India\u2019s Digital Personal Data Protection Act, providing transparency and control over personal data processing.',
      },
      {
        label: 'Indian Data Residency',
        body: 'We prioritize hosting and storing data within secure India-based cloud infrastructure to support regulatory compliance and operational reliability.',
      },
      {
        label: 'SOC 2 and GDPR Standards',
        body: 'We implement strong encryption standards, including AES-256 encryption, to protect voice recordings and transcripts both in transit and at rest.',
      },
      {
        label: 'No Unauthorized Training',
        body: 'We do not use proprietary customer business data to train public AI models without explicit authorization.',
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="terms-page">
      <div className="terms-page__inner">

        {/* Header */}
        <div className="terms-page__header">
          <h1 className="terms-page__title">Privacy Policy</h1>
          <p className="terms-page__intro" style={{ fontSize: '13px', opacity: 0.6, marginBottom: '8px' }}>
            Last Updated: March 15, 2026
          </p>
          <p className="terms-page__intro">
            This Privacy Policy (&ldquo;Policy&rdquo;) explains how GOODKLICKS DIGITAL VENTURES LLP (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;) collects, processes, stores, and shares personal data from users (&ldquo;You&rdquo; or &ldquo;Your&rdquo;) of the Alterity platform available at{' '}
            <a href="https://alterity.io" className="terms-page__link">https://alterity.io</a> (&ldquo;Platform&rdquo;).
          </p>
          <p className="terms-page__intro" style={{ marginBottom: '40px' }}>
            By using our Services, you consent to the practices described in this Policy. If you do not agree with this Policy, please do not use the Platform.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="terms-accordion">
          {SECTIONS.map((s) => (
            <AccordionItem key={s.num} value={s.num}>
              <AccordionTrigger>
                <span className="terms-trigger__content">
                  <span className="terms-trigger__num">{s.num}.</span>
                  <span className="terms-trigger__title">{s.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {s.body && s.body.split('\n\n').map((para, j) => (
                  <p key={j} className="terms-body__para" style={{ whiteSpace: 'pre-line' }}>{para}</p>
                ))}
                {s.subsections && s.subsections.map((sub) => (
                  <div key={sub.label} className="terms-subsection">
                    <h3 className="terms-subsection__label">{sub.label}</h3>
                    <p className="terms-body__para">{sub.body}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </div>
  )
}
