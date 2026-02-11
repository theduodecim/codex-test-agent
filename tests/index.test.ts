import { describe, expect, it } from "vitest";
import { isValidPassword, normalizeUsername, safeDivide } from "../src/index";

describe("safeDivide", () => {
  it("divide correctamente dos números positivos", () => {
    expect(safeDivide(10, 2)).toBe(5);
  });

  it("soporta numeradores negativos", () => {
    expect(safeDivide(-9, 3)).toBe(-3);
  });

  it("retorna 0 cuando el numerador es 0", () => {
    expect(safeDivide(0, 7)).toBe(0);
  });

  it("lanza error cuando el divisor es 0", () => {
    expect(() => safeDivide(7, 0)).toThrowError("Division by zero");
  });
});

describe("normalizeUsername", () => {
  it("convierte a minúsculas y reemplaza espacios internos por _", () => {
    expect(normalizeUsername("John Doe")).toBe("john_doe");
  });

  it("elimina espacios al inicio y final", () => {
    expect(normalizeUsername("   Alice   ")).toBe("alice");
  });

  it("colapsa múltiples espacios y tabs a un solo _", () => {
    expect(normalizeUsername("A   B\t\tC")).toBe("a_b_c");
  });

  it("retorna cadena vacía cuando solo hay espacios en blanco", () => {
    expect(normalizeUsername(" \n\t ")).toBe("");
  });
});

describe("isValidPassword", () => {
  it("retorna true para una contraseña válida", () => {
   expect(isValidPassword("StrongPass1!")).toBe(true);
  });

  it("retorna false si tiene menos de 10 caracteres (edge case límite 9)", () => {
    expect(isValidPassword("Abcdefg1X")).toBe(false);
  });

  it("retorna true exactamente en el mínimo de 10 caracteres", () => {
    expect(isValidPassword("Abcdefghi1!")).toBe(true);
  });

  it("retorna false si no contiene mayúsculas", () => {
    expect(isValidPassword("lowercase123")).toBe(false);
  });

  it("retorna false si no contiene dígitos", () => {
    expect(isValidPassword("NoDigitsHere")).toBe(false);
  });

  it("acepta caracteres especiales si cumple reglas base", () => {
    expect(isValidPassword("Valid@Pass9")).toBe(true);
  });
});
