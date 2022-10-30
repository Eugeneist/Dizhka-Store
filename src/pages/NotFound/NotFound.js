import { Container, SectionInner } from "../../styles/Styles";
import { NavBar, Footer } from "../../components";

import error404 from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <Container
        bgImage={error404}
        style={{
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          backgroundSize: "40%",
          backgroundPosition: "center",
        }}
      >
        <SectionInner></SectionInner>
      </Container>
    </>
  );
};

export default NotFound;
