
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";

const initialValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [registered, setRegistered] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;

    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setRegistered(false);
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      setRegistered(true);
    } else {
      setRegistered(false);
    }
  }

  function showError(field: keyof RegistrationValues) {
    return submitAttempted || touched[field] ? errors[field] : undefined;
  }

  return (
    <section className="register-page">
      <h2>Register</h2>
      <p>Create your account by completing the form below.</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="name"
          error={showError("fullName")}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="email"
          error={showError("email")}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-password"
          error={showError("password")}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-password"
          error={showError("confirmPassword")}
        />

        <div className="field">
          <label className="check">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("acceptTerms") ? true : undefined}
            />
            I accept the terms and conditions
          </label>

          {showError("acceptTerms") && (
            <p className="field-error">{showError("acceptTerms")}</p>
          )}
        </div>

        <Button type="submit" variant="primary">
          Create account
        </Button>

        {registered && (
          <p role="status">
            Thanks, {values.fullName.trim()}. You are registered.
          </p>
        )}
      </form>
    </section>
  );
}

export default RegisterPage;