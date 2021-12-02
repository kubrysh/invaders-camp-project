import "./NewArticleForm.css";

const FormSuccess = (props:any) => {
    return (
        <div className="popup-background">
            <div className="popup-container">
                <header className="popup-header is-success">
                    <h3>Submitted Successfully</h3>
                    <button className="close-btn" onClick={() => props.setOpenClosed(false)}>❌</button>
                </header>
            </div>
        </div>
    )
}

export default FormSuccess;
