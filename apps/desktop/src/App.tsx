import { useState } from "react";
import "./App.css";
import { AppShell } from "./components/AppShell";
import type { WorkspaceName } from "./data/workspaces";
import { workspaceDetails } from "./data/workspaceDetails";
import { sourceRecords } from "./data/sourceRecords";
import { reviewActions, reviewFacts } from "./data/reviewFacts";
import { timelineEvents } from "./data/timelineEvents";
import { biographySections } from "./data/biographySections";

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

      {activeWorkspace === "Review" && (
        <section className="review-fact-grid" aria-label="Review fact suggestions">
          {reviewFacts.map((fact) => (
            <article className="review-fact-card" key={fact.id}>
              <div className="review-fact-header">
                <div>
                  <p className="card-label">{fact.label}</p>
                  <h4>{fact.value}</h4>
                </div>

                <span className={`confidence confidence-${fact.confidence.toLowerCase()}`}>
                  {fact.confidence}
                </span>
              </div>

              <dl className="review-fact-meta">
                <div>
                  <dt>Source</dt>
                  <dd>{fact.sourceTitle}</dd>
                </div>

                <div>
                  <dt>Status</dt>
                  <dd>{fact.status}</dd>
                </div>

                <div>
                  <dt>Evidence Note</dt>
                  <dd>{fact.evidenceNote}</dd>
                </div>
              </dl>

              <div className="review-actions">
                {reviewActions.map((action) => (
                  <button
                    className={
                      action === "Accept"
                        ? "review-action-button primary-review-action"
                        : "review-action-button"
                    }
                    key={action}
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}

      {activeWorkspace === "Timeline" && (
        <section className="timeline-event-list" aria-label="Timeline event sequence">
          {timelineEvents.map((event) => (
            <article className="timeline-event-card" key={event.id}>
              <div className="timeline-year-badge">{event.year}</div>

              <div className="timeline-event-body">
                <div className="timeline-event-header">
                  <div>
                    <p className="card-label">{event.location}</p>
                    <h4>{event.title}</h4>
                  </div>

                  <span className={`confidence confidence-${event.confidence.toLowerCase()}`}>
                    {event.confidence}
                  </span>
                </div>

                <p className="timeline-description">{event.description}</p>
                <p className="timeline-source">Source: {event.sourceTitle}</p>
              </div>
            </article>
          ))}
        </section>
      )}

      {activeWorkspace === "Biography" && (
        <section className="biography-section-grid" aria-label="Biography narrative sections">
          {biographySections.map((section) => (
            <article className="biography-section-card" key={section.id}>
              <div className="biography-section-header">
                <div>
                  <p className="card-label">Narrative section</p>
                  <h4>{section.title}</h4>
                </div>

                <span className={`confidence confidence-${section.confidence.toLowerCase()}`}>
                  {section.confidence}
                </span>
              </div>

              <p className="biography-section-summary">{section.summary}</p>

              <div className="source-tag-list">
                {section.sourceTitles.map((source) => (
                  <span className="source-tag" key={source}>
                    {source}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}

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
