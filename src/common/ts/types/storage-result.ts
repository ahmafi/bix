export type StorageResult =
  | { success: true; value?: unknown }
  | { success: false; error: unknown };
