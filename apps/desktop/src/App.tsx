import "./App.css";
import lifeLegacyMark from "./assets/brand/lifelegacy-mark.svg";

const modules = [
  "Intake",
  "Review",
  "Ledger",
  "Archive",
  "Timeline",
  "Narrative",
  "Vault",
  "Export Forge",
];

const recordFormats = [
  "PDF",
  "JPG / PNG / TIFF",
  "Scans",
  "Photographs",
  "Typed Notes",
  "DOCX / ODT / TXT",
  "CSV",
  "GEDCOM",
];

const sourceQueue = [
  {
    title: "1900 Census Household Scan",
    type: "PDF",
    status: "Ready for assisted extraction",
  },
  {
    title: "Family Bible Page",
    type: "Image",
    status: "Waiting for review setup",
  },
  {
    title: "Obituary Transcript",
    type: "Text",
    status: "Ready for source card creation",
  },
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
              className={index === 0 ? "module-button active" : "module-button"}
              key={module}
            >
              {module}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>Assistant-first design</p>
          <span>Built to reduce data-entry friction, not replace your genealogy tools.</span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Genealogy Workflow Assistant</p>
            <h2>Universal Record Intake</h2>
          </div>
          <button className="ghost-button">Project Settings</button>
        </header>

        <section className="hero-panel intake-hero">
          <div>
            <p className="eyebrow">Source-first preservation</p>
            <h3>Bring the record. LifeLegacy helps with the bottleneck.</h3>
            <p className="hero-copy">
              Import scans, PDFs, photographs, typed notes, and family-history
              documents. LifeLegacy assists with extraction, keeps the original
              source visible, and prepares reviewed data for the genealogy
              applications researchers already use.
            </p>
          </div>

          <div className="intake-card">
            <p className="card-label">Start here</p>
            <h4>Import Genealogical Records</h4>
            <p>
              Add a record or folder of sources to begin the assisted intake
              workflow.
            </p>
            <button className="primary-button">Import Records</button>
          </div>
        </section>

        <section className="intake-layout">
          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Supported sources</p>
              <h3>Record formats</h3>
            </div>

            <div className="format-grid">
              {recordFormats.map((format) => (
                <span className="format-pill" key={format}>
                  {format}
                </span>
              ))}
            </div>
          </article>

          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Intake queue preview</p>
              <h3>Source queue</h3>
            </div>

            <div className="queue-list">
              {sourceQueue.map((source) => (
                <div className="queue-item" key={source.title}>
                  <div>
                    <h4>{source.title}</h4>
                    <p>{source.status}</p>
                  </div>
                  <span>{source.type}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="workflow-grid" aria-label="LifeLegacy workflow">
          <article className="workflow-card">
            <span>01</span>
            <h4>Import</h4>
            <p>Gather historical records into a calm intake workspace.</p>
          </article>

          <article className="workflow-card">
            <span>02</span>
            <h4>Review</h4>
            <p>Confirm suggested names, dates, places, and relationships.</p>
          </article>

          <article className="workflow-card">
            <span>03</span>
            <h4>Preserve</h4>
            <p>Keep every accepted fact connected to its original source.</p>
          </article>

          <article className="workflow-card">
            <span>04</span>
            <h4>Export</h4>
            <p>Prepare clean transfer packages for genealogy applications.</p>
          </article>
        </section>
      </section>
    </main>
  );
}

export default App;
