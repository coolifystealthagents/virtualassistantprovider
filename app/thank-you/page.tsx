import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

const bookingUrl = 'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1';

export const metadata: Metadata = {
  title: 'Thank You | Book Your Meeting',
  description: 'Choose a convenient time to speak with the Stealth Agents team.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <><Header /><main className="sa-booking-page">
    <div className="container sa-booking-grid">
      <div className="sa-booking-left">
        <p className="sa-booking-kicker">Next: choose a meeting time</p>
        <h1>Step 2: book your meeting</h1>
        <p className="sa-booking-lead">Choose a time for a focused staffing conversation. There is no commitment required.</p>
        <img className="sa-booking-image" src="/thank-you-hero.png" alt="Stealth Agents team ready to help" width="619" height="402" />
        <TestimonialsRail />
      </div>
      <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title">
        <h2 id="booking-calendar-title">Pick a time that works for you</h2>
        <p>If the scheduler does not load, <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open the same booking calendar in a new tab</a>.</p>
        <iframe src={bookingUrl} id="SOI_StealthAgentsTeam" name="ScheduleOnceIframe" title="Schedule a meeting with Stealth Agents" scrolling="yes" frameBorder="0" height="850" width="100%" className="sa-oncehub-frame" referrerPolicy="strict-origin-when-cross-origin" />
        <p className="sa-booking-confirmation-link">Booked successfully? <a href="/thanks-whats-next">Continue to your consultation next steps</a>.</p>
      </section>
    </div>
  </main><Footer /></>;
}
