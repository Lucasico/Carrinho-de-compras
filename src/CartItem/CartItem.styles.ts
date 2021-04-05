import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #8563e5;
  border-top: 1px solid #8563e5;
  padding-top: 5px;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
