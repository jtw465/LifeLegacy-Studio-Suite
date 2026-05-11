export type ReviewStatus =
  | "pending"
  | "accepted"
  | "edited"
  | "rejected"
  | "review_later";

export type ConfidenceLevel = "high" | "medium" | "low" | "unknown";

export type SourceFormat =
  | "pdf"
  | "image"
  | "scan"
  | "photo"
  | "typed_note"
  | "docx"
  | "odt"
  | "txt"
  | "csv"
  | "gedcom"
  | "audio"
  | "letter"
  | "other";

export type SourceRecordType =
  | "census"
  | "birth_record"
  | "death_record"
  | "marriage_record"
  | "obituary"
  | "church_record"
  | "family_bible"
  | "photograph"
  | "letter"
  | "audio_memory"
  | "typed_history"
  | "unknown";

export type ExportTarget =
  | "json"
  | "csv"
  | "gedcom"
  | "ancestry_compatible"
  | "familysearch_compatible"
  | "gramps_compatible"
  | "rootsmagic_compatible"
  | "family_tree_maker_compatible"
  | "legacy_family_tree_compatible"
  | "myheritage_compatible"
  | "archive_bundle"
  | "pdf_packet";

export interface SourceRecord {
  id: string;
  title: string;
  format: SourceFormat;
  recordType: SourceRecordType;
  originalPath?: string;
  importedAt: string;
  status: ReviewStatus;
  confidence: ConfidenceLevel;
  notes?: string;
}

export interface ExtractedFact {
  id: string;
  sourceId: string;
  label: string;
  value: string;
  confidence: ConfidenceLevel;
  status: ReviewStatus;
  evidenceNote?: string;
}

export interface TimelineEvent {
  id: string;
  sourceId?: string;
  title: string;
  dateText: string;
  location?: string;
  description?: string;
  confidence: ConfidenceLevel;
}

export interface BiographyDraft {
  id: string;
  personName: string;
  summary: string;
  sourceIds: string[];
  status: ReviewStatus;
}

export interface VaultItem {
  id: string;
  title: string;
  itemType: "photo" | "audio" | "letter" | "document" | "keepsake" | "other";
  sourceId?: string;
  description?: string;
  preservedAt: string;
}

export interface SourceDocumentReaderRecord {
  source: SourceRecord;
  extractedText?: string;
  extractedFacts: ExtractedFact[];
  timelineEvents: TimelineEvent[];
  biographyDrafts: BiographyDraft[];
  vaultItems: VaultItem[];
  exportTargets: ExportTarget[];
}
