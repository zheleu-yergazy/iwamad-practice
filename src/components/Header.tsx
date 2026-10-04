import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";

type HeaderProps = {
  name: string;
  title: string;
};

function Header({ name, title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>{" "}

        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>{" "}

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      <p>Likes: {likes}</p>
    </header>
  );
}

export default Header;