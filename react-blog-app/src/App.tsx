import React, { useMemo } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { baseTheme } from "./components/UI/Theme";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import NewArticlePage from "./pages/NewArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewArticleModal from "./modals/NewArticleModal";

const App = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const location = useLocation<any>();
    const background = location.state && location.state.background;

    const theme = useMemo(
        () =>
            createTheme({
                ...baseTheme,
                ...(prefersDarkMode
                    ? {
                          palette: {
                              mode: "dark",
                              primary: {
                                  main: "#8dcdff"
                              },
                              secondary: {
                                  main: "#8d95ff"
                              }
                          }
                      }
                    : {
                          palette: {
                              mode: "light",
                              primary: {
                                  main: "#7eb8e5"
                              },
                              secondary: {
                                  main: "#7e86e5"
                              }
                          }
                      })
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <Header />

                {/* Routing */}
                <Switch location={background || location}>
                    <Route exact path="/" component={MainPage} />
                    <Route
                        exact
                        path="/articles/new"
                        component={NewArticlePage}
                    />
                    <Route
                        exact
                        path="/articles/:articleId"
                        component={ArticlePage}
                    />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Redirect from="*" to="/404" />
                </Switch>

                {background && background.pathname !== "/articles/new" && (
                    <Route
                        exact
                        path="/articles/new"
                        children={
                            <Modal>
                                <NewArticleModal />
                            </Modal>
                        }
                    />
                )}

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
