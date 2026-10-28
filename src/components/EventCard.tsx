import { Link } from 'react-router';
import type { CampusEvent } from '../data/events';
import Card from './ui/Card';
import Tag from './ui/Tag';

type EventCardProps = {
  event: CampusEvent;
};

function EventCard({ event }: EventCardProps) {
  return (
    <Card className="event-card">
      <article>
        <h2>{event.title}</h2>

        <p className="event-description">{event.description}</p>

        <div className="event-info">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Place:</strong> {event.place}</p>
        </div>

        <Tag>{event.seats} seats</Tag>

        <p>
          <Link to={`/events/${event.id}`} className="back-link">
            Details
          </Link>
        </p>
      </article>
    </Card>
  );
}

export default EventCard;
