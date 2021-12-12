import { useHistory } from "react-router-dom";
import NewArticleForm from "../components/NewArticleForm";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import FormSuccessModal from "../modals/FormSuccessModal";

const NewArticlePage = ({ isSuccess, setIsSuccess }:any) => {

    const history = useHistory();

    const openSuccess = () => {
        setIsSuccess(true);
    };

    const goHome = () => {
        history.push("/");
        setIsSuccess(false);
    };

    const RenderSuccess = () => {
        return (
            <Modal>
                <FormSuccessModal close={goHome} />
            </Modal>
        );
    };

    return (
        <>
            {isSuccess && <RenderSuccess /> }
            <main className="main-container">
                <section className="main-column center-container">
                    <h1>Add a New Article</h1>
                    <NewArticleForm openSuccess={openSuccess} onError={goHome}/>
                </section>
                <Sidebar />
            </main>
        </>
    )
}

export default NewArticlePage;
