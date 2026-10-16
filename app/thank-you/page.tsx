import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

const bookingUrl = 'https://go.oncehub.com/StealthAgentsTeam';

export const metadata: Metadata = {
  title: 'Thank You | Book Your Meeting',
  description: 'Choose a convenient time to speak with the Stealth Agents team.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <><Header /><main className="sa-booking-page">
    <div className="container sa-booking-grid">
      <div className="sa-booking-left">
        <p className="sa-booking-kicker">Your request is in</p>
        <h1>Choose a time for your consultation.</h1>
        <p className="sa-booking-lead">Use the calendar to reserve a focused conversation about the work, tools, schedule, and boundaries in your role brief.</p>
        <img className="sa-booking-image" src="/thank-you-hero.png" alt="Stealth Agents team ready to help" width="619" height="402" />
        <TestimonialsRail />
      </div>
      <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title">
        <h2 id="booking-calendar-title">Pick a time that works for you</h2>
        <p>If the scheduler does not load, <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open the same booking calendar in a new tab</a>.</p>
        <iframe src={bookingUrl} id="SOI_StealthAgentsTeam" name="ScheduleOnceIframe" title="Schedule a meeting with Stealth Agents" scrolling="yes" frameBorder="0" height="850" width="100%" className="sa-oncehub-frame" referrerPolicy="strict-origin-when-cross-origin" />
      </section>
    </div>
  </main><Footer /></>;
}
