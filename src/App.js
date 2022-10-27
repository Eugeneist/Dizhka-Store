import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
// import { Product } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <HomePage />
        {/* <Product /> */}
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
