import styled from "styled-components";

export const NavContainerDiv = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.color.secondary.white};
  display: ${(props) => (props.$show ? "none" : "flex")};
  align-items: center;
  flex-direction: column;
  gap: 15px;
  z-index: 1;
  position: ${(props) => (props.$width < 850 ? "absolute" : "relative")};
  height: 100vh;

  @media screen and (max-width: 992px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 30%;
  }
  @media screen and (max-width: 576px) {
    width: 50%;
  }
  @media screen and (max-width: 355px) {
    width: 90%;
  }
`;

export const NavHeaderSection = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.color.secondary.lightPink};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1px;
  padding: 10px;
`;

export const NavTextSpan = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 22.98px;
  cursor: pointer;
`;

export const NavlButton = styled.button`
  max-width: 184px;
  min-height: 40px;
  border-radius: 10px;
  border: none;
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.38px;
  padding: 15px;
  background: ${(props) => props.theme.color.secondary.lightPink};
`;

export const NavMenu = styled.div`
  svg {
    margin-top: 12px;
  }
`;
