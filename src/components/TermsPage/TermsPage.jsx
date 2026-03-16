import './TermsPage.css'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/Accordion'

const SECTIONS = [
  {
    num: '1',
    title: 'About the Service',
    body: 'Alterity is an AI-powered voice platform. The Service allows users to create, deploy, and manage intelligent voice agents capable of real-time conversation, transcription, and workflow automation.',
  },
  {
    num: '2',
    title: 'Communications',
    body: 'Creating an account with Alterity means you may receive emails from us, including product news, updates, and promotional content. If you would prefer not to receive such communications, you can unsubscribe at any time using the link provided at the bottom of any email we send you.',
  },
  {
    num: '3',
    title: 'Subscriptions',
    body: 'Access to certain features of the Service requires a paid subscription ("Subscription"). Subscription fees are charged in advance and renew automatically at the end of each billing period ("Billing Cycle"), which may be monthly or annual depending on the plan you choose.\n\nYour Subscription will continue to renew on the same terms unless you cancel it or we cancel it on our end. Cancellations can be made through your account settings or by getting in touch with our support team.\n\nTo keep your Subscription active, you must have a valid payment method on file. By providing your payment details, you authorise Alterity to charge the applicable fees to that payment method at each renewal. You are responsible for ensuring your billing information — including name, address, and payment details — remains accurate and up to date.\n\nIf a payment fails for any reason, we will send you an invoice and ask you to complete the payment manually before the due date shown on that invoice.',
  },
  {
    num: '4',
    title: 'Free Trial',
    body: 'At our discretion, Alterity may offer a free trial period for new subscribers. The terms and duration of any free trial will be communicated at the time of the offer. We reserve the right to withdraw or modify free trial offerings at any time.',
  },
  {
    num: '5',
    title: 'Pricing Changes',
    body: 'We may update our Subscription pricing from time to time. Any price change will come into effect at the start of your next Billing Cycle after the change is announced.\n\nWe will give you advance notice before any pricing update takes effect so you have the opportunity to cancel if you choose not to continue at the new rate. If you continue using the Service after the new pricing kicks in, that will be taken as your acceptance of the updated fees.',
  },
  {
    num: '6',
    title: 'Refunds',
    body: 'Subscription fees are generally non-refundable once paid, unless a refund is required under applicable law. We encourage you to explore any available free trial before purchasing a plan.',
  },
  {
    num: '7',
    title: 'Content',
    subsections: [
      {
        label: '7.1 Your Content',
        body: 'Alterity does not claim any ownership over the content, recordings, or data you create, upload, or transmit while using the Service ("User Content"). That content remains yours. However, by using the Service, you grant us a limited licence to store and process your User Content as needed to deliver the Service to you. You also grant us a perpetual, irrevocable licence to use anonymised and aggregated versions of your User Content for the purpose of improving and analysing the platform, in line with our Privacy Policy.',
      },
      {
        label: '7.2 Feedback',
        body: 'If you share feedback, suggestions, or ideas with us about the Service, you agree that we are free to use that input without any obligation to keep it confidential or compensate you for it. We may incorporate your feedback into our products or services at our discretion.',
      },
      {
        label: '7.3 Data',
        body: 'You retain full ownership of all data associated with your account. We will only access your account data when it is necessary to operate the Service, resolve a technical issue, or process billing. By using the Service, you grant Alterity and its affiliates a licence to use and process your data to the extent required to provide and improve the Service, including the creation of anonymised, aggregated data ("Anonymous Service Data"). Alterity owns all rights to such Anonymous Service Data. Where applicable, members of your organisation may also have access to your User Content in accordance with our Privacy Policy.',
      },
    ],
  },
  {
    num: '8',
    title: 'Account Responsibilities',
    body: 'When you register for an account, you confirm that you are at least 18 years old and that the details you provide are accurate, complete, and kept up to date. Providing false or outdated information may result in your account being suspended or terminated.\n\nYou are solely responsible for keeping your login credentials secure and for any activity that takes place under your account. If you suspect your account has been accessed without authorisation, please notify us immediately.',
  },
  {
    num: '9',
    title: 'Intellectual Property',
    body: 'All content, features, and technology that make up the Service — excluding User Content — are the intellectual property of Alterity and its licensors. Nothing in these Terms gives you the right to use our brand, trademarks, or proprietary technology without our prior written permission.',
  },
  {
    num: '10',
    title: 'External Links',
    body: 'The Service may include links to third-party websites or services. We do not own or control these external platforms and are not responsible for their content, privacy practices, or reliability. We recommend reviewing the terms and privacy policies of any third-party site you visit through links on our platform. Alterity will not be held liable for any loss or damage arising from your use of third-party services.',
  },
  {
    num: '11',
    title: 'Termination',
    body: 'We reserve the right to suspend or terminate your account at any time, without notice, if we determine that you have breached these Terms or engaged in conduct that is harmful to the Service, other users, or third parties.\n\nIf you wish to close your account, you may do so by discontinuing your use of the Service. Certain provisions of these Terms — including those relating to intellectual property, indemnification, disclaimers, and liability — will continue to apply after termination.',
  },
  {
    num: '12',
    title: 'Indemnification',
    body: 'You agree to indemnify and hold harmless Alterity, its affiliates, directors, officers, employees, and agents from any claims, losses, damages, liabilities, or expenses (including legal fees) that arise out of or relate to your use of the Service, any breach of these Terms, or any content you post or share through the Service.',
  },
  {
    num: '13',
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, Alterity and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, or goodwill — regardless of how such damages arise. This applies whether the claim is based on contract, tort, negligence, or any other legal theory, and even if we have been made aware of the possibility of such damages.',
  },
  {
    num: '14',
    title: 'No Warranties',
    body: 'Your use of the Service is entirely at your own risk. The Service is provided "as is" and "as available," without any warranties of any kind — whether express or implied — including warranties of merchantability, fitness for a particular purpose, or non-infringement.\n\nWe do not guarantee that the Service will be available at all times, free from errors or interruptions, secure from external threats, or that it will meet your specific requirements.',
  },
  {
    num: '15',
    title: 'Jurisdictional Variations',
    body: 'Depending on where you are located, certain warranty exclusions or liability limitations outlined in these Terms may not apply to you, as some jurisdictions do not permit such exclusions.',
  },
  {
    num: '16',
    title: 'Governing Law',
    body: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts at Noida, Uttar Pradesh [or New Delhi], India.',
  },
  {
    num: '17',
    title: 'Updates to These Terms',
    body: 'We may update these Terms from time to time. Where a change is material, we will notify you at least 30 days before the updated Terms come into effect. What counts as a material change is at our discretion.\n\nContinuing to use the Service after updated Terms take effect means you accept the revised Terms. If you do not agree, you should stop using the Service before the changes become effective.',
  },
  {
    num: '18',
    title: 'Privacy Policy',
    body: 'For details on how we collect, use, and protect your data, please review our Privacy Policy at https://alterity.io/privacy/',
  },
  {
    num: '19',
    title: 'Get in Touch',
    body: 'For any questions or concerns regarding these Terms, reach out to us at support@alterity.io',
  },
]

export default function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-page__inner">

        {/* Header */}
        <div className="terms-page__header">
          <h1 className="terms-page__title">Terms of Use</h1>
          <p className="terms-page__intro">
            By accessing or using the website at{' '}
            <a href="https://alterity.io" className="terms-page__link">https://alterity.io</a>{' '}
            and any related web applications (collectively referred to as the "Service"), you acknowledge that you have read,
            understood, and agree to be bound by the following Terms and Conditions. These Terms govern your use of the Service
            and apply to all individuals who visit, access, or use it in any capacity. If you do not agree with these Terms,
            you are not permitted to use the Service. The Service is provided by Alterity ("we", "us", or "our").
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
                  <p key={j} className="terms-body__para">{para}</p>
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
