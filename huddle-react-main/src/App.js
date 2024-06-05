import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Container } from "./components/styles/Container.styles";
import { GlobalStyles } from "./components/styles/Global.styled";
import content from "./content";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

const theme = {
  colors: {
    body: "#fff",
    text: "#333",
    link: "#222",
    header: "#ebfbff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
