import { Container, SectionInner, LoaderImage } from "../../styles/Styles";

import loading_image from "../../assets/images/loader.png";

const Loader = () => {
  return (
    <>
      <Container
        style={{ height: "100vh", backgroundColor: "#000", color: "#fff" }}
      >
        <SectionInner style={{ alignItems: "center" }}>
          <LoaderImage src={loading_image} />
        </SectionInner>
      </Container>
    </>
  );
};

export default Loader;
