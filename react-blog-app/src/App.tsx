import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="header-container">
                <div className="logo-container">
                    <img src={logo} className="app-logo" alt="logo" />
                    <a href="#" className="header-element" id="logo-text">
                        Ihor Kubrysh's Blog App
                    </a>
                </div>
                <nav>
                    <a href="#" className="nav-element">Home</a>
                    <a href="#" className="nav-element">✍️ New Article</a>  
                    <a href="#" className="nav-element">Username</a>
                </nav>
            </header>
            <main className="main-container">
                <section className="main-column">
                    <article>
                        <hr className="horiz-line"/>
                        <div className="post-meta-container">
                            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="John Doe's avatar" className="author-avatar"/>
                            <div className="author-date-container">
                                <h3 id="author-name">John Doe</h3>
                                <span className="post-date">November 2, 2021</span>
                            </div>
                            <div className="post-likes">
                                <button>❤️ 743</button>
                            </div>
                        </div>
                        <div>
                            <h2>Natural Language Interface Accessibility</h2>
                            <p className="post-text">Spoken interaction with mobile devices and consumer...</p>
                            <a href="#" id="read-more-lnk">Read more...</a>
                        </div>
                    </article>
                    <article>
                    <hr className="horiz-line"/>
                        <div className="post-meta-container">
                            <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="Marcia Sanders' avatar" className="author-avatar"/>
                            <div className="author-date-container">
                                <h3 id="author-name">Marcia Sanders</h3>
                                <span className="post-date">November 1, 2021</span>
                            </div>
                            <div className="post-likes">
                                <button>❤️ 956</button>
                            </div>
                        </div>
                        <div>
                            <h2>Accessibility of Remote Meetings</h2>
                            <p className="post-text">The impact of COVID-19 has seen a substancial increase...</p>
                            <a href="#" id="read-more-lnk">Read more...</a>
                        </div>
                    </article>
                </section>
                <aside className="aside-column">
                    <div className="sidebar-container">
                        <h2>Popular Tags</h2>
                        <p>No tags are here...yet</p>
                    </div>
                </aside>
            </main>
            <footer className="footer">
                <p>Made by <b>Ihor Kubrysh</b> for Intellias' JS Invaders Camp | 2021</p>
            </footer>
        </div>
    );
}

export default App;
