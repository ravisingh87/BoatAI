import React, { useEffect, useState } from "react";
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
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const Card = ({ user, message, time, like, disLike, idx, handleOpinion }) => {
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
              value={like}
              onClick={() => handleOpinion(idx, "like")}
            >
              {like ? <BiSolidLike /> : <AiOutlineLike />}
            </CardUserLkeDisLikeSpan>
            <CardUserLkeDisLikeSpan
              key={"dislike"}
              name='disLike'
              value={disLike}
              onClick={() => handleOpinion(idx, "disLike")}
            >
              {disLike ? <BiSolidDislike /> : <AiOutlineDislike />}
            </CardUserLkeDisLikeSpan>
          </CardUserLikeDisLike>
        </CardUserTimeDetail>
      </CardUserDetailDiv>
    </CardContainer>
  );
};

export default Card;
