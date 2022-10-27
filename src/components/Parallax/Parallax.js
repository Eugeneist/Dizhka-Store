import { ParallaxBanner } from "react-scroll-parallax";
import { Heading } from "@chakra-ui/react";
import "../../App.css";

import bg from "../../assets/images/bg.jpg";
import foreground from "../../assets/images/bg_front.png";

const Parallax = () => {
  return (
    <>
      <ParallaxBanner
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        layers={[
          { image: bg, speed: -10 },
          { image: foreground, speed: 10 },
          {
            speed: -15,
            children: (
              <Heading
                className="parallax__title"
                position="absolute"
                fontFamily="KTFJermilov, sans-serif"
                fontSize="6.25rem"
                fontWeight="normal"
                top="220px"
                right="50%"
                transform="translate(51%, 0)"
                cursor="pointer"
              >
                ДIZHKA
              </Heading>
            ),
          },
        ]}
        className="aspect-[2/1]"
      />
    </>
  );
};

export default Parallax;
