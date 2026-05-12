import "./App.css";
import lifeLegacyMark from "./assets/brand/lifelegacy-mark.svg";

const modules = [
  "Intake",
  "SDR",
  "Review",
  "Timeline",
  "Biography",
  "Memory Vault",
  "Export Forge",
];

const timelineEvents = [
  {
    year: "1878",
    title: "Possible birth year",
    location: "Louisville, Kentucky",
    source: "1900 Census Household Scan",
    confidence: "Medium",
  },
  {
    year: "1901",
    title: "Possible marriage reference",
    location: "Jefferson County, Kentucky",
    source: "Family Bible Page",
    confidence: "Low",
  },
  {
    year: "1924",
    title: "Residence confirmed",
    location: "Louisville, Kentucky",
    source: "City Directory Transcript",
    confidence: "High",
  },
  {
    year: "1942",
    title: "Obituary notice located",
    location: "Louisville, Kentucky",
    source: "Obituary Transcript",
    confidence: "High",
  },
];

const timelinePrinciples = [
  "Events remain source-linked",
  "Uncertain dates stay clearly marked",
  "Timeline drafts support review, not blind automation",
  "Chronology becomes clearer before export",
];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <img
            className="brand-mark"
            src={lifeLegacyMark}
            alt="LifeLegacy Studio Suite mark"
          />
          <div>
            <p className="brand-kicker">LifeLegacy</p>
            <h1>Studio Suite</h1>
          </div>
        </div>

        <nav className="module-nav" aria-label="LifeLegacy workspaces">
          {modules.map((module, index) => (
            <button
              className={index === 3 ? "module-button active" : "module-button"}
              key={module}
            >
              {module}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>Continuity builder</p>
          <span>
            The Timeline Builder turns reviewed evidence into a calm chronological
            view without replacing researcher judgment.
          </span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Timeline Builder</p>
            <h2>Historical Continuity</h2>
          </div>
          <button className="ghost-button">Timeline Settings</button>
        </header>

        <section className="hero-panel timeline-hero">
          <div>
            <p className="eyebrow">Reviewed evidence into sequence</p>
            <h3>LifeLegacy helps scattered facts become a readable life path.</h3>
            <p className="hero-copy">
              Timeline Builder collects reviewed or review-ready events and
              arranges them into chronological continuity. It shows uncertainty
              clearly, keeps sources attached, and helps researchers see where
              the story is strong, weak, or still waiting for evidence.
            </p>
          </div>

          <div className="timeline-summary-card">
            <p className="card-label">Timeline draft</p>
            <h4>4 events reconstructed</h4>
            <p>
              These events are not final conclusions. They are structured
              continuity suggestions built from source-linked evidence.
            </p>
          </div>
        </section>

        <section className="timeline-layout">
          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Chronology</p>
              <h3>Draft event sequence</h3>
            </div>

            <div className="timeline-list">
              {timelineEvents.map((event) => (
                <article className="timeline-item" key={`${event.year}-${event.title}`}>
                  <div className="timeline-year">{event.year}</div>
                  <div className="timeline-content">
                    <div className="timeline-item-header">
                      <div>
                        <p className="card-label">{event.location}</p>
                        <h4>{event.title}</h4>
                      </div>
                      <span className={`confidence confidence-${event.confidence.toLowerCase()}`}>
                        {event.confidence}
                      </span>
                    </div>
                    <p className="source-line">Source: {event.source}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Continuity check</p>
              <h3>What the timeline reveals</h3>
            </div>

            <div className="insight-card strong">
              <h4>Strong evidence cluster</h4>
              <p>
                Louisville appears across multiple sources, suggesting a stable
                location pattern worth reviewing.
              </p>
            </div>

            <div className="insight-card caution">
              <h4>Needs review</h4>
              <p>
                The possible 1901 marriage reference is currently low confidence
                and should not be exported until verified.
              </p>
            </div>

            <div className="principle-card">
              <h4>Timeline is an assistant</h4>
              <p>
                LifeLegacy organizes chronological evidence so the researcher can
                see continuity, gaps, and conflicts more clearly.
              </p>
            </div>
          </article>
        </section>

        <section className="principle-grid" aria-label="Timeline principles">
          {timelinePrinciples.map((principle, index) => (
            <article className="principle-tile" key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App; 
