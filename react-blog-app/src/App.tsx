import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import NewArticlePage from "./pages/NewArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewArticleModal from "./modals/NewArticleModal";
import FormSuccessModal from "./modals/FormSuccessModal";

const App = () => {

    const location = useLocation<any>();
    const background = location.state && location.state.background;

    return (
        <div className="app">
            <Header />

            {/* Routing */}
            <Switch location={ background || location }>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/newarticle" component={NewArticlePage} />
                <Route path="/article_:articleId" component={ArticlePage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>

            {background && background.pathname !== "/newarticle/success" && <Route exact path="/newarticle/success" children={
                <Modal>
                    <FormSuccessModal />
                </Modal>
            } />}

            {background && background.pathname !== "/newarticle" && <Route exact path="/newarticle" children={
                <Modal>
                    <NewArticleModal />
                </Modal>
            } />}

            <Footer />
        </div>
    );
}

export default App;
