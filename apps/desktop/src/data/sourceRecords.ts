export type SourceRecordType =
  | "PDF"
  | "Image"
  | "Letter"
  | "Audio"
  | "Document";

export type ReviewStatus =
  | "Pending Review"
  | "Ready for SDR"
  | "Reviewed"
  | "Needs Attention";

export type ConfidenceLevel =
  | "High"
  | "Medium"
  | "Low";

export interface SourceRecord {
  id: string;
  title: string;
  type: SourceRecordType;
  source: string;
  reviewStatus: ReviewStatus;
  confidence: ConfidenceLevel;
  year: string;
}

export const sourceRecords: SourceRecord[] = [
  {
    id: "SRC-001",
    title: "1900 Census Household Scan",
    type: "PDF",
    source: "County archive microfilm",
    reviewStatus: "Ready for SDR",
    confidence: "High",
    year: "1900",
  },
  {
    id: "SRC-002",
    title: "Family Bible Page",
    type: "Image",
    source: "Private family collection",
    reviewStatus: "Pending Review",
    confidence: "Medium",
    year: "1898",
  },
  {
    id: "SRC-003",
    title: "Letter from Louisville",
    type: "Letter",
    source: "Envelope preservation box",
    reviewStatus: "Needs Attention",
    confidence: "Low",
    year: "1912",
  },
  {
    id: "SRC-004",
    title: "Recorded Oral History",
    type: "Audio",
    source: "Cassette transfer",
    reviewStatus: "Ready for SDR",
    confidence: "Medium",
    year: "1978",
  },
  {
    id: "SRC-005",
    title: "Typed Family Notes",
    type: "Document",
    source: "Research binder",
    reviewStatus: "Reviewed",
    confidence: "High",
    year: "1984",
  },
];
