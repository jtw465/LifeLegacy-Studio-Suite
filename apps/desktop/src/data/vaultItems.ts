export type VaultItemType = "Photo" | "Letter" | "Audio" | "Document" | "Keepsake";

export interface VaultItem {
  id: string;
  title: string;
  type: VaultItemType;
  sourceContext: string;
  preservationStatus: string;
  emotionalNote: string;
}

export const vaultItems: VaultItem[] = [
  {
    id: "VAULT-001",
    title: "Grandmother’s Wedding Portrait",
    type: "Photo",
    sourceContext: "Family photo box",
    preservationStatus: "Metadata needed",
    emotionalNote: "A visual anchor for family continuity and marriage history.",
  },
  {
    id: "VAULT-002",
    title: "Letter from Louisville",
    type: "Letter",
    sourceContext: "Envelope preservation bundle",
    preservationStatus: "Ready for preservation",
    emotionalNote: "Connects place, handwriting, and family voice.",
  },
  {
    id: "VAULT-003",
    title: "Uncle’s Recorded Story",
    type: "Audio",
    sourceContext: "Cassette transfer",
    preservationStatus: "Awaiting transcript",
    emotionalNote: "Preserves spoken memory before it becomes only text.",
  },
  {
    id: "VAULT-004",
    title: "Typed Family History Notes",
    type: "Document",
    sourceContext: "Research binder",
    preservationStatus: "Linked to SDR",
    emotionalNote: "Represents years of research compressed into readable continuity.",
  },
];
