import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { events } from '../data/events';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import EventSignupForm from '../components/EventSignupForm';

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  const [seatsLeft, setSeatsLeft] = useState(event?.seats ?? 0);

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

      <EventSignupForm
        seatsLeft={seatsLeft}
        onBooked={(tickets) => {
          setSeatsLeft((previous) => previous - tickets);
        }}
      />

      <p>
        <Link to="/events" className="back-link">
          Back to Events
        </Link>
      </p>
    </main>
  );
}

export default EventDetailsPage;