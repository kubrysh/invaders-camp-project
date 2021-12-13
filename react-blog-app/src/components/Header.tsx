import { Link, useLocation } from "react-router-dom";
import logo from "../logo.svg";

const Header = (props:any) => {

    const location = useLocation();

    return(
        <header className="header-container">
            <div className="logo-container">
                <img src={logo} className="app-logo" alt="logo" />
                <Link to="/" className="header-element" id="logo-text">
                    Ihor Kubrysh's Blog App
                </Link>
            </div>
            <nav>
                <Link to="/" className="nav-element">Home</Link>
                <Link to={{
                    pathname: "/articles/new",
                    state: { background: location }
                }}
                    className="nav-element"
                >
                    ✍️ New Article
                </Link>
                <Link to="/" className="nav-element">Username</Link>
            </nav>
        </header>
    )
}

export default Header;
