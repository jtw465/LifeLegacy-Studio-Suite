export interface WorkspaceMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export const workspaceMetrics: WorkspaceMetric[] = [
  {
    id: "METRIC-001",
    label: "Source Records",
    value: "24",
    detail: "Documents, scans, audio, and imported records",
  },
  {
    id: "METRIC-002",
    label: "Review Suggestions",
    value: "18",
    detail: "SDR-generated continuity suggestions awaiting review",
  },
  {
    id: "METRIC-003",
    label: "Timeline Events",
    value: "12",
    detail: "Chronological continuity events reconstructed",
  },
  {
    id: "METRIC-004",
    label: "Narrative Sections",
    value: "7",
    detail: "Biography continuity drafts prepared",
  },
  {
    id: "METRIC-005",
    label: "Vault Artifacts",
    value: "14",
    detail: "Photos, letters, audio, and keepsakes preserved",
  },
  {
    id: "METRIC-006",
    label: "Export Bundles",
    value: "4",
    detail: "Prepared interoperability and archive pathways",
  },
];
