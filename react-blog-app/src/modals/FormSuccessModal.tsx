const FormSuccessModal = ({ close }:any) => {
    return (
        <div className="popup-container">
            <header className="popup-header is-success">
                <h3>Submitted Successfully</h3>
                <button onClick={close} className="close-btn">❌</button>
            </header>
        </div>
    )
}

export default FormSuccessModal;
