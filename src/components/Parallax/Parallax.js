import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

import logo_full from "../../images/logo_full.png";
import bg from "../../images/bg.png";
import foreground from "../../images/bg_first.png";

const LayerLogo = styled.div`
  background-image: url(${logo_full});
  width: 328px;
  height: 79px;
  top: 220px;
  right: 38%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

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
            children: <LayerLogo />,
          },
        ]}
        className="aspect-[2/1]"
      />
    </>
  );
};

export default Parallax;
