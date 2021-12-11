import { useHistory } from "react-router-dom";
import NewArticleForm from "../components/NewArticleForm";

const NewArticleModal = (props:any) => {

    const history = useHistory();

    const back = (e:any) => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div className="popup-container">
            <header className="popup-header">
                <h3>Add a New Article</h3>
                <button onClick={back} className="close-btn">❌</button>
            </header>
            <NewArticleForm type="modal"/>
        </div>
    )
}

export default NewArticleModal;
