import { useHistory } from "react-router-dom";

const FormSuccessModal = (props:any) => {

    const history:any = useHistory();

    const back = (e:any) => {
        e.stopPropagation();
        if (history.location.state.background.pathname === "/newarticle") {
            history.push("/");
        } else {
            history.go(-2);
        }
      };

    return (
        <div className="popup-container">
            <header className="popup-header is-success">
                <h3>Submitted Successfully</h3>
                <button onClick={back} className="close-btn">❌</button>
            </header>
        </div>
    )
}

export default FormSuccessModal;
