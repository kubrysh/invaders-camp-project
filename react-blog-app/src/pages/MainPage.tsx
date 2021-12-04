import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";

const MainPage = (props:any) => {
    return(
        <main className="main-container">
            <section className="main-column">
                <Articles isNewArticleSubmitted={props.isNewArticleSubmitted} />
            </section>
            <Sidebar />
        </main>
    )
}

export default MainPage;
