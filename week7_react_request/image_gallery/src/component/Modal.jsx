import React from "react"
import {ReactComponent as CloseIcon} from "../asset/material-symbols-light_close-small-outline-rounded.svg"
import '../style/Modal.css';

export default function Modal({alert_text, button_text, handleModalCloseClick, handleModalButtonClick, handleModalCancleClick}) {
    function onCloseClick(e) {
        handleModalCloseClick(e);
    }
    
    function onButtonClick(e) {
        handleModalButtonClick(e);
    }

    function onCancleClick(e) {
        handleModalCancleClick(e);
    }

    return (
        <div className="modal">
            <div className="modal-inner-field">
                <div className="modal-close" onClick={onCloseClick}><CloseIcon /></div>
                <div className="modal-alert-field">
                    <span className="modal-alert-text">{alert_text}</span>
                    <div className="modal-button-field">
                        <button className="modal-ok-button" type="button" onClick={onButtonClick} value={button_text}>
                            {button_text}
                        </button>
                        <button className="modal-cancle-button" type="button" onClick={onCancleClick} value="cancle">
                            CANCLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}