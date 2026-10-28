
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import TextField from './ui/TextField';
import Button from './ui/Button';
import { validateSignup } from '../lib/validateSignup';

type EventSignupFormProps = {
  seatsLeft: number;
  onBooked: (tickets: number) => void;
};

function EventSignupForm({ seatsLeft, onBooked }: EventSignupFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState('1');
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    tickets?: string;
  }>({});
  const [status, setStatus] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateSignup(
      { fullName, email, tickets },
      seatsLeft,
    );

    setErrors(validationErrors);
    setStatus('');

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onBooked(Number(tickets));
    setStatus(`Booked: ${tickets} for ${fullName}.`);
    setFullName('');
    setEmail('');
    setTickets('1');
    setErrors({});
  }

  return (
    <section className="signup-section">
      <h2>Sign up</h2>
      <p>Seats left: <strong>{seatsLeft}</strong></p>

      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          value={fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFullName(e.target.value)
          }
          error={errors.fullName}
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          error={errors.email}
        />

        <TextField
          label="Tickets"
          type="number"
          min={1}
          max={4}
          value={tickets}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTickets(e.target.value)
          }
          error={errors.tickets}
        />

        <Button type="submit">Book</Button>
      </form>

      {status && (
        <p className="signup-status" role="status">
          {status}
        </p>
      )}
    </section>
  );
}

export default EventSignupForm;
