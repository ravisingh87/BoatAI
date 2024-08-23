import React, { useEffect, useState } from "react";
import { HomeContainerDiv } from "./Home.styled";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showPastConversation, setShowPastConversation] = useState(false);
  const [pastConversation, setPastConversation] = useState([]);
  useEffect(() => {
    let conversation = localStorage.getItem("message");
    let conversationArr = JSON.parse(conversation);
    setPastConversation(conversationArr);
  }, []);

  return (
    <HomeContainerDiv>
      <Nav
        show={show}
        setShow={setShow}
        showPastConversation={showPastConversation}
        setShowPastConversation={setShowPastConversation}
      />
      <Main
        setShow={setShow}
        showPastConversation={showPastConversation}
        pastConversation={pastConversation}
      />
    </HomeContainerDiv>
  );
};

export default Home;
