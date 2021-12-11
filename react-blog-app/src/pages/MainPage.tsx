import Articles from "../components/Articles";
import Sidebar from "../components/Sidebar";

const MainPage = () => {
    return(
        <main className="main-container">
            <section className="main-column">
                <Articles />
            </section>
            <Sidebar />
        </main>
    )
}

export default MainPage;
