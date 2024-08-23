import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 1;
`;

export const ModalContanierDiv = styled.div`
  width: 50%;
  height: 45vh;
  background: #faf7ff;
  position: absolute;
  top: 30%;
  left: 30%;
  border-radius: 10px;
`;

export const ModalHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: Open Sans;
  font-size: 22px;
  font-weight: 400;
  line-height: 29.96px;
  span:nth-child(3) {
    font-family: Ubuntu;
    font-size: 28px;
    font-weight: 500;
    line-height: 32.17px;
    cursor: pointer;
  }
`;
export const ModalTextAreaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  textarea {
    width: 94%;
  }
`;
export const ModalButtonDiv = styled.div`
  text-align: end;
  padding: 1.5rem;
`;

export const ModalButton = styled.button`
  width: 157px;
  height: 50px;
  border-radius: 5px;
  background: #d7c7f4;
  border: none;
`;
