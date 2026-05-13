export type ReviewAction = "Accept" | "Edit" | "Reject" | "Review Later";

export type ReviewFactStatus =
  | "Pending Review"
  | "Needs Confirmation"
  | "Ready for Review"
  | "Accepted"
  | "Rejected";

export type ReviewFactConfidence = "High" | "Medium" | "Low";

export interface ReviewFact {
  id: string;
  label: string;
  value: string;
  sourceTitle: string;
  evidenceNote: string;
  status: ReviewFactStatus;
  confidence: ReviewFactConfidence;
}

export const reviewActions: ReviewAction[] = [
  "Accept",
  "Edit",
  "Reject",
  "Review Later",
];

export const reviewFacts: ReviewFact[] = [
  {
    id: "FACT-001",
    label: "Possible Person",
    value: "Elizabeth Carter",
    sourceTitle: "1900 Census Household Scan",
    evidenceNote: "Name appears in household listing near Samuel Carter.",
    status: "Pending Review",
    confidence: "High",
  },
  {
    id: "FACT-002",
    label: "Possible Birth Year",
    value: "1878",
    sourceTitle: "1900 Census Household Scan",
    evidenceNote: "Estimated from reported age on census page.",
    status: "Needs Confirmation",
    confidence: "Medium",
  },
  {
    id: "FACT-003",
    label: "Possible Relationship",
    value: "Samuel Carter — father",
    sourceTitle: "Family Bible Page",
    evidenceNote: "Relationship note appears near Elizabeth Carter entry.",
    status: "Pending Review",
    confidence: "Medium",
  },
  {
    id: "FACT-004",
    label: "Possible Location",
    value: "Louisville, Kentucky",
    sourceTitle: "Obituary Transcript",
    evidenceNote: "Location mentioned in obituary text.",
    status: "Ready for Review",
    confidence: "High",
  },
];
