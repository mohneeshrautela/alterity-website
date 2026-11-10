import './ProductWalkthrough.css'

const PRODUCT_VIEWS = [
  { image: '/product/13-overview.webp', title: 'Overview', description: 'Track voice operations, channel performance, completed calls, and trends from one workspace.', alt: 'Alterity overview dashboard with channel controls and performance cards', detail: 'Channel controls and performance cards sit together on the overview dashboard, so you can see how each channel is performing.' },
  { image: '/product/15-agents.webp', title: 'Agent management', description: 'Create, publish, and manage multilingual voice agents with clear version and status controls.', alt: 'Alterity agent workspace showing published voice agents and language settings', detail: 'The agent workspace lists your published voice agents alongside their language settings.' },
  { image: '/product/11-campaigns.webp', title: 'Campaign management', description: 'Plan outbound campaigns, monitor progress, and see active, paused, and completed work at a glance.', alt: 'Alterity campaign management dashboard with status and progress controls', detail: 'Status and progress controls on the campaign dashboard show where each outbound campaign stands.' },
  { image: '/product/10-calls.webp', title: 'Call details', description: 'Review call activity, campaign outcomes, and transcript-ready records using focused filters.', alt: 'Alterity call details dashboard with campaign, status, and date filters', detail: 'Campaign, status, and date filters help you narrow call records down to the ones you need.' },
  { image: '/product/14-usage.webp', title: 'Usage and analytics', description: 'See call volume, duration, cost, and cost per call across the workspace.', alt: 'Alterity usage dashboard showing call, duration, and cost metrics', detail: 'The usage dashboard reports call, duration, and cost metrics for the workspace.' },
  { image: '/product/12-integrations.webp', title: 'Integrations', description: 'Send structured call outcomes to your systems through signed webhooks and connected workflows.', alt: 'Alterity workspace integration settings for structured call outcome webhooks', detail: 'Integration settings let you configure the webhooks that carry structured call outcomes to your systems.' },
]

export default function ProductWalkthrough() {
  return (
    <div className="product-walkthrough">
      {PRODUCT_VIEWS.map((view, index) => (
        <figure className="product-walkthrough__item" key={view.title}>
          <div className="product-walkthrough__copy">
            <span className="product-walkthrough__number">{String(index + 1).padStart(2, '0')}</span>
            <div><h2>{view.title}</h2><p>{view.description}</p><p>{view.detail}</p></div>
          </div>
          <div className="product-walkthrough__frame">
            <img src={view.image} alt={view.alt} width="1280" height="720" loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        </figure>
      ))}
    </div>
  )
}
