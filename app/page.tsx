import { Footer, Header, JsonLd } from './components';
import { fleetServices } from './fleet-content';
import styles from './v3-pages.module.css';

export const metadata = { title: { absolute: 'Virtual Assistant Provider | Philippines staffing built around real work' }, description: 'Define a role, compare Philippines based assistant services, and launch with clear access and review boundaries.', alternates: { canonical: '/' } };

const decisions = [
  ['Assistant owned', 'Repeatable preparation, coordination, documentation, and approved follow up with a clear finish line.'],
  ['Reviewer checked', 'Customer facing work, material record changes, exceptions, and early live output until quality is stable.'],
  ['Owner retained', 'Money movement, policy exceptions, regulated judgment, strategy, hiring choices, and final approval.'],
];

export default function Home() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Virtual Assistant Provider', url: 'https://virtualassistantprovider.com' };
  return <><Header/><main className={styles.page}><JsonLd data={schema}/>
    <section className={styles.hero}><div className={`${styles.wrap} ${styles.heroGrid}`}><div>
      <h1>Hire a Philippines based assistant for a defined workflow.</h1>
      <p className={styles.lead}>We help you turn recurring work into a focused role, match it with Philippines based talent, and launch with practical access, review, and escalation rules.</p>
      <div className={styles.actions}><a className={styles.primary} href="/contact-us">Request a role plan</a><a className={styles.secondary} href="/services">Explore assistant services</a></div>
      <p className={styles.cue}>Bring the tasks, tools, working hours, and decisions that must stay with your team.</p>
    </div><figure className={styles.heroFigure}><img src="/featured/virtual-assistant-work-sample-philippines.png" alt="A Philippines based virtual assistant work sample with task instructions and review notes" width="1672" height="941"/><figcaption>Start with evidence: one representative task, safe sample data, and a named reviewer.</figcaption></figure></div></section>

    <section className={styles.section} id="services"><div className={styles.wrap}><h2>Start with the queue that keeps returning.</h2><p className={styles.intro}>A useful assistant role is not a miscellaneous list. It has related work, compatible tools, one priority owner, and a visible point where judgment returns to your team.</p><div className={styles.roleList}>{fleetServices.slice(0,6).map((service)=><a className={styles.roleRow} href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.summary}</p><strong>Open the role guide</strong></a>)}</div><p><a className={styles.secondary} href="/services">Compare all ten services</a></p></div></section>

    <section className={styles.dark}><div className={`${styles.wrap} ${styles.boundary}`}><div><h2>A handoff needs a boundary, not just a checklist.</h2><p>Before an account opens, decide what the assistant may complete, what a reviewer must inspect, and what only an authorized owner can decide. This protects the assistant from guessing and gives managers a useful review path.</p></div><div className={styles.boundaryMap}>{decisions.map(([title, body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className={styles.imageBand}><img src="/featured/virtual-assistant-weekly-reporting-philippines.png" alt="Weekly assistant report showing completed work, blockers, and decisions" width="1672" height="941"/><div className={styles.imageCopy}><h2>Manage outcomes without watching every minute.</h2><p>Use a short daily handoff and a weekly review. The assistant records completed work, source links, blocked items, and decisions needed. The manager samples quality and corrects the workflow rather than relying on vague activity reports.</p><a href="/pricing">See pricing and what it includes</a></div></section>

    <section className={styles.section}><div className={`${styles.wrap} ${styles.editorialGrid}`}><div className={styles.prose}><h2>From role brief to controlled live work.</h2><p>First, name a recurring output and show a good finished example. Next, build a safe work sample with invented or redacted information. Score accuracy, completeness, judgment, and the questions a candidate asks.</p><p>After selection, create a named account with the minimum permissions needed for the first task. Rehearse normal work and at least one exception. Open a narrow live queue only when the assistant knows when to stop and whom to contact.</p><p>Review the first live work closely. Expand the queue or access only after the evidence supports it. If a rule is unclear, update the operating guide so the next result improves for the right reason.</p></div><aside className={styles.checklist}><h2>What to bring to intake</h2><ul><li>Five to ten recurring tasks with a clear finish line</li><li>The source systems and tools used for each task</li><li>Required hours, overlap, and response expectations</li><li>One good example and one common exception</li><li>The person who reviews work and owns final decisions</li><li>Any privacy, licensing, security, or customer rules</li></ul></aside></div></section>

    <section className={styles.final}><div className={styles.wrap}><h2>Define the work before you compare candidates.</h2><p>Share the queue, tools, schedule, and decision limits. We will use them to shape a practical Philippines based staffing plan.</p><a className={styles.primary} href="/contact-us">Request a staffing conversation</a></div></section>
  </main><Footer/></>;
}
