import "../styles/navbar.css";

// render tampilan navbar
function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo pojok kiri atas */}
            <h2>EcoSortAI</h2>

            {/* Menu Navigasi */}
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">How It Works</a>
                <a href="#">Upload</a>
                <a href="#">History</a>
                <a href="#">About</a>
            </div>
        </nav>
    );
}

export default Navbar;