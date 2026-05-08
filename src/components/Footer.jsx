import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">

        <h3>Tim Capstone Project CC26</h3>
        <p className="footer-desc">
          Solusi cerdas pengelolaan sampah berbasis AI.
        </p>

        <div className="footer-main-row">

          <p className="copyright">
            EcoSortAI © 2026
          </p>

          <div className="footer-nav-vertical">
            <Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)}>How It Works</Link>
            <Link to="/upload" onClick={() => window.scrollTo(0, 0)}>Upload</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
          </div>

          <div className="footer-right-col">
            <p className="footer-email">
              CC26-PSU026@student.devacademy.id
            </p>

            <div className="footer-social-icons">
              <img src="/icon-instagram.png" alt="Instagram" />
              <img src="/icon-whatsapp.png" alt="WhatsApp" />
              <img src="/icon-youtube.png" alt="YouTube" />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;