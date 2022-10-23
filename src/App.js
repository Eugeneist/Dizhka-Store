import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { MainPage } from "./pages";
// import { Header } from "./components";

import Fonts from "./Fonts.js";

const theme = extendTheme({
  fonts: {
    heading: `'KTFJermilov-Solid', sans-serif`,
    body: `'KTFJermilov-Solid', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ParallaxProvider>
        <MainPage />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
