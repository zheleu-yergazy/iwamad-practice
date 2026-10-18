
import { describe, test, expect } from "vitest";
import { validateRegistration } from "./validateRegistration";
import type { RegistrationValues } from "./validateRegistration";

const validValues: RegistrationValues = {
  fullName: "Aliya Nurlanovna",
  email: "aliya@example.com",
  password: "almaty2026",
  confirmPassword: "almaty2026",
  acceptTerms: true,
};

describe("validateRegistration", () => {
  test("accepts valid values", () => {
    expect(validateRegistration(validValues)).toEqual({});
  });

  test("rejects an empty full name", () => {
    expect(
      validateRegistration({ ...validValues, fullName: "   " }),
    ).toHaveProperty("fullName", "Enter your full name");
  });

  test("rejects an invalid email", () => {
    expect(
      validateRegistration({ ...validValues, email: "aliya@example" }),
    ).toHaveProperty(
      "email",
      "Enter a valid email, like name@example.com",
    );
  });

  test("accepts a password with eight characters and a number", () => {
    expect(
      validateRegistration({
        ...validValues,
        password: "almaty26",
        confirmPassword: "almaty26",
      }),
    ).not.toHaveProperty("password");
  });

  test("rejects a password shorter than eight characters", () => {
    expect(
      validateRegistration({
        ...validValues,
        password: "almaty2",
        confirmPassword: "almaty2",
      }),
    ).toHaveProperty("password", "Use at least 8 characters");
  });

  test("rejects a password without a number", () => {
    expect(
      validateRegistration({
        ...validValues,
        password: "almatycity",
        confirmPassword: "almatycity",
      }),
    ).toHaveProperty("password", "Include at least one number");
  });

  test("rejects passwords that do not match", () => {
    expect(
      validateRegistration({
        ...validValues,
        confirmPassword: "almaty2027",
      }),
    ).toHaveProperty("confirmPassword", "Passwords do not match");
  });

  test("requires acceptance of terms", () => {
    expect(
      validateRegistration({ ...validValues, acceptTerms: false }),
    ).toHaveProperty("acceptTerms", "Accept the terms to continue");
  });
});
