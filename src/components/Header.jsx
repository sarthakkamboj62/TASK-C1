import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                DEV@Deakin
            </Link>

            <nav className="navbar">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />

                <Link to="/post" className="post-link">
                    Post
                </Link>

                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;