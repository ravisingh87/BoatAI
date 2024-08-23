import React, { useEffect, useState } from "react";
import { HomeContainerDiv } from "./Home.styled";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showPastConversation, setShowPastConversation] = useState(false);
  const [pastConversation, setPastConversation] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let conversation = localStorage.getItem("message") || [];
    let conversationArr =
      conversation.length > 0 ? JSON.parse(conversation) : [];
    setPastConversation(conversationArr);
  }, []);

  return (
    <HomeContainerDiv>
      <Nav
        show={show}
        setShow={setShow}
        setIsOpen={setIsOpen}
        showPastConversation={showPastConversation}
        setShowPastConversation={setShowPastConversation}
      />
      <Main
        setShow={setShow}
        showPastConversation={showPastConversation}
        pastConversation={pastConversation}
      />
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </HomeContainerDiv>
  );
};

export default Home;
