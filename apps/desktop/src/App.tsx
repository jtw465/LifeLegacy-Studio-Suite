import { useState } from "react";
import "./App.css";
import { AppShell } from "./components/AppShell";
import type { WorkspaceName } from "./data/workspaces";
import { workspaceDetails } from "./data/workspaceDetails";
import { sourceRecords } from "./data/sourceRecords";

const workspaceContent: Record<
  WorkspaceName,
  {
    eyebrow: string;
    title: string;
    settingsLabel: string;
    sidebarTitle: string;
    sidebarNote: string;
    heroEyebrow: string;
    heroTitle: string;
    heroCopy: string;
    summaryLabel: string;
    summaryTitle: string;
    summaryCopy: string;
  }
> = {
  Intake: {
    eyebrow: "Universal Record Intake",
    title: "Import Workspace",
    settingsLabel: "Intake Settings",
    sidebarTitle: "Start with the source",
    sidebarNote:
      "Intake gathers records without forcing the researcher into manual entry first.",
    heroEyebrow: "Bring what you have",
    heroTitle: "Import records without being overwhelmed by the archive.",
    heroCopy:
      "LifeLegacy begins with the material you already have: scans, PDFs, photos, letters, typed notes, audio, and family documents.",
    summaryLabel: "Intake status",
    summaryTitle: "Multiple source types supported",
    summaryCopy:
      "The intake foundation prepares records for SDR, Review, Timeline, Biography, Memory Vault, and Export Forge.",
  },

  SDR: {
    eyebrow: "Source Document Reader",
    title: "SDR Workspace",
    settingsLabel: "SDR Settings",
    sidebarTitle: "Assistant-first reading",
    sidebarNote:
      "SDR reads sources and suggests possible facts while keeping the researcher in control.",
    heroEyebrow: "The intake engine",
    heroTitle: "SDR turns source material into reviewable genealogy suggestions.",
    heroCopy:
      "The Source Document Reader prepares possible names, dates, places, relationships, and source-linked continuity suggestions.",
    summaryLabel: "Current mode",
    summaryTitle: "Human-reviewed assistance",
    summaryCopy:
      "No extracted fact becomes trusted genealogy data until reviewed and approved by the researcher.",
  },

  Review: {
    eyebrow: "Review Desk",
    title: "Suggested Facts",
    settingsLabel: "Review Settings",
    sidebarTitle: "Human review required",
    sidebarNote:
      "SDR suggestions become trusted genealogy data only after researcher validation.",
    heroEyebrow: "Source-linked validation",
    heroTitle: "Researchers remain the final authority.",
    heroCopy:
      "Review Desk transforms overwhelming manual-entry workflows into manageable review decisions.",
    summaryLabel: "Current review queue",
    summaryTitle: "Source-linked validation",
    summaryCopy:
      "Every suggestion remains connected to the record that produced it.",
  },

  Timeline: {
    eyebrow: "Timeline Builder",
    title: "Historical Continuity",
    settingsLabel: "Timeline Settings",
    sidebarTitle: "Continuity builder",
    sidebarNote:
      "Timeline Builder turns reviewed evidence into chronological continuity.",
    heroEyebrow: "Reviewed evidence into sequence",
    heroTitle: "Scattered records become historical flow.",
    heroCopy:
      "Timeline Builder helps researchers see continuity, uncertainty, and chronology more clearly.",
    summaryLabel: "Timeline draft",
    summaryTitle: "Historical continuity reconstruction",
    summaryCopy:
      "Timeline continuity remains source-linked and confidence-aware.",
  },

  Biography: {
    eyebrow: "Biography Builder",
    title: "Continuity Narrative",
    settingsLabel: "Biography Settings",
    sidebarTitle: "Evidence-aware narrative",
    sidebarNote:
      "Biography Builder transforms reviewed continuity into readable narrative drafts.",
    heroEyebrow: "Reviewed evidence into story",
    heroTitle: "Family continuity becomes readable narrative.",
    heroCopy:
      "Biography Builder supports narrative drafting without pretending to replace researcher judgment.",
    summaryLabel: "Draft narrative",
    summaryTitle: "Evidence-aware storytelling",
    summaryCopy:
      "Sources remain visible throughout narrative construction.",
  },

  "Memory Vault": {
    eyebrow: "Memory Vault",
    title: "Emotional Archive",
    settingsLabel: "Vault Settings",
    sidebarTitle: "Emotional archive",
    sidebarNote:
      "The Memory Vault preserves photos, letters, audio, keepsakes, and context.",
    heroEyebrow: "Preserve more than facts",
    heroTitle: "Family history includes memory and human texture.",
    heroCopy:
      "The Memory Vault preserves emotional continuity alongside historical continuity.",
    summaryLabel: "Vault status",
    summaryTitle: "Human continuity preserved",
    summaryCopy:
      "Memory items remain connected to reviewed research.",
  },

  "Export Forge": {
    eyebrow: "Export Forge",
    title: "Interoperability Workspace",
    settingsLabel: "Export Settings",
    sidebarTitle: "Interoperability first",
    sidebarNote:
      "Export Forge prepares reviewed genealogy material for external workflows.",
    heroEyebrow: "Reviewed research, prepared for transfer",
    heroTitle: "LifeLegacy bridges continuity and export.",
    heroCopy:
      "Export Forge supports compatibility with genealogy ecosystems while preserving researcher ownership.",
    summaryLabel: "Export readiness",
    summaryTitle: "Practical interoperability foundation",
    summaryCopy:
      "GEDCOM, JSON, and CSV pathways prepare reviewed material for transfer.",
  },
};

