import React from "react";
import {
  MainContainerDiv,
  MainHeader,
  MainSection,
  MainSectionInputDiv,
  MainSectionLogoDiv,
  MainSectionTilesDiv,
  MainSectionTillesCard,
  MainSectionTitle,
} from "./Main.styled";
import { RiRobot2Fill } from "react-icons/ri";
import Card from "../Card/Card";
const data = [
  {
    msg: "Hi, what is the weather",
    from: "Get immediate AI generated response",
  },
  {
    msg: "Hi, what is my location",
    from: "Get immediate AI generated response",
  },
  {
    msg: "Hi, what is the temperature",
    from: "Get immediate AI generated response",
  },
  {
    msg: "Hi, how are you",
    from: "Get immediate AI generated response",
  },
];

const Main = ({ setShow }) => {
  return (
    <MainContainerDiv>
      <MainHeader>Bot AI</MainHeader>
      <MainSection>
        <MainSectionTitle>How Can I Help You Today?</MainSectionTitle>
        <MainSectionLogoDiv>
          <RiRobot2Fill size={100} />
        </MainSectionLogoDiv>
        <MainSectionTilesDiv>
          {data.map((item, idx) => (
            <MainSectionTillesCard key={idx}>
              <p>{item.msg}</p>
              <p>{item.from}</p>
            </MainSectionTillesCard>
          ))}
        </MainSectionTilesDiv>
        {/* <Card /> */}
        <MainSectionInputDiv>
          <input type='text' />
          <div>
            <button>Ask</button>
            <button>Save</button>
          </div>
        </MainSectionInputDiv>
      </MainSection>
    </MainContainerDiv>
  );
};

export default Main;
