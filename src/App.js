import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
// import { MainPage } from "./pages/MainPage";
import { Header } from "./components";

function App() {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
