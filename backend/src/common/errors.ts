export type ErrorCode =
  | "validation_error"
  | "not_found"
  | "unauthorized"
  | "forbidden"
  | "conflict"
  | "internal_error";

export class AppError extends Error {
  readonly statusCode: number;
  readonly code: ErrorCode;
  readonly details?: unknown;

  constructor(message: string, statusCode: number, code: ErrorCode, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}
