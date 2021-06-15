import "./App.css";
import { ThemeProvider } from "styled-components";
import HomePage from "./Components/Home";
import { GlobalStyle } from "./styles";
const theme = {
  mainColor: "white",
  backgroundColor: "#070C1C",
  secondaryColor: "#606986",
  fontFamily: "Roboto",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage></HomePage>
      </ThemeProvider>
    </div>
  );
}

export default App;
