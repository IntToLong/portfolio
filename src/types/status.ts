export const STATUS = {
  SUCCESS: "success",
  ERROR: "error"
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];
