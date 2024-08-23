import React, { useEffect, useState } from "react";
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
import moment from "moment";
import { BotMessage } from "../../sampleData";
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

const Main = ({ showPastConversation, pastConversation }) => {
  let timer = null;
  const [msgArr, setMsgArr] = useState([]);
  const [todayMsgArr, setTodayMsgArr] = useState([]);
  const [message, setMessage] = useState({
    msg: "",
    from: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    let data = {
      msg: value,
      from: "User",
      time: moment(new Date()).format("LT"),
      like: false,
      disLike: false,
    };
    if (e.key === "Enter") {
      setShowCard(true);
    }
    setMessage({ ...data });
  };

  const debounce = (fn, delay) => {
    if (timer) {
      clearTimeout(timer);
    }
    return (arg) => {
      timer = setTimeout(() => {
        fn(arg);
      }, delay);
    };
  };

  const handleAsk = () => {
    setMsgArr((prev) => [...prev, message]);
    setTodayMsgArr((prev) => [...prev, message]);
    let data = {
      msg: "",
      from: "User",
      time: moment(new Date()).format("LT"),
    };
    setMessage({ ...data });
    if (timer) {
      return clearTimeout(timer);
    }
    let timer = setTimeout(() => {
      handleBotResponse();
    }, 2000);
  };

  const handleBotResponse = () => {
    const botMsg = BotMessage.filter((item) => item.question === message.msg);
    let res = {
      msg: botMsg[0]?.response,
      from: "Bot Ai",
      time: moment(new Date()).format("LT"),
    };
    setMsgArr((prev) => [...prev, res]);
    setTodayMsgArr((prev) => [...prev, res]);
  };

  const handleSave = () => {
    let localPastConversation = localStorage.getItem("message") || [];
    let converPastConversation = JSON.parse(localPastConversation);
    if (converPastConversation.length > 0) {
      setMsgArr((prev) => [...prev, ...converPastConversation]);
      localStorage.setItem("message", JSON.stringify(msgArr));
    }
  };

  const handleOpinion = (idx, name) => {
    const filterData = msgArr.filter((item, id) => id === idx);
    filterData[0].like = name === "like";
    filterData[0].disLike = name === "disLike";
    msgArr.slice(idx, 1, filterData);
    setMsgArr([...msgArr]);
  };

  useEffect(() => {
    if (showPastConversation) {
      setMsgArr([...pastConversation]);
    } else {
      setMsgArr([...todayMsgArr]);
    }
  }, [showPastConversation]);

  return (
    <MainContainerDiv>
      <MainHeader>Bot AI</MainHeader>
      <MainSection>
        <MainSectionTitle>How Can I Help You Today?</MainSectionTitle>
        <MainSectionLogoDiv>
          <RiRobot2Fill size={100} />
        </MainSectionLogoDiv>
        <MainSectionTilesDiv>
          {msgArr.length < 1
            ? data.map((item, idx) => (
                <MainSectionTillesCard key={idx}>
                  <p>{item.msg}</p>
                  <p>{item.from}</p>
                </MainSectionTillesCard>
              ))
            : msgArr.map((item, idx) => (
                <Card
                  user={item.from}
                  message={item.msg}
                  time={item.time}
                  like={item?.like}
                  disLike={item?.disLike}
                  idx={idx}
                  key={idx}
                  handleOpinion={handleOpinion}
                />
              ))}
        </MainSectionTilesDiv>
        <MainSectionInputDiv>
          <input
            type='text'
            name='msg'
            onKeyDown={debounce((e) => handleChange(e), 1000)}
            onChange={debounce((e) => handleChange(e), 1000)}
          />
          <div>
            <button onClick={handleAsk}>Ask</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </MainSectionInputDiv>
      </MainSection>
    </MainContainerDiv>
  );
};

export default Main;
