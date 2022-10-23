import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

import logo_full from "../../images/logo_full.png";
import bg from "../../images/bg.png";
import foreground from "../../images/bg_first.png";

// import KTFJermilovSolid from "../../fonts/KTFJermilov-Solid.ttf";

// const Container = styled.header`
//   position: relative;
// `;

// const Layers = styled.div`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// `;

// const LayerHeader = styled.div``;

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
`;

// const LogoText = styled.h1`
//   font: 48px/50px "KTFJermilov-Solid", sans-serif;
//   color: #fff;
//   width: 500px;
// `;

// const ParallaxBase = styled.div`
//   background-image: url(${bg});
//   height: 100vh;
//   width: 100%;
//   position: absolute;
//   background-size: cover;
//   background-repeat: no-repeat;
//   display: flex;
// `;

// const ParallaxLayer = styled.div`
//   // background-image: url(${bg_first});
//   height: 100vh;
//   width: 100%;
//   position: absolute;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   display: flex;
// `;

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
