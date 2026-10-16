import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Thanks | What Happens Next',
  description: 'Review the next steps for a scheduled staffing consultation.',
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header /><main className="contact-complete-page"><section className="contact-release-shell contact-complete-card">
    <p className="contact-kicker dark">Consultation next steps</p>
    <h1>Thanks. Here is what happens next.</h1>
    <p className="contact-release-lead">If you completed the booking, OnceHub will send a calendar confirmation with the meeting details. Bring the recurring tasks, tools, weekly volume, coverage hours, and approval rules you already know.</p>
    <ol>
      <li><strong>Check your calendar invitation.</strong> Confirm the date, time, and meeting link.</li>
      <li><strong>Gather a safe work sample.</strong> Use invented or redacted information rather than passwords or sensitive client records.</li>
      <li><strong>Meet the staffing team.</strong> We will clarify the role, access boundaries, service standard, and practical next step.</li>
    </ol>
    <p><a className="btn primary" href="/services">Review virtual assistant services</a></p>
  </section></main><Footer /></>;
}
