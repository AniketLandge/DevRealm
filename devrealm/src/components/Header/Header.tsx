import { headerStyle, navStyle, linkStyle } from "./Header.css";
export function Header() {
  return (
    <header className={headerStyle}>
      <h1>DevRealm</h1>
      <nav className={navStyle}>
        <a href="/" className={linkStyle}>
          Home
        </a>
        <a href="/about" className={linkStyle}>
          About
        </a>
        <a href="/projects" className={linkStyle}>
          Projects
        </a>
        <a href="/contact" className={linkStyle}>
          Contact
        </a>
      </nav>
    </header>
  );
}
