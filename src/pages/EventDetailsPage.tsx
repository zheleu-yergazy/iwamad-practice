import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useParams } from 'react-router';
import { events } from '../data/events';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import TextField from '../components/ui/TextField';
import Button from '../components/ui/Button';
import { validateSignup } from '../lib/validateSignup';

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState('1');
  const [seatsLeft, setSeatsLeft] = useState(event?.seats ?? 0);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    tickets?: string;
  }>({});
  const [status, setStatus] = useState('');

  if (!event) {
    return (
      <main className="page-container event-details">
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events" className="back-link">
          Back to Events
        </Link>
      </main>
    );
  }

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

    setSeatsLeft((previous) => previous - Number(tickets));
    setStatus(`Booked: ${tickets} for ${fullName}.`);
    setFullName('');
    setEmail('');
    setTickets('1');
    setErrors({});
  }

  return (
    <main className="page-container event-details">
      <h1>{event.title}</h1>
      <p className="event-description">{event.description}</p>

      <Card>
        <div className="event-info">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Place:</strong> {event.place}</p>
          <Tag>{event.seats} seats</Tag>
        </div>
      </Card>

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

      <p>
        <Link to="/events" className="back-link">
          Back to Events
        </Link>
      </p>
    </main>
  );
}

export default EventDetailsPage;