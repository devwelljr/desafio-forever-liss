import styled from "styled-components";

export default styled.section`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 275px;
  width: 100%;

  #fixContainer {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 32px;
    margin-top: 31px;
    width: 100%;
  }

  #imgsContainer {
    margin-top: 10px;
  }

  .infoTitle {
    color: #345c7d;
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0px;
  }

  .fixFilters {
    color: #345c7d;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    margin: 0px;
  }

  .icon {
    height: 50px;
    width: 50px;
  }
`;
