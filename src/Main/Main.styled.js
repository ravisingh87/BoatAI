import styled from "styled-components";

export const MainContainerDiv = styled.div`
  width: 80%;
  background: ${(props) => props.theme.textColor.secondary.backgroundColor};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (max-width: 355px) {
    width: 100%;
  }
`;

export const MainHeader = styled.p`
  font-family: Ubuntu;
  font-size: 28px;
  font-weight: 700;
  line-height: 32.17px;
  color: ${(props) => props.theme.color.primary.violet};
  margin: 0;
  margin-top: -4px;

  @media screen and (max-width: 992px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
  @media screen and (max-width: 355px) {
    font-size: 18px;
  }
`;

export const MainSection = styled.div`
  margin-top: -4rem;
`;

export const MainSectionTitle = styled.p`
  margin: 0;
  font-family: Ubuntu;
  font-size: 28px;
  font-weight: 500;
  line-height: 32.17px;
  text-align: center;
  @media screen and (max-width: 992px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
  @media screen and (max-width: 355px) {
    font-size: 18px;
  }
`;

export const MainSectionTilesDiv = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  gap: 10px;
  margin-top: 5rem;
  overflow: auto;
`;
export const MainSectionTillesCard = styled.div`
  width: 500px;
  height: 111px;
  border-radius: 5px;
  background: ${(props) => props.theme.color.secondary.white};
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
  p {
    &:nth-child(1) {
      font-family: Ubuntu;
      font-size: 20px;
      font-weight: 700;
      line-height: 22.98px;
      text-align: left;
      @media screen and (max-width: 992px) {
        font-size: 17px;
      }
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
      @media screen and (max-width: 576px) {
        font-size: 14pxpx;
      }
      @media screen and (max-width: 355px) {
        font-size: 12px;
      }
    }
    &:nth-child(2) {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      text-align: left;
      color: #00000080;
    }
  }
  @media screen and (max-width: 992px) {
    width: 350px;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
  @media screen and (max-width: 576px) {
    width: 200px;
  }
  @media screen and (max-width: 355px) {
    width: 150px;
  }
`;

export const MainSectionInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-flow: wrap;
  margin-top: 4rem;
  input {
    width: 789px;
    height: 41px;
    border-radius: 5px;
    border: 1px;
    padding-left: 10px;
    @media screen and (max-width: 992px) {
      width: 350px;
    }
    @media screen and (max-width: 768px) {
      width: 250px;
    }
    @media screen and (max-width: 576px) {
      width: 230px;
    }
    @media screen and (max-width: 355px) {
      width: 150px;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 175px;
  }
  button {
    width: 73.82px;
    height: 41px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.secondary.lightPink};
    border: none;
  }
`;

export const MainSectionLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
