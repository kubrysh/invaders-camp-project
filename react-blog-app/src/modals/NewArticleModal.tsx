import { useState } from "react";
import { useHistory } from "react-router-dom";
import NewArticleForm from "../components/NewArticleForm";
import FormSuccessModal from "./FormSuccessModal";

const NewArticleModal = (props:any) => {

    const history = useHistory();
    const [isSuccess, setIsSuccess] = useState(false);

    const openSuccess = () => {
        setIsSuccess(true);
    };

    const goBack = () => {
        history.goBack();
    };

    const back = (e:any) => {
        e.stopPropagation();
        goBack();
    };

    return (
        <>
            {isSuccess ?
                    <FormSuccessModal close={goBack}/>
                :
                    <div className="popup-container">
                        <header className="popup-header">
                            <h3>Add a New Article</h3>
                            <button onClick={back} className="close-btn">❌</button>
                        </header>
                        <NewArticleForm openSuccess={openSuccess} onError={goBack} />
                    </div>
            }
        </>
    )
}

export default NewArticleModal;
