export type TimelineConfidence = "High" | "Medium" | "Low";

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  location: string;
  sourceTitle: string;
  description: string;
  confidence: TimelineConfidence;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "TIME-001",
    year: "1878",
    title: "Possible birth year",
    location: "Louisville, Kentucky",
    sourceTitle: "1900 Census Household Scan",
    description:
      "Estimated birth year based on age reported in the census household listing.",
    confidence: "Medium",
  },
  {
    id: "TIME-002",
    year: "1898",
    title: "Family Bible entry",
    location: "Private family collection",
    sourceTitle: "Family Bible Page",
    description:
      "A family Bible page appears to reference Elizabeth Carter near Samuel Carter.",
    confidence: "Medium",
  },
  {
    id: "TIME-003",
    year: "1912",
    title: "Letter from Louisville",
    location: "Louisville, Kentucky",
    sourceTitle: "Letter from Louisville",
    description:
      "A preserved letter suggests continued family presence in Louisville.",
    confidence: "Low",
  },
  {
    id: "TIME-004",
    year: "1942",
    title: "Obituary location reference",
    location: "Louisville, Kentucky",
    sourceTitle: "Obituary Transcript",
    description:
      "Obituary material includes location evidence connected to Louisville.",
    confidence: "High",
  },
];
