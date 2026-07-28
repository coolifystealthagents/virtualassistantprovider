import { JsonLd } from '../../components';
import { site } from '../../data';

export const recruitingArticleSlug = 'recruiting-virtual-assistant-philippines';

const sources = [
  { name: 'World Bank API: Philippines unemployment, modeled ILO estimate', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.UEM.TOTL.ZS?format=json&per_page=5' },
  { name: 'Philippine Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html' },
  { name: 'NIST Cybersecurity Framework 2.0 release', url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework' },
  { name: 'NIST authentication and authenticator management guide', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
  { name: 'EEOC employment tests and selection procedures', url: 'https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures' },
];

const faqs = [
  { question: 'What can a recruiting virtual assistant do?', answer: 'A recruiting assistant can post approved jobs, sort applications by written rules, schedule interviews, send reminders, update the applicant tracker, prepare score sheets, and follow up with candidates. The hiring manager should keep final selection, exceptions, sensitive judgment, and the offer decision.' },
  { question: 'How do I test a recruiting assistant?', answer: 'Give the person a small set of fake candidate records and a written job brief. Ask for a clean shortlist, an interview schedule, two candidate messages, a tracker update, and an exception note for any record that does not fit the rules.' },
  { question: 'Should a recruiting assistant see every applicant record?', answer: 'No. Give access only to the jobs and fields the person needs, and keep IDs, medical details, background records, and other sensitive files in a smaller approved group.' },
  { question: 'How should interviews be scored?', answer: 'Use the same core job questions and the same simple score guide for each candidate. Save short evidence notes, name the reviewer, and do not score protected personal details or a feeling that is not tied to the work.' },
];

export function RecruitingPhilippinesArticle() {
  const url = `${site.url}/blog/${recruitingArticleSlug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', headline: 'Recruiting virtual assistant Philippines: safe hiring guide', description: 'Plan the job posts, applicant records, interview steps, access limits, and first month for a Philippines-based recruiting virtual assistant.', mainEntityOfPage: url, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand, url: site.url }, citation: sources.map((source) => source.url) },
      { '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` }, { '@type': 'ListItem', position: 3, name: 'Recruiting virtual assistant Philippines', item: url }] },
    ],
  };

  return <>
    <header className="article-only-nav"><a href="/" className="article-only-logo">Virtual Assistant Provider</a><nav aria-label="Article navigation"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact">Contact</a></nav></header>
    <main className="rich-article-shell"><JsonLd data={schema} />
      <article className="rich-evidence-article" data-article-marker="recruiting-philippines-v1">
        <span className="article-kicker">Philippines role guide</span>
          <h1>Recruiting virtual assistant Philippines: safe hiring guide</h1>
          <img src="/featured/recruiting-virtual-assistant-philippines.png" alt="" width="1200" height="675" />
        <p className="article-deck">A Philippines-based recruiting assistant can keep a busy hiring queue neat and moving. The role works best when one person handles the repeat steps while a named manager keeps selection choices, sensitive records, and final approval.</p>

        <aside className="article-banner article-banner-top"><div><span>Start with one open role</span><p>Write the must-have skills, the proof you will accept, the interview steps, and who makes each choice. A small, clear queue is easier to test than a company-wide hiring inbox.</p></div><a className="btn primary" href="/contact">Plan the role</a></aside>

        <section>
          <h2>Give the assistant a clear hiring lane</h2>
          <p>A recruiting assistant should know where the job starts and stops. Good support work includes posting approved text, checking required fields, naming files, sending interview times, updating status, and asking for missing work samples.</p>
          <p>The hiring manager should keep the job rules, interview score guide, exceptions, final shortlist, reference decision, and offer approval. This split lets the assistant move the queue without quietly changing who gets a fair look.</p>
          <p>Write a short service rule for every stage. State the expected reply time, approved message, system of record, stop reason, and person who can answer a hard question.</p>
        </section>

        <section>
          <h2>Map the work before you open access</h2>
          <p>The table is a starting plan for a small remote hiring team. Change it for the job, local law, company policy, and the advice of the person who owns hiring and privacy work.</p>
          <div className="article-table-wrap" tabIndex={0} aria-label="Scrollable recruiting tasks and owner controls table">
            <table><thead><tr><th>Hiring stage</th><th>Assistant can prepare</th><th>Manager keeps</th><th>Saved proof</th></tr></thead><tbody>
              <tr><td>Job post</td><td>Load approved text, check links, record the publish date</td><td>Role rules, claims, legal review, and final approval</td><td>Approved copy and live link</td></tr>
              <tr><td>Application check</td><td>Mark required fields and job proof using written rules</td><td>Exceptions and final screen choice</td><td>Rule used and short evidence note</td></tr>
              <tr><td>Interview setup</td><td>Offer times, send the link, confirm attendance</td><td>Question set and interviewer choice</td><td>Calendar record and message trail</td></tr>
              <tr><td>Score sheet</td><td>Prepare forms and record approved notes</td><td>Scores, comparison, and selection</td><td>Named reviewer and dated sheet</td></tr>
              <tr><td>Closeout</td><td>Send approved updates and apply the record rule</td><td>Final notice, retention exception, and offer</td><td>Status log and deletion date</td></tr>
            </tbody></table>
          </div>
        </section>

        <section>
          <h2>Use country numbers as context, not proof</h2>
          <p>The World Bank reports a modeled Philippine unemployment estimate of <a href={sources[0].url}>2.200% in 2023</a>, <a href={sources[0].url}>2.202% in 2024</a>, and <a href={sources[0].url}>2.235% in 2025</a>. The source says the series is a modeled International Labour Organization estimate, and its API was updated on July 13, 2026.</p>
          <p>These national values say nothing about one applicant's writing, care, tools, schedule, or home setup. Test those points with the same job-related questions, a small work sample, and clear checks for every candidate.</p>
          <div className="article-chart-wrap" tabIndex={0} aria-label="Scrollable Philippines unemployment estimate chart">
            <svg className="article-chart" viewBox="0 0 760 360" role="img" aria-labelledby="recruit-chart-title recruit-chart-desc">
              <title id="recruit-chart-title">Philippine unemployment modeled estimate for 2023 through 2025</title>
              <desc id="recruit-chart-desc">Three horizontal bars show 2.200 percent in 2023, 2.202 percent in 2024, and 2.235 percent in 2025.</desc>
              <text x="20" y="34" className="svg-title">Unemployment estimate, Philippines</text>
              <line x1="180" y1="62" x2="180" y2="300" className="chart-axis" />
              <text x="20" y="112">2023</text><rect x="180" y="84" width="440" height="38" rx="8" className="bar-one"/><text x="632" y="111" className="bar-label">2.200%</text>
              <text x="20" y="185">2024</text><rect x="180" y="157" width="440.4" height="38" rx="8" className="bar-two"/><text x="632" y="184" className="bar-label">2.202%</text>
              <text x="20" y="258">2025</text><rect x="180" y="230" width="447" height="38" rx="8" className="bar-three"/><text x="639" y="257" className="bar-label">2.235%</text>
              <text x="180" y="328" className="axis-note">0%</text><text x="620" y="328" className="axis-note">about 2.2%</text>
            </svg>
          </div>
          <p className="method-note"><strong>Chart method:</strong> Values come from the World Bank API and use percent of the total labor force. The bars use a zero base and show national labor background, not the number of recruiting assistants or the skill of any applicant.</p>
        </section>

        <section>
          <h2>Test the real work with fake records</h2>
          <p>A resume will not show whether someone can spot a missing time zone or a duplicate interview. Give the candidate a paid work sample made from fake people, fake contact details, and a written job brief.</p>
          <p>Include twelve applications with a few clear problems. Add one missing sample, one schedule clash, one applicant for the wrong role, one late change, and one note that needs manager review.</p>
          <p>Ask for a tracker update, a short screen list, two interview messages, a one-day calendar, and an exception note. Score whether the person followed the rules, protected the records, wrote clear messages, and stopped instead of guessing.</p>
          <div className="process-graphic-wrap" tabIndex={0} aria-label="Scrollable recruiting review process">
            <svg className="process-graphic" viewBox="0 0 820 250" role="img" aria-labelledby="recruit-process-title recruit-process-desc">
              <title id="recruit-process-title">Four-step recruiting review path</title>
              <desc id="recruit-process-desc">The path moves from an approved job rule to an assistant check, a saved exception, and manager decision.</desc>
              <rect x="20" y="72" width="165" height="105" rx="16" className="step-box"/><text x="102" y="105" textAnchor="middle" className="step-num">1</text><text x="102" y="135" textAnchor="middle">Job rule</text><text x="102" y="158" textAnchor="middle" className="step-small">Approved first</text>
              <path d="M185 124 H220" className="step-arrow"/><polygon points="220,117 235,124 220,131" className="step-arrow-fill"/>
              <rect x="235" y="72" width="165" height="105" rx="16" className="step-box"/><text x="317" y="105" textAnchor="middle" className="step-num">2</text><text x="317" y="135" textAnchor="middle">Assistant check</text><text x="317" y="158" textAnchor="middle" className="step-small">Same rules</text>
              <path d="M400 124 H435" className="step-arrow"/><polygon points="435,117 450,124 435,131" className="step-arrow-fill"/>
              <rect x="450" y="72" width="165" height="105" rx="16" className="step-box"/><text x="532" y="105" textAnchor="middle" className="step-num">3</text><text x="532" y="135" textAnchor="middle">Exception note</text><text x="532" y="158" textAnchor="middle" className="step-small">Evidence saved</text>
              <path d="M615 124 H650" className="step-arrow"/><polygon points="650,117 665,124 650,131" className="step-arrow-fill"/>
              <rect x="665" y="72" width="135" height="105" rx="16" className="step-box final"/><text x="732" y="105" textAnchor="middle" className="step-num">4</text><text x="732" y="135" textAnchor="middle">Manager</text><text x="732" y="158" textAnchor="middle" className="step-small">Decides</text>
            </svg>
          </div>
          <p className="method-note"><strong>Process note:</strong> This is a control plan, not a measured result. Every exception goes to a named manager, and the saved answer becomes a rule only after that manager approves it.</p>
        </section>

        <aside className="article-banner article-banner-middle"><div><span>Need a recruiting work sample?</span><p>Share the job brief, tracker fields, message rules, interview steps, and stop list. The staffing team can turn them into a clear Philippines hiring test.</p></div><a className="btn secondary" href="/contact">Map the test</a></aside>

        <section>
          <h2>Protect applicant records from day one</h2>
          <p>Applications may hold home addresses, phone numbers, work history, IDs, interview notes, and other private details. The <a href={sources[1].url}>Philippine Data Privacy Act of 2012</a> calls for transparency, a legitimate purpose, proportional use, and reasonable security measures.</p>
          <p>Tell applicants what the team collects, why it is needed, who can see it, and how long it stays. Keep files in an approved system instead of personal email, open chat, or a shared link that anyone can forward.</p>
          <p>Give the assistant a named account and only the job queues needed for the day. Keep identity papers, medical details, background records, exports, user setup, and record deletion with a smaller approved group.</p>
          <p>The <a href={sources[3].url}>NIST authentication guide</a> explains stronger account and sign-in controls. Use multi-factor sign-in, remove old users quickly, and confirm a changed meeting link through a second known channel before anyone opens it.</p>
        </section>

        <section>
          <h2>Build one fair interview path</h2>
          <p>Use the same core questions for each person applying to the same job. Ask for job evidence, such as how the person would fix a broken calendar, write a clear candidate update, or record a screen result.</p>
          <p>The <a href={sources[4].url}>EEOC guide on employment tests and selection procedures</a> says selection tools should be job related and consistent with business need when they create adverse impact. A United States employer should get its own legal advice, but a written and job-based score guide is still a sensible control.</p>
          <p>Do not score a photo, family detail, health note, age clue, accent preference, or a feeling that is not tied to the job. Save a short evidence note for each score so another reviewer can see what the answer proved.</p>
        </section>

        <section>
          <h2>Use security rules that can change with the job</h2>
          <p>Recruiting tools change as the team grows, so the control plan must be easy to review. Start with the job tracker, email, calendar, meeting tool, shared drive, and any account used to send a test.</p>
          <blockquote><p>"The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats," said NIST Director Laurie E. Locascio. "CSF 2.0, which builds on previous versions, is not just about one document. It is about a suite of resources that can be customized and used individually or in combination over time as an organization's cybersecurity needs change and its capabilities evolve."</p><cite>Laurie E. Locascio, NIST Director, in the <a href={sources[2].url}>NIST Cybersecurity Framework 2.0 release</a>, February 26, 2024.</cite></blockquote>
          <p>Locascio was speaking about cyber risk across organizations, not about recruiting assistants in the Philippines. For this role, the lesson is simple: review the controls when the data, tool, or job changes.</p>
          <p>Keep a short response card for a lost device, strange login, wrong recipient, changed interview link, or exposed file. It should name who locks the account, who saves evidence, who contacts the applicant, and who decides the next step.</p>
        </section>

        <section>
          <h2>Run the first month in small steps</h2>
          <p>In week one, use fake records and reviewed drafts. Open one live job only after the assistant can follow the score rule, send a clear message, protect files, and write a useful exception note.</p>
          <p>In week two, review every status change and candidate message before it leaves the system. Track the cause of each fix, because a weak job rule can create the same mistake for several people.</p>
          <p>In weeks three and four, add one new duty at a time. Sample the tracker, schedule, messages, access log, and closed records, then remove any right the assistant no longer needs.</p>
        </section>

        <section>
          <h2>Ask a provider for recruiting proof</h2>
          <p>A provider should show how recruiting assistants are tested on job rules, candidate messages, schedule changes, tracker care, and private records. Ask who reviews early work and who steps in when attendance, fit, or record quality slips.</p>
          <ul className="article-checklist">
            <li>Which hiring systems and job types have your Philippines-based candidates used?</li>
            <li>How do you test a missing sample, a schedule clash, and a rule exception?</li>
            <li>Who checks the first live messages, tracker changes, and interview lists?</li>
            <li>How are applicant access, exports, retention, and offboarding recorded?</li>
            <li>Which hiring choices always stay with the client manager?</li>
            <li>Who handles a missed shift, weak fit, coaching need, or replacement?</li>
          </ul>
          <p>Listen for a real sample and a named reviewer, not a broad promise about good recruiting. The provider should be able to explain how a mistake is found, fixed, and kept out of the next candidate record.</p>
        </section>

        <section>
          <h2>Helpful next steps</h2>
          <p>Use the <a href="/services/recruiting-assistants">recruiting assistant service guide</a> for a short role outline. The <a href="/services">Philippines staffing services page</a> shows other support lanes when the job also includes executive admin, customer care, or operations.</p>
          <p>The <a href="/research/hire-virtual-assistant-philippines-evidence-guide">Philippines hiring evidence guide</a> explains what country data can and cannot prove. When the job and controls are ready, use the <a href="/contact">staffing intake</a> to share the tools, hours, interview steps, access limits, and review plan.</p>
        </section>

        <section>
          <h2>FAQ</h2>
          {faqs.map((item) => <div className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
        </section>

        <section className="numbered-sources">
          <h2>Sources</h2>
          <ol>{sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol>
          <p>World Bank values and update dates were checked through the official API on July 27, 2026. The NIST quote was checked on its official release page, and the law and selection links point to the full source guidance.</p>
        </section>

        <aside className="article-banner article-banner-bottom"><div><span>Turn the hiring queue into a role brief</span><p>Bring the job rules, tracker fields, interview steps, message samples, stop list, and access plan. The staffing team can use them to look for a Philippines-based recruiting fit.</p></div><a className="btn primary" href="/contact">Send the brief</a></aside>
      </article>
    </main>
    <footer className="article-only-footer"><p>Virtual Assistant Provider helps businesses plan work for Philippines-based specialists.</p><nav aria-label="Article footer"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/privacy">Privacy</a><a href="/contact">Contact</a></nav></footer>
  </>;
}
