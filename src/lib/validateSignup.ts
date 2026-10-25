
type SignupData = {
  fullName: string;
  email: string;
  tickets: string;
};

type SignupErrors = {
  fullName?: string;
  email?: string;
  tickets?: string;
};

export function validateSignup(
  data: SignupData,
  seatsLeft: number,
): SignupErrors {
  const errors: SignupErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Enter your full name';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Enter a valid email';
  }

  const tickets = Number(data.tickets);

  if (
    !data.tickets.trim() ||
    !Number.isInteger(tickets) ||
    tickets < 1 ||
    tickets > 4
  ) {
    errors.tickets = 'Choose 1 to 4 tickets';
  } else if (tickets > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`;
  }

  return errors;
}
