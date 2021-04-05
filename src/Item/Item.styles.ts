import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  height: 100%;
  background: #212025;
  button {
    font-weight: bold;
    color: white;
    border-radius: 0 0 10px 10px;
    background: #8563e5;
  }
  button:hover {
    background: #2e264b;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  div {
    color: white;
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
