import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import NewArticlePage from "./pages/NewArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewArticleModal from "./modals/NewArticleModal";

const App = () => {

    const location = useLocation<any>();
    const background = location.state && location.state.background;

    return (
        <div className="app">
            <Header />

            {/* Routing */}
            <Switch location={ background || location }>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/articles/new" component={NewArticlePage} />
                <Route exact path="/articles/:articleId" component={ArticlePage} />
                <Route exact path="/404" component={NotFoundPage} />
                <Redirect from="*" to="/404"/>
            </Switch>

            {background && background.pathname !== "/articles/new" && 
                <Route exact path="/articles/new" children={
                    <Modal>
                        <NewArticleModal />
                    </Modal>
                } />
            }

            <Footer />
        </div>
    );
}

export default App;
