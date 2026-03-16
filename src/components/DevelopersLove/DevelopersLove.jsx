import './DevelopersLove.css'

const TWEETS = [
  { id:1, name:'Daniel Reeves', handle:'@danielreeves_fin', initials:'DR', color:'#6366f1', text:'Alterity handled our entire renewal campaign this quarter. 12,000 calls, 94% contact rate. Our human team couldn\'t have touched those numbers.', time:'2d', likes:312 },
  { id:2, name:'Sarah Okonkwo', handle:'@sarahokonkwo', initials:'SO', color:'#ec4899', text:'The voice quality is scary good. We ran a blind test with our customers — 9 out of 10 couldn\'t tell it was AI. That\'s when we knew this was the real deal.', time:'4d', likes:589 },
  { id:3, name:'Tom Halliday', handle:'@tomhalliday_ops', initials:'TH', color:'#14b8a6', text:'We cut our cost-per-contact by 60% and doubled our daily outreach volume in the first week. ROI was obvious by day three.', time:'1w', likes:741 },
  { id:4, name:'Amelia Chen', handle:'@ameliachen_growth', initials:'AC', color:'#f59e0b', text:'Speed to lead is everything in insurance. Alterity calls within 60 seconds of form submission. Our competitors are still routing to a rep when we\'ve already booked the appointment.', time:'1w', likes:1023 },
  { id:5, name:'Raj Patel', handle:'@rajpatel_lending', initials:'RP', color:'#3b82f6', text:'Collections is a tough conversation to have. Alterity handles it with empathy, consistency, and zero compliance risk. Our recovery rate is up 28% since launch.', time:'2w', likes:867 },
  { id:6, name:'Lauren Frost', handle:'@laurenfrost_cx', initials:'LF', color:'#10b981', text:'Our support team used to spend 40% of their day on routine call handling. Alterity now manages all of that. Our agents focus only on complex cases. Everyone\'s happier.', time:'3w', likes:654 },
]

function TweetCard({ tweet }) {
  return (
    <div className="tweet-card">
      <div className="tweet-card__header">
        <div
          className="tweet-card__avatar"
          style={{ background: tweet.color }}
        >
          {tweet.initials}
        </div>
        <div className="tweet-card__author">
          <strong className="tweet-card__name">{tweet.name}</strong>
          <span className="tweet-card__handle">{tweet.handle}</span>
        </div>
        <div className="tweet-card__x-icon">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      </div>
      <p className="tweet-card__text">{tweet.text}</p>
      <div className="tweet-card__footer">
        <span className="tweet-card__time">{tweet.time} ago</span>
        <span className="tweet-card__likes">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {tweet.likes.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

export default function DevelopersLove() {
  return (
    <section className="devlove">
      <div className="devlove__inner">
        <div className="devlove__header">
          <h2 className="devlove__heading">Businesses love Alterity</h2>
          <p className="devlove__subtext">
            Join forward-thinking teams automating their calling operations
          </p>
        </div>
        <div className="devlove__grid">
          {TWEETS.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </section>
  )
}
