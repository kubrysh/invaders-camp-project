import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Article from "../components/Article";

const ArticlePage = (props:any) => {

    const { articleId } = useParams<{articleId: string}>();

    return(
        <main className="main-container">
            <Article id={articleId} />
            <Sidebar />
        </main>
    )
}

export default ArticlePage;
