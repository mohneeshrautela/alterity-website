import './ProductWalkthrough.css'

const PRODUCT_VIEWS = [
  { image: '/product/overview.webp', title: 'Overview', description: 'Track voice operations, channel performance, completed calls, and trends from one workspace.', alt: 'Alterity overview dashboard with channel controls and performance cards' },
  { image: '/product/agents.webp', title: 'Agent management', description: 'Create, publish, and manage multilingual voice agents with clear version and status controls.', alt: 'Alterity agent workspace showing published voice agents and language settings' },
  { image: '/product/campaigns.webp', title: 'Campaign management', description: 'Plan outbound campaigns, monitor progress, and see active, paused, and completed work at a glance.', alt: 'Alterity campaign management dashboard with status and progress controls' },
  { image: '/product/calls.webp', title: 'Call details', description: 'Review call activity, campaign outcomes, and transcript-ready records using focused filters.', alt: 'Alterity call details dashboard with campaign, status, and date filters' },
  { image: '/product/usage.webp', title: 'Usage and analytics', description: 'See call volume, duration, cost, and cost per call across the workspace.', alt: 'Alterity usage dashboard showing call, duration, and cost metrics' },
  { image: '/product/integrations.webp', title: 'Integrations', description: 'Send structured call outcomes to your systems through signed webhooks and connected workflows.', alt: 'Alterity workspace integration settings for structured call outcome webhooks' },
]

export default function ProductWalkthrough() {
  return (
    <div className="product-walkthrough">
      {PRODUCT_VIEWS.map((view, index) => (
        <figure className="product-walkthrough__item" key={view.title}>
          <div className="product-walkthrough__copy">
            <span className="product-walkthrough__number">{String(index + 1).padStart(2, '0')}</span>
            <div><h2>{view.title}</h2><p>{view.description}</p></div>
          </div>
          <div className="product-walkthrough__frame">
            <img src={view.image} alt={view.alt} width="1280" height="720" loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        </figure>
      ))}
    </div>
  )
}
