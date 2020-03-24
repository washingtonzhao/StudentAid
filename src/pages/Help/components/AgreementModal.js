import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const AgreementModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <ModalWrapper>
          <form class="popuptext">
            I agree that I will reach out to my school's network to provide or
            receive aid, but will not share the personal info of anyone
            requesting help beyond each document.
            <br />
            <label>
              <input type="radio" id="agree" name="privacy" value="agree" />I
              Agree
            </label>
            <label>
              <input
                type="radio"
                id="disagree"
                name="privacy"
                value="disagree"
              />
              I Disagree
            </label>
            <br /> <br />
            I agree that I will not accept contact-based resources if I am
            unsure of my health or level of exposure to COVID-19.
            <br />
            <label>
              <input type="radio" id="agree" name="health" value="agree" />I
              Agree
            </label>
            <label>
              <input
                type="radio"
                id="disagree"
                name="health"
                value="disagree"
              />
              I Disagree
            </label>
            <br /> <br />
            I accept all risk and responsibility in using these help resources
            and will hold any facilitator associated with this platform
            harmless.
            <br />
            <label>
              <input type="radio" id="agree" name="risk" value="agree" />I Agree
            </label>
            <label>
              <input type="radio" id="disagree" name="risk" value="disagree" />I
              Disagree
            </label>
            <br />
            <br />
            <span id="error"></span> <br />
            <input type="submit" value="submit" />
          </form>
        </ModalWrapper>
      </Modal>
    </div>
  );
};

export default AgreementModal;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ModalWrapper = styled.div`
  background-color: #555;
  color: #fff;
`;
