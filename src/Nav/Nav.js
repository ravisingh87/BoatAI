import React, { useEffect, useState } from "react";
import {
  NavContainerDiv,
  NavHeaderSection,
  NavlButton,
  NavMenu,
  NavTextSpan,
} from "./Nav.styled";
import { TbEdit } from "react-icons/tb";
import { RiRobot2Fill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const Nav = ({ show, setShow }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    if (width < 850) {
      setShow(true);
    } else {
      setShow(false);
    }
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [width]);

  return (
    <>
      {show ? (
        <NavMenu>
          <MdMenu size={30} fill={"#9785BA"} onClick={() => setShow(!show)} />
        </NavMenu>
      ) : (
        <NavContainerDiv
          tabIndex={0}
          $show={show}
          $width={width}
          onBlur={() => setShow(!show)}
        >
          <NavHeaderSection>
            <RiRobot2Fill size={32} />
            <NavTextSpan>New Chat</NavTextSpan>
            <TbEdit size={24} cursor={"pointer"} />
          </NavHeaderSection>
          <NavlButton>Past Conversations</NavlButton>
        </NavContainerDiv>
      )}
    </>
  );
};

export default Nav;