const universalPrinciples = [
  "Source-first workflow",
  "Human review required",
  "Assistant, not replacement",
  "Continuity without overwhelm",
];

function App() {
  const [activeWorkspace, setActiveWorkspace] =
    useState<WorkspaceName>("SDR");

  const content = workspaceContent[activeWorkspace];
  const details = workspaceDetails[activeWorkspace];

  return (
    <AppShell
      activeWorkspace={activeWorkspace}
      eyebrow={content.eyebrow}
      title={content.title}
      settingsLabel={content.settingsLabel}
      sidebarTitle={content.sidebarTitle}
      sidebarNote={content.sidebarNote}
      onWorkspaceChange={setActiveWorkspace}
    >
      <section className="hero-panel export-hero">
        <div>
          <p className="eyebrow">{content.heroEyebrow}</p>
          <h3>{content.heroTitle}</h3>
          <p className="hero-copy">{content.heroCopy}</p>
        </div>

        <div className="export-summary-card">
          <p className="card-label">{content.summaryLabel}</p>
          <h4>{content.summaryTitle}</h4>
          <p>{content.summaryCopy}</p>
        </div>
      </section>

      <section className="record-grid">
        {sourceRecords.map((record) => (
          <article className="record-card" key={record.id}>
            <div className="record-card-header">
              <div>
                <p className="card-label">{record.type}</p>
                <h4>{record.title}</h4>
              </div>

              <span className={`confidence confidence-${record.confidence.toLowerCase()}`}>
                {record.confidence}
              </span>
            </div>

            <div className="record-meta">
              <div>
                <dt>Source</dt>
                <dd>{record.source}</dd>
              </div>

              <div>
                <dt>Status</dt>
                <dd>{record.reviewStatus}</dd>
              </div>

              <div>
                <dt>Year</dt>
                <dd>{record.year}</dd>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="detail-grid" aria-label={`${activeWorkspace} details`}>
        {details.map((detail) => (
          <article className="detail-card" key={`${detail.label}-${detail.title}`}>
            <div className="detail-card-header">
              <div>
                <p className="card-label">{detail.label}</p>
                <h4>{detail.title}</h4>
              </div>
              <span>{detail.status}</span>
            </div>
            <p>{detail.description}</p>
          </article>
        ))}
      </section>

      <section className="principle-grid" aria-label="LifeLegacy principles">
        {universalPrinciples.map((principle, index) => (
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
