import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

type HeaderProps = {
  name: string;
  title: string;
};

function Header({ name, title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="header-brand">
        <img className="header-logo" src={logo} alt="" />
        <div>
          <h1>{name}</h1>
          <p>{title}</p>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <p className="likes-count">Likes: {likes}</p>
    </header>
  );
}

export default Header;