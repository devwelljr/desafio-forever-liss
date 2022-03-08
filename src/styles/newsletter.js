import styled from "styled-components";

export default styled.section`
  align-items: center;
  background-color: #f5717f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 187px;
  width: 100%;

  #inputHeader {
    border: white;
    border-radius: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-style: italic;
    line-height: 16, 41px;
    padding: 17px;
    text-align: initial;
    margin-top: 21px;
    max-height: 52px;
    width: 651px;
  }

  #infoTitle {
    color: #ffffff;
    font-family: Roboto;
    font-size: 22px;
    font-weight: bold;
    line-height: 26px;
    margin: 0px;
  }

  #infoSecond {
    color: #ffffff;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    margin: 0px;
  }

  #reponse {
    color: #ffffff;
    display: flexbox;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    justify-content: center;
    line-height: 18px;
    margin: 0px;
  }

  .btn {
    border-radius: 0px;
    background-color: white;
    color: #345c7d;
    min-height: 52px;
  }
`;
