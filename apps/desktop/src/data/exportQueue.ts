export type ExportFormat = "GEDCOM" | "JSON" | "CSV" | "PDF Packet" | "Archive Bundle";

export interface ExportQueueItem {
  id: string;
  title: string;
  format: ExportFormat;
  destination: string;
  readiness: string;
  description: string;
}

export const exportQueue: ExportQueueItem[] = [
  {
    id: "EXP-001",
    title: "Reviewed Facts Transfer",
    format: "GEDCOM",
    destination: "Genealogy applications",
    readiness: "Foundation planned",
    description: "Prepare reviewed people, events, and relationships for transfer.",
  },
  {
    id: "EXP-002",
    title: "LifeLegacy Structured Archive",
    format: "JSON",
    destination: "Preservation archive",
    readiness: "Ready to model",
    description: "Preserve reviewed records, confidence, sources, and notes in structured form.",
  },
  {
    id: "EXP-003",
    title: "Review Sheet",
    format: "CSV",
    destination: "Spreadsheet workflow",
    readiness: "Ready to model",
    description: "Export facts for correction, inspection, and external review.",
  },
  {
    id: "EXP-004",
    title: "Family Research Packet",
    format: "PDF Packet",
    destination: "Human-readable sharing",
    readiness: "Tier 1 late",
    description: "Summarize sources, reviewed facts, timeline notes, and preservation context.",
  },
];
