import React, { useState } from "react";
import { HomeContainerDiv } from "./Home.styled";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <HomeContainerDiv>
      <Nav show={show} setShow={setShow} />
      <Main setShow={setShow} />
    </HomeContainerDiv>
  );
};

export default Home;
