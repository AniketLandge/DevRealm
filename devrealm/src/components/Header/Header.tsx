import { headerStyle, navStyle, linkStyle, brandName } from "./Header.css";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <header className={headerStyle}>
      <div className={brandName}>Aniket Landge</div>
      <nav className={navStyle}>
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
