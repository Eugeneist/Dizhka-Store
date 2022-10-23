import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

import logo from "../../images/logo.png";
import bg from "../../images/bg.png";
import foreground from "../../images/bg_first.png";

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

const LayerLogo = styled.div`\
background-image: url(${logo});
width: 100px;
height: 103px;
top: 220px;
right: 46%;
position: absolute;
background-size: cover;
background-repeat: no-repeat;
`;

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
        }}
        layers={[
          { image: bg, speed: -10 },
          {
            speed: -15,
            children: <LayerLogo />,
          },
          { image: foreground, speed: 10 },
        ]}
        className="aspect-[2/1]"
      />
    </>
  );
};

export default Parallax;
