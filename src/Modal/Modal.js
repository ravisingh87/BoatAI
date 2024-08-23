import React, { useState } from "react";
import {
  ModalButton,
  ModalButtonDiv,
  ModalContanierDiv,
  ModalDiv,
  ModalHeaderDiv,
  ModalTextAreaDiv,
} from "./Modal.styled";
import Img1 from "../assets/image 34.png";

const Modal = ({ isOpen, setIsOpen }) => {
  const [feedback, setFeedback] = useState("");
  const handleSubmit = () => {
    localStorage.setItem("feedback", feedback);
    setIsOpen((prev) => !prev);
  };

  return (
    <ModalDiv $isOpen={isOpen}>
      <ModalContanierDiv>
        <ModalHeaderDiv>
          <img src={Img1} alt='Idea' />
          <span>Provide Additional Feedback</span>
          <span onClick={() => setIsOpen((prev) => !prev)}>X</span>
        </ModalHeaderDiv>
        <ModalTextAreaDiv>
          <textarea
            value={feedback}
            rows={6}
            cols={85}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </ModalTextAreaDiv>
        <ModalButtonDiv>
          <ModalButton onClick={handleSubmit}>Submit</ModalButton>
        </ModalButtonDiv>
      </ModalContanierDiv>
    </ModalDiv>
  );
};

export default Modal;
