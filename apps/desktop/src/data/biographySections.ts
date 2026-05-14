export type BiographyConfidence = "High" | "Medium" | "Low";

export interface BiographySection {
  id: string;
  title: string;
  summary: string;
  sourceTitles: string[];
  confidence: BiographyConfidence;
}

export const biographySections: BiographySection[] = [
  {
    id: "BIO-001",
    title: "Early Life",
    summary:
      "Current reviewed evidence suggests Elizabeth Carter may have been born in or near Louisville, Kentucky around 1878.",
    sourceTitles: ["1900 Census Household Scan", "Family Bible Page"],
    confidence: "Medium",
  },
  {
    id: "BIO-002",
    title: "Family Connections",
    summary:
      "The Family Bible Page may connect Elizabeth Carter to Samuel Carter, though this relationship still needs researcher verification.",
    sourceTitles: ["Family Bible Page"],
    confidence: "Medium",
  },
  {
    id: "BIO-003",
    title: "Louisville Continuity",
    summary:
      "Multiple source records suggest a continuing family presence in Louisville across several decades.",
    sourceTitles: ["Letter from Louisville", "Obituary Transcript"],
    confidence: "High",
  },
  {
    id: "BIO-004",
    title: "Open Questions",
    summary:
      "The timeline still contains uncertain points, especially around the 1912 letter and possible family relationship evidence.",
    sourceTitles: ["Letter from Louisville", "Family Bible Page"],
    confidence: "Low",
  },
];
