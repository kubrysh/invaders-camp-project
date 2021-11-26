import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewArticleForm from "./components/NewArticleForm";
import FormSuccess from "./components/FormSuccess";
import ArticleMain from "./components/ArticleMain";

const App = () => {
    
    const [isNewArticleOpen, setIsNewArticleOpen] = useState(false);
    const [isNewArticleSubmitted, setIsNewArticleSubmitted] = useState(false);

    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/posts`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setPosts(result.posts);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, []);

    const DisplayArticles = () => {
        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return (
                <>
                    <ArticleMain {...posts[0]} />
                    <ArticleMain {...posts[1]} />
                </>
            )
        }
    }

    return (
        <div className="app">
            {
                isNewArticleOpen && !isNewArticleSubmitted &&
                <NewArticleForm
                    setOpenClosed={setIsNewArticleOpen}
                    setIsSubmitted={setIsNewArticleSubmitted}
                />
            }
            {
                isNewArticleSubmitted && !isNewArticleOpen &&
                <FormSuccess
                    setOpenClosed={setIsNewArticleSubmitted}
                />
            }
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
                    <DisplayArticles />
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
