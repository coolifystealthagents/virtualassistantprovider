export const stealthAgentsReviews = [
  { name: 'Chad Sublet', detail: 'Business Owner', headline: 'More room for strategic work', quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.' },
  { name: 'Erika Giron', detail: 'CEO, Horizon Pacific Staffing', headline: 'Support that scaled with demand', quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.' },
  { name: 'Alex Behrens', detail: 'Client since Oct 2024', headline: 'A genuine part of the team', quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.' },
  { name: 'Aisha Wonderfull', detail: 'CEO, Publishing Startup', headline: 'Time returned to sales', quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.' },
  { name: 'Owen Hone', detail: 'Multiple Hire Client', headline: 'Fast placement and quality', quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.' },
  { name: 'Sarah Jacoby', detail: 'Client', headline: 'Proactive support', quote: 'Great communication, efficient and proactive assistant, visible business growth.' },
  { name: 'Martine Cadet', detail: 'Client', headline: 'A team that learned the brand', quote: 'The team learned my brand and goals and transformed my business. My dream team.' },
  { name: 'Rich Cochran', detail: 'Client', headline: 'Diligent, pleasant professionals', quote: 'We especially appreciate how diligent and pleasant Evy is. True pros.' },
  { name: 'George Assi', detail: '2-Year Partner', headline: 'Reliable talent matches', quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.' },
  { name: 'Lee Maasen', detail: 'Business Owner', headline: 'An absolute asset', quote: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.' },
  { name: 'Kevin Carabajal', detail: 'Client', headline: 'Operations that restored focus', quote: 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.' },
  { name: 'Lynda Sunshine West', detail: 'Client', headline: 'Quality work every time', quote: 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.' },
] as const;

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const reviews = stealthAgentsReviews;
  const repeated = [...reviews, ...reviews];
  const titleId = contact ? 'contact-client-reviews' : 'booking-client-reviews';
  return <section className={`v3-reviews${contact ? ' v3-reviews-contact' : ''}`} aria-labelledby={titleId}>
    <div className="v3-review-heading"><div><span className="v3-review-stars" aria-hidden="true">★★★★★</span><h2 id={titleId}>StealthAgents reviews</h2></div><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">View first-party source</a></div>
    <div className="v3-review-viewport">
      <div className="v3-review-track">
        {repeated.map((review, index) => <article className="v3-review-card" key={`${review.name}-${index}`} aria-hidden={index >= reviews.length ? true : undefined}>
          <div className="v3-review-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
          <h3>{review.headline}</h3>
          <blockquote>“{review.quote}”</blockquote>
          <p><strong>{review.name}</strong><span>{review.detail}</span></p>
        </article>)}
      </div>
    </div>
  </section>;
}
