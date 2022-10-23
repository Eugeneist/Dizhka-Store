import { Text, Heading, Box } from "@chakra-ui/react";
import { Header } from "../../components";
import styled from "styled-components";

import bg_about from "../../images/bg_about1.jpg";
import divider01 from "../../images/divider02.jpg";
import beer from "../../images/beer.jpg";

const SectionContainer = styled.section`
  padding: 45px 60px 25px 60px;
  background-image: url(${(props) => props.bgImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 80%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px 20px 15px;
`;

const Divider = styled.div`
  padding: 45px 60px 25px 60px;
  background-image: url(${(props) => props.bgImage});
  height: ${(props) => props.height};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: ${(props) => props.attach};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <SectionContainer bgImage={bg_about}>
        <SectionInner>
          <Box>
            <Heading fontFamily="'Montserrat', sans-serif" color="#fff" py={4}>
              Молода компанія - стародавні традиції!
            </Heading>
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontSize="md"
              color="#fff"
              paddingBottom="5px"
            >
              Виробляємо алкоголь ручної роботи, зберігаючи автентичність
              рецептури.
            </Text>
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontSize="md"
              color="#fff"
              paddingBottom="10px"
            >
              Компанія заснована у 2019 році.
            </Text>
          </Box>
        </SectionInner>
      </SectionContainer>
      <Divider bgImage={divider01} attach={"scroll"} height={"100vh"}></Divider>
      <Divider bgImage={beer} attach={"fixed"} height={"50vh"}>
        <Heading
          fontFamily="'Montserrat', sans-serif"
          fontSize="100px"
          color="#fff"
          py={4}
        >
          BEER
        </Heading>
      </Divider>
      <SectionContainer bgImage={bg_about}>
        <SectionInner>
          <Box></Box>
        </SectionInner>
      </SectionContainer>
    </>
  );
};

export default MainPage;
