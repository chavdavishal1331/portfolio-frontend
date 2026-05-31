import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        Vishal Chavda<span>.</span>
      </div>

      <ul className="footer-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">

        <a href="/">LinkedIn</a>

        <a href="/">GitHub</a>

        <a href="/">Instagram</a>

      </div>

      <p className="copyright">
        © 2026 Vishal Chavda. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;