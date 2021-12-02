import logo from "../logo.svg";

const Header = (props:any) => {
    return(
        <header className="header-container">
            <div className="logo-container">
                <img src={logo} className="app-logo" alt="logo" />
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#" className="header-element" id="logo-text">
                    Ihor Kubrysh's Blog App
                </a>
            </div>
            <nav>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#" className="nav-element">Home</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#" onClick={() => props.setIsNewArticleOpen(true)} className="nav-element">✍️ New Article</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#" className="nav-element">Username</a>
            </nav>
        </header>
    )
}

export default Header;
