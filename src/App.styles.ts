import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const GlobalStyle = createGlobalStyle`
  body {
    background:#121214;
  }
`;

export const Container = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 22px;
  top: 10px;
`;
