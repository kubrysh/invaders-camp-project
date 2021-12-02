import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import NewArticleForm from "./pages/NewArticleForm";
import FormSuccess from "./pages/FormSuccess";

const App = () => {

    const [isNewArticleOpen, setIsNewArticleOpen] = useState(false);
    const [isNewArticleSubmitted, setIsNewArticleSubmitted] = useState(false);

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
            <Header  setIsNewArticleOpen={setIsNewArticleOpen} />
            <MainPage isNewArticleSubmitted={isNewArticleSubmitted} />
            <Footer />
        </div>
    );
}

export default App;
