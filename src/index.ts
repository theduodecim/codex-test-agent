export function safeDivide(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

export function normalizeUsername(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, "_");
}

export function isValidPassword(pw: string): boolean {
  return pw.length >= 10 && /[A-Z]/.test(pw) && /\d/.test(pw);
}

