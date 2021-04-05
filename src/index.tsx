import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./App.styles";

import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>,

  document.getElementById("root")
);
