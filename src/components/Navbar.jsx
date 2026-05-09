import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// render tampilan navbar
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActive] = useState("/");
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    }

    const isActive = (path) => {
        return location.pathname === path;
    };

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
                <Link
                    to="/"
                    className={isActive("/") ? "active" : ""}
                    onClick={handleLinkClick}
                >
                    Home
                </Link>
                <Link
                    to="/how-it-works"
                    className={isActive("/how-it-works") ? "active" : ""}
                    onClick={handleLinkClick}
                >
                    How It Works
                </Link>
                <Link
                    to="/upload"
                    className={isActive("/upload") ? "active" : ""}
                    onClick={handleLinkClick}
                >
                    Upload
                </Link>
                <Link
                    to="/history"
                    className={isActive("/history") ? "active" : ""}
                    onClick={handleLinkClick}
                >
                    History
                </Link>
                <Link
                    to="/about"
                    className={isActive("/about") ? "active" : ""}
                    onClick={handleLinkClick}
                >
                    About
                </Link>
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