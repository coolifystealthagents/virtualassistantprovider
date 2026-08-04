import { JsonLd } from '../../components';
import { site } from '../../data';

export const executiveAssistantArticleSlug = 'executive-assistant-philippines-hiring-guide';

const sources = [
  { name: 'World Bank: Individuals using the Internet, Philippines', url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH' },
  { name: 'World Bank: Employment in services, Philippines', url: 'https://data.worldbank.org/indicator/SL.SRV.EMPL.ZS?locations=PH' },
  { name: 'World Bank: Tertiary school enrollment, Philippines', url: 'https://data.worldbank.org/indicator/SE.TER.ENRR?locations=PH' },
  { name: 'NIST SP 800-46 Rev. 2: Telework and remote access security', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final' },
  { name: 'Republic Act No. 10173: Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html' },
  { name: 'Republic Act No. 11165: Telecommuting Act', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html' },
];

const faqs = [
  { question: 'What does an executive assistant in the Philippines do?', answer: 'The assistant can sort an inbox, protect calendar time, prepare meeting notes, update a contact list, track follow-ups, and arrange approved travel details. The executive should keep final choices about money, people, legal matters, contracts, and sensitive promises.' },
  { question: 'How do I test an executive assistant before live work?', answer: 'Give a short paid sample with a fake inbox, a calendar conflict, a travel change, and a meeting note that has missing facts. Score the result for accuracy, clear writing, good questions, and correct use of the stop rules.' },
  { question: 'Should an assistant get full inbox and calendar access on day one?', answer: 'Start with a named account, a test calendar, and a limited mailbox view when the tools allow it. Add access only after the assistant has handled safe examples well and the manager can review an activity record.' },
  { question: 'Can a Philippines-based assistant work US business hours?', answer: 'Many candidates can work an overlap block or a full night shift, but the schedule must be clear before hiring. Ask about the person’s normal sleep plan, transport, home setup, power backup, connection backup, and holiday coverage.' },
];

export function ExecutiveAssistantPhilippinesArticle() {
  const url = `${site.url}/blog/${executiveAssistantArticleSlug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', headline: 'Executive assistant Philippines: a safe hiring guide', description: 'Build a clear role, work sample, access plan, and first-week launch for a Philippines-based executive assistant.', mainEntityOfPage: url, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand, url: site.url }, citation: sources.map((source) => source.url) },
      { '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` }, { '@type': 'ListItem', position: 3, name: 'Executive assistant Philippines', item: url }] },
    ],
  };

  return <>
    <header className="article-only-nav"><a href="/" className="article-only-logo">Virtual Assistant Provider</a><nav aria-label="Article navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact">Contact Us</a></nav></header>
    <main className="rich-article-shell"><JsonLd data={schema} />
      <article className="rich-evidence-article" data-article-marker="executive-assistant-philippines-v1">
        <span className="article-kicker">Philippines role guide</span>
          <h1>Executive assistant Philippines: a safe hiring guide</h1>
          <img src="/featured/executive-assistant-philippines-hiring-guide.png" alt="" width="1200" height="675" />
        <p className="article-deck">A Philippines-based executive assistant can protect time, keep promises visible, and prepare the next step before a busy leader asks. The role works best when the assistant owns clear repeat tasks and knows which choices must go back to the executive.</p>

        <aside className="article-banner article-banner-top"><div><span>Start with a real executive support brief</span><p>List the inbox, calendar, meeting, travel, and follow-up work that needs an owner. Add the hours, tools, examples, and decisions the assistant must never make alone.</p></div><a className="btn primary" href="/contact">Plan the role</a></aside>

        <section>
          <h2>Define the job before you meet candidates</h2>
          <p>"Executive assistant" can mean ten different jobs. One leader may need calendar defense and meeting notes, while another needs travel changes, contact updates, project reminders, and a clean daily brief.</p>
          <p>Write down the work that repeats each day and week. For every task, name the input, tool, due time, good example, common mistake, and person who answers when the rule does not fit.</p>
          <p>Keep the first role small enough to teach and check. Five to ten repeat tasks give the candidate a fair target and give the manager a clear way to judge the first week.</p>
        </section>

        <section>
          <h2>Separate assistant work from executive choices</h2>
          <p>An assistant can prepare information, send approved messages, and keep a queue moving. The executive should keep choices that change a promise, move money, affect a person’s job, create legal risk, or reveal private company plans.</p>
          <p>The table gives a practical split for common work. Company rules may need tighter limits, so the named manager should approve the final version before access opens.</p>
          <div className="article-table-wrap" tabIndex={0} aria-label="Scrollable executive assistant task and control table">
            <table><thead><tr><th>Work lane</th><th>Assistant can own</th><th>Executive keeps</th><th>Review check</th></tr></thead><tbody>
              <tr><td>Inbox</td><td>Apply labels, remove noise, draft routine replies, flag urgent messages</td><td>Sensitive replies, promises, disputes, legal notices, and staff matters</td><td>Read ten handled threads each day</td></tr>
              <tr><td>Calendar</td><td>Offer approved times, add buffers, send details, catch double bookings</td><td>Priority changes, declined key meetings, and private attendance choices</td><td>Check tomorrow’s calendar at day end</td></tr>
              <tr><td>Meetings</td><td>Build the agenda, collect files, take notes, log owners and due dates</td><td>Commitments, final decisions, and edits to the official record</td><td>Approve notes before wider sharing</td></tr>
              <tr><td>Travel</td><td>Research approved options, prepare an itinerary, watch for changes</td><td>Final booking approval, card use, visa advice, and personal security choices</td><td>Match every item to the approved brief</td></tr>
              <tr><td>Follow-up</td><td>Track open promises, remind owners, send approved check-ins</td><td>New terms, complaints, gifts, and anything outside the saved script</td><td>Review all exceptions in one list</td></tr>
            </tbody></table>
          </div>
        </section>

        <section>
          <h2>Use country data as context, not proof of skill</h2>
          <p>Three World Bank series describe part of the setting around remote work in the Philippines. In 2024, <a href={sources[0].url}>internet use was 67.3%</a> of the population, <a href={sources[1].url}>services were 59.3%</a> of total employment, and <a href={sources[2].url}>gross tertiary enrollment was 47.4%</a>.</p>
          <p>These are national measures with different meanings. They do not tell you if one person writes well, has a quiet room, keeps a stable schedule, understands an executive’s work, or has a tested backup connection.</p>
          <div className="article-chart-wrap" tabIndex={0} aria-label="Scrollable Philippines context chart">
            <svg className="article-chart" viewBox="0 0 760 360" role="img" aria-labelledby="ea-chart-title ea-chart-desc">
              <title id="ea-chart-title">Three Philippines remote-work context measures for 2024</title>
              <desc id="ea-chart-desc">Horizontal bars show internet use at 67.3 percent, service employment at 59.3 percent, and gross tertiary enrollment at 47.4 percent.</desc>
              <text x="20" y="34" className="svg-title">Philippines context measures, 2024</text>
              <line x1="230" y1="65" x2="230" y2="300" className="chart-axis" />
              <text x="20" y="110">Internet use</text><rect x="230" y="82" width="404" height="42" rx="8" className="bar-one" /><text x="646" y="110" className="bar-label">67.3%</text>
              <text x="20" y="190">Service employment</text><rect x="230" y="162" width="356" height="42" rx="8" className="bar-two" /><text x="598" y="190" className="bar-label">59.3%</text>
              <text x="20" y="270">Tertiary enrollment</text><rect x="230" y="242" width="284" height="42" rx="8" className="bar-three" /><text x="526" y="270" className="bar-label">47.4%</text>
              <text x="230" y="330" className="axis-note">0%</text><text x="650" y="330" className="axis-note">70%</text>
            </svg>
          </div>
          <p className="method-note"><strong>Chart method:</strong> Values are rounded to one decimal place from the linked World Bank series for 2024. The measures have different units and denominators, so they are shown only as separate country context and are not combined into a score.</p>
        </section>

        <section>
          <h2>Build a work sample around a hard morning</h2>
          <p>A good sample should feel like the job without using live business data. Create a fake inbox with twelve messages, a calendar with two conflicts, a meeting note with missing owners, and a travel plan that changes at the last minute.</p>
          <p>Give the candidate ninety minutes and a written stop list. Ask for an inbox plan, a fixed calendar, two draft replies, a short daily brief, and an exception log that shows every choice sent back to the executive.</p>
          <p>Score facts, judgment, writing, order of work, and questions asked. A careful person who spots a missing rule is safer than someone who moves fast and quietly invents an answer.</p>
          <div className="process-graphic-wrap">
            <svg className="process-graphic" viewBox="0 0 820 250" role="img" aria-labelledby="ea-process-title ea-process-desc">
              <title id="ea-process-title">Four-step executive assistant proof path</title>
              <desc id="ea-process-desc">The hiring process moves from a safe work sample to reviewed drafts, limited live work, and a wider executive support lane.</desc>
              <rect x="20" y="72" width="165" height="105" rx="16" className="step-box"/><text x="102" y="105" textAnchor="middle" className="step-num">1</text><text x="102" y="135" textAnchor="middle">Safe sample</text><text x="102" y="158" textAnchor="middle" className="step-small">Fake records</text>
              <path d="M185 124 H220" className="step-arrow"/><polygon points="220,117 235,124 220,131" className="step-arrow-fill"/>
              <rect x="235" y="72" width="165" height="105" rx="16" className="step-box"/><text x="317" y="105" textAnchor="middle" className="step-num">2</text><text x="317" y="135" textAnchor="middle">Reviewed drafts</text><text x="317" y="158" textAnchor="middle" className="step-small">Nothing sent</text>
              <path d="M400 124 H435" className="step-arrow"/><polygon points="435,117 450,124 435,131" className="step-arrow-fill"/>
              <rect x="450" y="72" width="165" height="105" rx="16" className="step-box"/><text x="532" y="105" textAnchor="middle" className="step-num">3</text><text x="532" y="135" textAnchor="middle">Limited live work</text><text x="532" y="158" textAnchor="middle" className="step-small">Daily review</text>
              <path d="M615 124 H650" className="step-arrow"/><polygon points="650,117 665,124 650,131" className="step-arrow-fill"/>
              <rect x="665" y="72" width="135" height="105" rx="16" className="step-box final"/><text x="732" y="105" textAnchor="middle" className="step-num">4</text><text x="732" y="135" textAnchor="middle">Wider lane</text><text x="732" y="158" textAnchor="middle" className="step-small">Weekly review</text>
            </svg>
          </div>
          <p className="method-note"><strong>Process note:</strong> This diagram is a suggested hiring sequence, not a measured result. Move to the next step only when the current work meets the written check and the manager is ready to open more access.</p>
        </section>

        <aside className="article-banner article-banner-middle"><div><span>Need an executive assistant work sample?</span><p>Share the real inbox, calendar, meeting, travel, and follow-up tasks. The staffing team can turn them into a clear Philippines hiring brief with owner-only decisions marked.</p></div><a className="btn secondary" href="/contact">Map the sample</a></aside>

        <section>
          <h2>Set the schedule in plain terms</h2>
          <p>The Philippines uses one national time zone, Philippine Standard Time. Say whether the role follows local daytime, overlaps for a few hours, or covers a full US workday, then write the exact start time and meeting window.</p>
          <p>A night schedule can affect sleep, travel, family time, and long-term fit. Ask how the candidate has handled that schedule before, where the person will work, and what happens if power or internet fails during an urgent calendar change.</p>
          <p>Run a simple recovery test before launch. Have the candidate switch to the backup connection, reopen the work, send a delay note, and explain which tasks can continue offline.</p>
        </section>

        <section>
          <h2>Protect the inbox, calendar, and private files</h2>
          <p>An executive account may expose contracts, staff issues, customer details, travel plans, private phone numbers, and password reset messages. The <a href={sources[4].url}>Philippine Data Privacy Act</a> covers personal information, and the <a href={sources[5].url}>Telecommuting Act</a> sets a legal frame for covered remote work arrangements.</p>
          <p>Start with one named account per person, multi-factor authentication, and only the folders or calendar rights needed for the first tasks. Keep account administration, billing, exports, deletion, security settings, and password recovery with the executive or a trusted manager.</p>
          <blockquote><p>"Telework and remote access technologies often need additional protection because their nature generally places them at higher exposure to external threats than technologies only accessed from inside the organization."</p><cite>Murugiah Souppaya, computer scientist at the National Institute of Standards and Technology, with co-author Karen Scarfone in <a href={sources[3].url}>NIST SP 800-46 Rev. 2</a>, July 2016.</cite></blockquote>
          <p>The quote is about remote access in general, not executive assistants alone. It supports a simple rule here: treat outside access as a separate risk, record who has it, and remove it as soon as the work or relationship ends.</p>
        </section>

        <section>
          <h2>Teach inbox and calendar rules with examples</h2>
          <p>Do not hand over a full inbox and say, "Keep me organized." Show twenty old messages and explain which ones were noise, which needed a draft, which needed the executive, and how quickly each type should have moved.</p>
          <p>Use the same method for the calendar. Show a good meeting request, a weak request, the buffer needed between calls, travel time, protected focus blocks, and the people who may override normal rules.</p>
          <p>Ask the assistant to write the rules back in plain words. When the written version is wrong or incomplete, fix it before live work instead of blaming the person after a preventable miss.</p>
        </section>

        <section>
          <h2>Run the first week with close review</h2>
          <p>Day one should cover the executive’s role, the task list, the schedule, private topics, and every stop rule. The assistant should practice with safe records and explain how each item was sorted.</p>
          <p>On day two, review inbox labels, calendar edits, and draft replies together. Day three can add meeting notes and follow-up tracking, but nothing sensitive should go out without approval.</p>
          <p>Days four and five can include low-risk live work if the practice was clean. Review a small sample each day, log mistakes by type, and repair the instruction that allowed each mistake.</p>
          <p>At the end of the week, decide what stays, what needs more practice, and what can safely grow. Do not add a new task because the assistant looks busy or free; add it when the current lane is accurate and easy to check.</p>
        </section>

        <section>
          <h2>Ask a provider for role proof</h2>
          <p>Broad claims about great assistants do not show how this job will be filled. Ask how candidates are tested for inbox judgment, calendar logic, short business writing, note taking, schedule fit, privacy care, and calm handling of a sudden change.</p>
          <ul className="article-checklist">
            <li>Which executive support tasks have your Philippines-based candidates done before?</li>
            <li>How do you test calendar conflicts, inbox sorting, and written tone?</li>
            <li>Who checks attendance and weak work after the assistant starts?</li>
            <li>What backup path is tested for power and connection loss?</li>
            <li>How are account access, changes, and offboarding recorded?</li>
            <li>Who coaches the assistant or handles a replacement after a poor fit?</li>
          </ul>
          <p>Listen for a direct process and a real example. If the answer stays vague, ask who owns the next step and what proof the provider can show before the assistant enters a live account.</p>
        </section>

        <section>
          <h2>Use a small weekly scorecard</h2>
          <p>Track calendar errors, inbox items sent to the wrong lane, drafts returned for major changes, promises missed, and tasks finished by the agreed time. Add one short note about a strong choice and one about a rule that needs repair.</p>
          <p>Review daily during the first two weeks because small errors teach you where the handoff is weak. Once the work is steady, move to a weekly sample and keep a monthly check of accounts, permissions, backup steps, and owner-only decisions.</p>
          <p>The scorecard should judge the work, not the person’s style or accent. Use facts that both sides can see, and give the assistant a chance to explain a blocker before the manager decides what to change.</p>
        </section>

        <section>
          <h2>Helpful next steps</h2>
          <p>Read the <a href="/services/executive-assistant-staffing">executive assistant staffing guide</a> for the site’s role outline. The <a href="/services">Philippines staffing services page</a> shows other task lanes when the work belongs with operations, support, sales, or bookkeeping instead.</p>
          <p>The <a href="/research/hire-virtual-assistant-philippines-evidence-guide">Philippines hiring evidence guide</a> explains what national data can and cannot prove. When the role is clear, use the <a href="/contact">staffing intake</a> to share the tasks, tools, hours, and decisions that must stay with the executive.</p>
        </section>

        <section>
          <h2>FAQ</h2>
          {faqs.map((item) => <div className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
        </section>

        <section className="numbered-sources">
          <h2>Sources</h2>
          <ol>{sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol>
          <p>World Bank values were checked through the official indicator API on July 27, 2026. The NIST quote was checked in the official July 2016 publication, and each law link points to the full act text.</p>
        </section>

        <aside className="article-banner article-banner-bottom"><div><span>Turn the role into a hiring brief</span><p>Bring the repeat tasks, schedule, tools, examples, and owner-only choices. The staffing team can use those details to look for a Philippines-based executive assistant fit.</p></div><a className="btn primary" href="/contact">Send the brief</a></aside>
      </article>
    </main>
    <footer className="article-only-footer"><p>Virtual Assistant Provider helps businesses plan work for Philippines-based specialists.</p><nav aria-label="Article footer"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/privacy">Privacy</a><a href="/contact">Contact</a></nav></footer>
  </>;
}
