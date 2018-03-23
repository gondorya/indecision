import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleAccept}
        contentLabel="SelectdOption"
        closeTimeoutMS={100}
        className="modal"
    >
        <div className="overlay">
            <h3 className="overlay__title">Selected Option</h3>
            {props.selectedOption && <p className="overlay__option">{props.selectedOption}</p>}
            <button 
                className="cta cta--large" 
                onClick={props.handleAccept}>OK</button>
        </div>
    </Modal>
);

export default OptionModal;