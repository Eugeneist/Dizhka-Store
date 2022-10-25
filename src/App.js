import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HomePage } from "./pages";

function App() {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
