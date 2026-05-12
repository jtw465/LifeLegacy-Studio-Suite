import "./App.css";
import { AppShell } from "./components/AppShell";

const exportTargets = [
  {
    title: "GEDCOM Foundation",
    description:
      "Prepare reviewed people, events, notes, and relationships for genealogy transfer.",
    status: "Tier 1 foundation",
    readiness: "Planned",
  },
  {
    title: "JSON Archive",
    description:
      "Preserve LifeLegacy-reviewed data in a structured developer-friendly archive format.",
    status: "Tier 1",
    readiness: "Ready to model",
  },
  {
    title: "CSV Review Sheet",
    description:
      "Export reviewed facts into spreadsheet-friendly form for inspection and correction.",
    status: "Tier 1",
    readiness: "Ready to model",
  },
  {
    title: "PDF Research Packet",
    description:
      "Generate human-readable source summaries, reviewed facts, and preservation notes.",
    status: "Tier 1 late",
    readiness: "Draft concept",
  },
  {
    title: "Archive Bundle",
    description:
      "Package sources, metadata, reviewed facts, and continuity notes for preservation.",
    status: "Tier 2",
    readiness: "Future expansion",
  },
];

const compatibilityTargets = [
  "Ancestry-compatible GEDCOM",
  "FamilySearch-friendly transfer",
  "Gramps-compatible structure",
  "RootsMagic-compatible import",
  "Family Tree Maker pathway",
  "Legacy Family Tree pathway",
  "MyHeritage pathway",
];

const exportPrinciples = [
  "Exports only reviewed material by default",
  "Original sources remain traceable",
  "Compatibility is assistance, not affiliation",
  "Researchers keep ownership of their data",
];

function App() {
  return (
    <AppShell
      activeWorkspace="Export Forge"
      eyebrow="Export Forge"
      title="Interoperability Workspace"
      settingsLabel="Export Settings"
      sidebarTitle="Interoperability first"
      sidebarNote="Export Forge prepares reviewed genealogy material for the tools researchers already use."
    >
      <section className="hero-panel export-hero">
        <div>
          <p className="eyebrow">Reviewed research, prepared for transfer</p>
          <h3>LifeLegacy helps your work move cleanly into genealogy applications.</h3>
          <p className="hero-copy">
            Export Forge is the bridge between LifeLegacy’s source-first review
            workflow and the genealogy applications researchers already trust.
            It prepares reviewed facts, source notes, timeline continuity, and
            preservation context without pretending to replace the destination
            software.
          </p>
        </div>

        <div className="export-summary-card">
          <p className="card-label">Export readiness</p>
          <h4>3 Tier 1 pathways identified</h4>
          <p>
            JSON, CSV, and GEDCOM foundations create the first practical bridge
            from reviewed sources to external genealogy workflows.
          </p>
        </div>
      </section>

      <section className="export-layout">
        <article className="panel-card">
          <div className="section-heading">
            <p className="eyebrow">Export pathways</p>
            <h3>Prepared transfer formats</h3>
          </div>

          <div className="export-list">
            {exportTargets.map((target) => (
              <article className="export-card" key={target.title}>
                <div className="export-card-header">
                  <div>
                    <p className="card-label">{target.status}</p>
                    <h4>{target.title}</h4>
                  </div>
                  <span>{target.readiness}</span>
                </div>
                <p>{target.description}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <div className="section-heading">
            <p className="eyebrow">Compatibility direction</p>
            <h3>Genealogy applications</h3>
          </div>

          <div className="compatibility-list">
            {compatibilityTargets.map((target) => (
              <div className="compatibility-item" key={target}>
                <span />
                <p>{target}</p>
              </div>
            ))}
          </div>

          <div className="principle-card">
            <h4>Assistant, not replacement</h4>
            <p>
              Export Forge exists to reduce transfer friction. It does not claim
              official affiliation with external genealogy services unless such
              permission exists.
            </p>
          </div>
        </article>
      </section>

      <section className="principle-grid" aria-label="Export principles">
        {exportPrinciples.map((principle, index) => (
          <article className="principle-tile" key={principle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{principle}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}

export default App;
