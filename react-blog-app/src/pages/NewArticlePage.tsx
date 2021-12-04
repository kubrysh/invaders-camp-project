import NewArticleForm from "../components/NewArticleForm";
import Sidebar from "../components/Sidebar";

const NewArticlePage = (props:any) => {
    return (
        <main className="main-container">
            <section className="main-column center-container">
                <h1>Add a New Article</h1>
                <NewArticleForm type="page"/>
            </section>
            <Sidebar />
        </main>
    )
}

export default NewArticlePage;
