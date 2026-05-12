import { useState } from "react";
import "./App.css";
import { AppShell } from "./components/AppShell";
import type { WorkspaceName } from "./data/workspaces";

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
      "LifeLegacy begins with the material you already have: scans, PDFs, photos, letters, typed notes, audio, and family documents. The goal is to help you begin gradually.",
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
      "The Source Document Reader is the central assistant layer. It reads source material, suggests possible facts, preserves original evidence, and sends everything forward for human review.",
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
    heroTitle: "SDR found possible genealogy details. You decide what becomes record.",
    heroCopy:
      "The Review Desk keeps the researcher in control. Each suggestion remains connected to its original source so names, dates, places, relationships, and notes can be reviewed safely.",
    summaryLabel: "Current review queue",
    summaryTitle: "4 suggestions awaiting review",
    summaryCopy:
      "Nothing is final until approved. This protects source integrity and reduces data-entry overwhelm.",
  },
  Timeline: {
    eyebrow: "Timeline Builder",
    title: "Historical Continuity",
    settingsLabel: "Timeline Settings",
    sidebarTitle: "Continuity builder",
    sidebarNote:
      "Timeline Builder turns reviewed evidence into a calm chronological view without replacing researcher judgment.",
    heroEyebrow: "Reviewed evidence into sequence",
    heroTitle: "LifeLegacy helps scattered facts become a readable life path.",
    heroCopy:
      "Timeline Builder collects reviewed or review-ready events and arranges them into chronological continuity while keeping uncertainty visible.",
    summaryLabel: "Timeline draft",
    summaryTitle: "4 events reconstructed",
    summaryCopy:
      "These events are structured continuity suggestions built from source-linked evidence.",
  },
  Biography: {
    eyebrow: "Biography Builder",
    title: "Continuity Narrative",
    settingsLabel: "Biography Settings",
    sidebarTitle: "Evidence-aware narrative",
    sidebarNote:
      "Biography Builder transforms reviewed continuity into readable narrative drafts without hiding uncertainty.",
    heroEyebrow: "Reviewed evidence into story",
    heroTitle: "LifeLegacy helps family continuity become readable narrative.",
    heroCopy:
      "Biography Builder transforms reviewed evidence and timeline continuity into draft narrative sections. Sources remain attached, uncertainty remains visible, and the researcher remains the final editor.",
    summaryLabel: "Draft narrative",
    summaryTitle: "3 biography sections prepared",
    summaryCopy:
      "Biography drafts are continuity assistants, not automated truth generators.",
  },
  "Memory Vault": {
    eyebrow: "Memory Vault",
    title: "Emotional Archive",
    settingsLabel: "Vault Settings",
    sidebarTitle: "Emotional archive",
    sidebarNote:
      "The Memory Vault preserves the human texture around genealogy research: photos, letters, audio, and keepsakes.",
    heroEyebrow: "Preserve more than facts",
    heroTitle: "Family history is not only dates. It is memory, voice, image, and context.",
    heroCopy:
      "The Memory Vault gives photos, letters, recordings, documents, and keepsakes a dedicated preservation space while keeping them connected to research.",
    summaryLabel: "Vault status",
    summaryTitle: "4 memory items prepared",
    summaryCopy:
      "Memory items remain source-linked and reviewable before becoming part of the preserved family record.",
  },
  "Export Forge": {
    eyebrow: "Export Forge",
    title: "Interoperability Workspace",
    settingsLabel: "Export Settings",
    sidebarTitle: "Interoperability first",
    sidebarNote:
      "Export Forge prepares reviewed genealogy material for the tools researchers already use.",
    heroEyebrow: "Reviewed research, prepared for transfer",
    heroTitle: "LifeLegacy helps your work move cleanly into genealogy applications.",
    heroCopy:
      "Export Forge bridges LifeLegacy’s source-first review workflow and the genealogy applications researchers already trust without pretending to replace them.",
    summaryLabel: "Export readiness",
    summaryTitle: "3 Tier 1 pathways identified",
    summaryCopy:
      "JSON, CSV, and GEDCOM foundations create the first practical bridge from reviewed sources to external genealogy workflows.",
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
    useState<WorkspaceName>("Export Forge");

  const content = workspaceContent[activeWorkspace];

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
