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

const vaultCategories = [
  "Photos",
  "Letters",
  "Audio Memories",
  "Documents",
  "Keepsakes",
  "Family Notes",
];

const vaultItems = [
  {
    title: "Grandmother’s Wedding Portrait",
    type: "Photo",
    status: "Metadata needed",
    source: "Family photo box",
  },
  {
    title: "Letter from Louisville",
    type: "Letter",
    status: "Ready for preservation",
    source: "Envelope bundle",
  },
  {
    title: "Uncle’s Recorded Story",
    type: "Audio",
    status: "Awaiting transcript",
    source: "Cassette transfer",
  },
  {
    title: "Family History Notes",
    type: "Document",
    status: "Linked to SDR",
    source: "Typed manuscript",
  },
];

const preservationPrinciples = [
  "Original artifact remains preserved",
  "Memory items can connect to reviewed facts",
  "Photos, letters, and recordings keep human context",
  "Nothing becomes final without researcher review",
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
              className={index === 5 ? "module-button active" : "module-button"}
              key={module}
            >
              {module}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>Emotional archive</p>
          <span>
            The Memory Vault preserves the human texture around genealogy
            research: photos, letters, audio, and keepsakes.
          </span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Memory Vault</p>
            <h2>Emotional Archive</h2>
          </div>
          <button className="ghost-button">Vault Settings</button>
        </header>

        <section className="hero-panel vault-hero">
          <div>
            <p className="eyebrow">Preserve more than facts</p>
            <h3>Family history is not only dates. It is memory, voice, image, and context.</h3>
            <p className="hero-copy">
              The Memory Vault gives photos, letters, recordings, documents, and
              keepsakes a dedicated preservation space. These items can support
              genealogy research while retaining their emotional and archival
              value.
            </p>
          </div>

          <div className="vault-summary-card">
            <p className="card-label">Vault status</p>
            <h4>4 memory items prepared</h4>
            <p>
              Memory items remain source-linked and reviewable before becoming
              part of the preserved family record.
            </p>
          </div>
        </section>

        <section className="vault-layout">
          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Preservation categories</p>
              <h3>What the vault can hold</h3>
            </div>

            <div className="vault-category-grid">
              {vaultCategories.map((category) => (
                <span className="vault-category" key={category}>
                  {category}
                </span>
              ))}
            </div>

            <div className="principle-card">
              <h4>Continuity-first preservation</h4>
              <p>
                The vault is not a dumping ground. It is a calm archive where
                family artifacts can remain meaningful, searchable, and connected
                to reviewed research.
              </p>
            </div>
          </article>

          <article className="panel-card">
            <div className="section-heading">
              <p className="eyebrow">Vault queue</p>
              <h3>Memory items awaiting care</h3>
            </div>

            <div className="vault-list">
              {vaultItems.map((item) => (
                <article className="vault-item" key={item.title}>
                  <div>
                    <p className="card-label">{item.type}</p>
                    <h4>{item.title}</h4>
                    <p>{item.source}</p>
                  </div>
                  <span>{item.status}</span>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="principle-grid" aria-label="Memory Vault principles">
          {preservationPrinciples.map((principle, index) => (
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
