export interface SessionRecoveryItem {
  id: string;
  title: string;
  workspace: string;
  status: string;
  nextAction: string;
}

export const sessionRecoveryItems: SessionRecoveryItem[] = [
  {
    id: "SESSION-001",
    title: "1900 Census Household Scan",
    workspace: "Review Desk",
    status: "2 facts awaiting review",
    nextAction: "Confirm possible birth year and household relationship",
  },
  {
    id: "SESSION-002",
    title: "Letter from Louisville",
    workspace: "Memory Vault",
    status: "Preservation metadata incomplete",
    nextAction: "Add source context and emotional note",
  },
  {
    id: "SESSION-003",
    title: "Elizabeth Carter Timeline",
    workspace: "Timeline Builder",
    status: "1 low-confidence event",
    nextAction: "Verify possible 1912 location reference",
  },
];
