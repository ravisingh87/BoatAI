import React, { useState } from "react";
import {
  CardContainer,
  CardUserDetailDiv,
  CardUserLikeDisLike,
  CardUserLkeDisLikeSpan,
  CardUserLogoDiv,
  CardUserLogoSpan,
  CardUserMsg,
  CardUserTimeDetail,
  CardUserTimeSlot,
  CardUserTitle,
} from "./Card.styled";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";

const Card = ({ user, message, time }) => {
  const [opinion, setOpinion] = useState({
    like: false,
    disLike: false,
  });
  const handleOpinion = (name) => {
    if (name === "like") {
      setOpinion({ like: true, disLike: false });
    } else {
      setOpinion({ like: false, disLike: true });
    }
  };

  return (
    <CardContainer>
      <CardUserLogoDiv>
        <CardUserLogoSpan>
          {user === "Bot Ai" ? (
            <RiRobot2Fill size={35} />
          ) : (
            <FaUserLarge size={35} />
          )}
        </CardUserLogoSpan>
      </CardUserLogoDiv>
      <CardUserDetailDiv>
        <CardUserTitle>{user}</CardUserTitle>
        <CardUserMsg>{message}</CardUserMsg>
        <CardUserTimeDetail>
          <CardUserTimeSlot>{time}</CardUserTimeSlot>
          <CardUserLikeDisLike className='likeOrDislike'>
            <CardUserLkeDisLikeSpan
              key={"like"}
              name='like'
              value={opinion.like}
              onClick={() => handleOpinion("like")}
            >
              <AiOutlineDislike />
            </CardUserLkeDisLikeSpan>
            <CardUserLkeDisLikeSpan
              key={"dislike"}
              name='disLike'
              value={opinion.disLike}
              onClick={() => handleOpinion("disLike")}
            >
              <AiOutlineLike />
            </CardUserLkeDisLikeSpan>
          </CardUserLikeDisLike>
        </CardUserTimeDetail>
      </CardUserDetailDiv>
    </CardContainer>
  );
};

export default Card;
