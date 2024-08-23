import styled from "styled-components";

export const CardContainer = styled.div`
  width: 83%;
  background: #d7c7f421;
  display: flex;
  align-self: end;
  gap: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  right: 2px;
  &:hover {
    .likeOrDislike {
      display: flex;
    }
  }
`;

export const CardUserLogoDiv = styled.div``;
export const CardUserDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CardUserTimeDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 9rem;
`;
export const CardUserLikeDisLike = styled.div`
  width: 50%;
  height: 16px;
  display: none;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const CardUserTitle = styled.p`
  margin: 0;
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.38px;
  text-align: left;
`;

export const CardUserTimeSlot = styled.p`
  width: 50%;
  margin: 0;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: left;
`;

export const CardUserMsg = styled.p`
  margin: 0;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: left;
`;

export const CardUserLogoSpan = styled.span`
  width: 5rem;
  display: block;
  height: 5rem;
  background: cadetblue;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardUserLkeDisLikeSpan = styled.span``;
