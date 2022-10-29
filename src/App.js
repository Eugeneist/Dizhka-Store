import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  StorePage,
  ContactPage,
  FavoritePage,
  CartPage,
} from "./pages";

function App() {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
