import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return <section className={`ui-card ${className}`}>{children}</section>;
}

export default Card;
