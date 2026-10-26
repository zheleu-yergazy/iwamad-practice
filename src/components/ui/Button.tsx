import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`ui-button ui-button--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
