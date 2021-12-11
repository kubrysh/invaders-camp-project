import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot:any = document.getElementById("modal-root");

const Modal = ({ children }:any) => {

    const element = document.createElement("div");
    element.setAttribute("class", "popup-background");

    useEffect(() => {
        modalRoot.appendChild(element);

        return () => {
        modalRoot.removeChild(element);
        };
    }, [element]);

    return (
        createPortal(children, element)
    );
}

export default Modal;
