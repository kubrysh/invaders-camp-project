import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import "./components/NewArticleForm";
import NewArticleForm from "./components/NewArticleForm";

const App = () => {
    
    const [isNewArticleOpen, setIsNewArticleOpen] = useState(false);

    return (
        <div className="app">
            {isNewArticleOpen && <NewArticleForm setOpenClosed={setIsNewArticleOpen} />}
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
                    <a href="#" onClick={() => setIsNewArticleOpen(true)} className="nav-element">✍️ New Article</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" className="nav-element">Username</a>
                </nav>
            </header>
            <main className="main-container">
                <section className="main-column">
                    <article>
                        <hr className="horiz-line" />
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
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                            <a href="#" id="read-more-lnk">Read more...</a>
                        </div>
                    </article>
                    <article>
                    <hr className="horiz-line" />
                        <div className="post-meta-container">
                            <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="Marcia Sanders' avatar" className="author-avatar" />
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
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
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
                <p>Made by <strong>Ihor Kubrysh</strong> for Intellias' JS Invaders Camp | 2021</p>
            </footer>
        </div>
    );
}

export default App;
