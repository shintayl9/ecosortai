import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// render tampilan navbar
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActive] = useState("/");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    }

    // lock scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            {/* Logo pojok kiri atas - bisa di klik ke home*/}
            <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
                <h2>EcoSortAI</h2>
            </Link>

            {/* Menu Navigasi */}
            <div className={`nav-links ${isOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
                <Link to="/upload" onClick={() => setIsOpen(false)}>Upload</Link>
                <Link to="/history" onClick={() => setIsOpen(false)}>History</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </div>

            {/* Hamburger */}
            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;