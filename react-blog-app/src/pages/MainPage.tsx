import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";

const MainPage = ({ updateArticles }:any) => {
    return(
        <main className="main-container">
            <section className="main-column">
                <Articles updateArticles={ updateArticles } />
            </section>
            <Sidebar />
        </main>
    )
}

export default MainPage;
