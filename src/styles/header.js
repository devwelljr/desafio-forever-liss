import styled from "styled-components";

export default styled.header`
  align-items: center;
  background-color: #f7b094;
  display: flex;
  justify-content: space-evenly;
  padding: 29px;
  max-width: 100%;
  min-height: 104px;
  min-width: 100%;

  #inputHeader {
    border: white;
    border-radius: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-style: italic;
    line-height: 16,41px;
    padding: 17px;
    text-align: initial;
    max-height: 52px;
    width: 651px;
  }

  #linksContainer {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;
  }

  #linksContainer a {
    text-align: center;
  }

  .linkHeader {
    color: white;
    font-size: 10px;
    font-weight: bold;
    line-height: 12px;
    text-decoration: none;
  }

  .btn {
    border-radius: 0px;
    background-color: #ffffff;
    color: #345C7D;
    min-height: 52px;
    max-height: 52px;
  }
`;
