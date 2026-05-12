import "../styles/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";

// render tampilan navbar
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    // logout
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login-user");
    };

    // mengambil inisial nama
    const getInitial = () => {
        if (!currentUser?.name) return "U";
        return currentUser.name.charAt(0).toUpperCase();
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

            {/* USER PROFILE */}
            <div
                className="user-profile"
                onClick={() =>
                    setDropdownOpen(!dropdownOpen)
                }
            >

                <div className="user-avatar">
                    {getInitial()}
                </div>

                <ChevronDown size={18} />

                {/* DROPDOWN */}
                {dropdownOpen && (
                    <div className="dropdown-menu">

                        <div className="dropdown-user">

                            <h4>
                                {currentUser?.name || "User"}
                            </h4>

                            <p>
                                {currentUser?.email}
                            </p>

                        </div>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >

                            <LogOut size={18} />

                            Logout

                        </button>

                    </div>
                )}

            </div>

            {/* NAVIGATION */}
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

            {/* HAMBURGER */}
            <div
                className={`hamburger ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <span></span>
                <span></span>
                <span></span>

            </div>

        </nav>
    );
}

export default Navbar;