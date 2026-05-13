import type { WorkspaceName } from "./workspaces";

export interface WorkspaceDetail {
  label: string;
  title: string;
  description: string;
  status: string;
}

export const workspaceDetails: Record<WorkspaceName, WorkspaceDetail[]> = {
  Intake: [
    {
      label: "Supported sources",
      title: "PDFs, scans, images, typed notes",
      description:
        "Intake accepts the messy real-world material researchers already have instead of forcing manual entry first.",
      status: "Tier 1",
    },
    {
      label: "Queue preparation",
      title: "Source queue foundation",
      description:
        "Imported records will move into SDR for assisted reading, extraction, and review preparation.",
      status: "Foundation",
    },
  ],
  SDR: [
    {
      label: "Source Document Reader",
      title: "Assisted source reading",
      description:
        "SDR prepares possible names, dates, places, relationships, and source text while preserving the original record.",
      status: "Core engine",
    },
    {
      label: "Human control",
      title: "Suggestions only",
      description:
        "No SDR output becomes trusted genealogy data until the researcher reviews it.",
      status: "Required",
    },
  ],
  Review: [
    {
      label: "Fact cards",
      title: "Accept, edit, reject, or review later",
      description:
        "Suggested facts become manageable review cards instead of overwhelming manual-entry fields.",
      status: "Tier 1",
    },
    {
      label: "Evidence link",
      title: "Original source remains visible",
      description:
        "Review decisions stay connected to the source that produced the suggestion.",
      status: "Required",
    },
  ],
  Timeline: [
    {
      label: "Chronology",
      title: "Reviewed facts into sequence",
      description:
        "Timeline Builder helps scattered evidence become a readable historical path.",
      status: "Tier 1/Tier 2",
    },
    {
      label: "Uncertainty",
      title: "Confidence remains visible",
      description:
        "Uncertain dates and events stay clearly marked so researchers can return later.",
      status: "Required",
    },
  ],
  Biography: [
    {
      label: "Narrative draft",
      title: "Evidence-aware storytelling",
      description:
        "Biography Builder turns reviewed continuity into source-linked narrative drafts.",
      status: "Tier 2-ready",
    },
    {
      label: "Researcher voice",
      title: "Human remains final editor",
      description:
        "The system supports continuity writing without pretending to generate final truth.",
      status: "Required",
    },
  ],
  "Memory Vault": [
    {
      label: "Emotional archive",
      title: "Photos, letters, audio, keepsakes",
      description:
        "Memory Vault preserves the human texture surrounding genealogy research.",
      status: "Tier 1/Tier 2",
    },
    {
      label: "Preservation",
      title: "Artifacts stay meaningful",
      description:
        "Items can connect to reviewed research while retaining their archival and emotional value.",
      status: "Core principle",
    },
  ],
  "Export Forge": [
    {
      label: "Interoperability",
      title: "JSON, CSV, GEDCOM foundation",
      description:
        "Export Forge prepares reviewed material for genealogy applications researchers already use.",
      status: "Tier 1",
    },
    {
      label: "Compatibility",
      title: "Assistant, not affiliation",
      description:
        "External app compatibility is framed as export assistance, not official partnership.",
      status: "Required",
    },
  ],
};
