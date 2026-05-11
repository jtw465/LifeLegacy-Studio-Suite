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

const reviewFacts = [
  {
    label: "Possible Person",
    value: "Elizabeth Carter",
    source: "1900 Census Household Scan",
    confidence: "High",
    status: "Pending review",
  },
  {
    label: "Possible Birth Year",
    value: "1878",
    source: "1900 Census Household Scan",
    confidence: "Medium",
    status: "Needs confirmation",
  },
  {
    label: "Possible Relationship",
    value: "Samuel Carter — father",
    source: "Family Bible Page",
    confidence: "Medium",
    status: "Pending review",
  },
  {
    label: "Possible Death Notice",
    value: "Obituary mentions Louisville, Kentucky",
    source: "Obituary Transcript",
    confidence: "High",
    status: "Ready for review",
  },
];

const reviewActions = ["Accept", "Edit", "Reject", "Review Later"];

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
              className={index === 2 ? "module-button active" : "module-button"}
              key={module}
            >
              {module}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>Human review required</p>
          <span>
            SDR suggestions become trusted genealogy data only after researcher
            validation.
          </span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Review Desk</p>
            <h2>Suggested Facts</h2>
          </div>
          <button className="ghost-button">Review Settings</button>
        </header>

        <section className="hero-panel review-hero">
          <div>
            <p className="eyebrow">Source-linked validation</p>
            <h3>SDR found possible genealogy details. You decide what becomes record.</h3>
            <p className="hero-copy">
              The Review Desk keeps the researcher in control. Each suggestion
              remains connected to its original source so names, dates, places,
              relationships, and notes can be accepted, edited, rejected, or held
              for later review without losing evidence.
            </p>
          </div>

          <div className="review-summary-card">
            <p className="card-label">Current review queue</p>
            <h4>4 suggestions awaiting review</h4>
            <p>
              Nothing is final until approved. This protects source integrity and
              reduces data-entry overwhelm.
            </p>
          </div>
        </section>

        <section className="review-layout">
          <article className="panel-card source-preview-card">
            <div className="section-heading">
              <p className="eyebrow">Original source</p>
              <h3>Source remains visible</h3>
            </div>

            <div className="source-preview">
              <div className="source-page">
                <span>Source Scan Preview</span>
              </div>
              <p>
                A real version of this panel will show the scanned page, image,
                typed transcript, letter, or imported record beside the suggested
                facts.
              </p>
            </div>
          </article>

          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Review cards</p>
              <h3>Suggested genealogy facts</h3>
            </div>

            <div className="fact-list">
              {reviewFacts.map((fact) => (
                <article className="fact-card" key={`${fact.label}-${fact.value}`}>
                  <div className="fact-card-header">
                    <div>
                      <p className="card-label">{fact.label}</p>
                      <h4>{fact.value}</h4>
                    </div>
                    <span className={`confidence confidence-${fact.confidence.toLowerCase()}`}>
                      {fact.confidence}
                    </span>
                  </div>

                  <dl className="fact-meta">
                    <div>
                      <dt>Source</dt>
                      <dd>{fact.source}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>{fact.status}</dd>
                    </div>
                  </dl>

                  <div className="review-actions">
                    {reviewActions.map((action) => (
                      <button
                        className={action === "Accept" ? "action-button primary-action" : "action-button"}
                        key={action}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default App;
