import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        VC<span>.</span>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul>

          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>
      </nav>

      <button className="hire-btn">
        Hire Me
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Header;