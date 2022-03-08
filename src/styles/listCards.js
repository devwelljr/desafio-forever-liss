import styled from "styled-components";

export default styled.div`
  align-items: center;
  background-color: #f7b094;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 29px;
  max-width: 100%;

  .list {
    display: flex;
    justify-content: space-evenly;
    margin: 29px;
    width: 100%;
  }

  .firstPart {
    color: #ffffff;
    display: flex;
    font-family: Roboto;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    justify-content: center;
    max-width: 40%;
  }

  .secondPart {
    border-bottom: 5px solid #F5717F;
    color: #345c7d;
    font-family: Roboto;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    margin-left: 4px;
    text-align: left;
  }
`;
