export function safeDivide(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Arguments must be finite numbers");
  }

  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}

export function normalizeUsername(input: string): string {
  if (typeof input !== "string") {
    throw new TypeError("Username must be a string");
  }

  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

export function isValidPassword(pw: string): boolean {
  if (typeof pw !== "string") {
    return false;
  }

  return (
    pw.length >= 10 &&
    /[A-Z]/.test(pw) &&
    /\d/.test(pw) &&
    /[!@#$%^&*]/.test(pw)
  );
}
