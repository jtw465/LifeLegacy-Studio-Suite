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

const biographySections = [
  {
    title: "Early Life",
    summary:
      "Current reviewed evidence suggests Elizabeth Carter may have been born in Louisville, Kentucky around 1878.",
    confidence: "Medium",
    sources: [
      "1900 Census Household Scan",
      "Family Bible Page",
    ],
  },
  {
    title: "Marriage & Family",
    summary:
      "A possible marriage reference appears in the Family Bible material, though the timeline still requires verification.",
    confidence: "Low",
    sources: [
      "Family Bible Page",
    ],
  },
  {
    title: "Residence & Community",
    summary:
      "Multiple reviewed sources indicate recurring connections to Louisville, Kentucky across several decades.",
    confidence: "High",
    sources: [
      "City Directory Transcript",
      "Obituary Transcript",
    ],
  },
];

const biographyPrinciples = [
  "Narratives remain evidence-aware",
  "Draft text stays source-linked",
  "Uncertainty remains visible",
  "Researchers remain final editors",
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
              className={index === 4 ? "module-button active" : "module-button"}
              key={module}
            >
              {module}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>Evidence-aware narrative</p>
          <span>
            Biography Builder transforms reviewed continuity into readable
            narrative drafts without hiding uncertainty.
          </span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Biography Builder</p>
            <h2>Continuity Narrative</h2>
          </div>
          <button className="ghost-button">Biography Settings</button>
        </header>

        <section className="hero-panel biography-hero">
          <div>
            <p className="eyebrow">Reviewed evidence into story</p>
            <h3>LifeLegacy helps family continuity become readable narrative.</h3>
            <p className="hero-copy">
              Biography Builder transforms reviewed evidence and timeline
              continuity into draft narrative sections. Sources remain attached,
              uncertainty remains visible, and the researcher remains the final
              editor of the story.
            </p>
          </div>

          <div className="biography-summary-card">
            <p className="card-label">Draft narrative</p>
            <h4>3 biography sections prepared</h4>
            <p>
              Biography drafts are continuity assistants, not automated truth
              generators.
            </p>
          </div>
        </section>

        <section className="biography-layout">
          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Narrative sections</p>
              <h3>Biography continuity draft</h3>
            </div>

            <div className="biography-list">
              {biographySections.map((section) => (
                <article className="biography-card" key={section.title}>
                  <div className="biography-header">
                    <div>
                      <p className="card-label">Draft section</p>
                      <h4>{section.title}</h4>
                    </div>

                    <span
                      className={`confidence confidence-${section.confidence.toLowerCase()}`}
                    >
                      {section.confidence}
                    </span>
                  </div>

                  <p className="biography-summary">
                    {section.summary}
                  </p>

                  <div className="source-tags">
                    {section.sources.map((source) => (
                      <span className="source-tag" key={source}>
                        {source}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Continuity guidance</p>
              <h3>What Biography Builder emphasizes</h3>
            </div>

            <div className="insight-card strong">
              <h4>Source transparency</h4>
              <p>
                Narrative text remains tied to evidence instead of becoming
                disconnected family folklore.
              </p>
            </div>

            <div className="insight-card caution">
              <h4>Uncertainty remains visible</h4>
              <p>
                Low-confidence material stays clearly marked so researchers can
                revisit uncertain continuity later.
              </p>
            </div>

            <div className="principle-card">
              <h4>Human-centered storytelling</h4>
              <p>
                Biography Builder supports continuity writing while preserving
                the researcher’s judgment, interpretation, and voice.
              </p>
            </div>
          </article>
        </section>

        <section className="principle-grid" aria-label="Biography principles">
          {biographyPrinciples.map((principle, index) => (
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
