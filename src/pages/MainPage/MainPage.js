import { Text, Heading, Box, Grid, Flex } from "@chakra-ui/react";
import { Header } from "../../components";
import "../../App.css";
import styled from "styled-components";

import bg_about from "../../images/bg_about1.jpg";
import divider01 from "../../images/divider02.jpg";
import beer from "../../images/beer.jpg";
import bg_beer from "../../images/bg_beer.jpg";
import gin from "../../images/gin.jpg";
import bg_gin from "../../images/bg_gin.jpg";
import whiskey from "../../images/whiskey.jpg";
import bg_whiskey from "../../images/bg_whiskey.jpg";
import vodka from "../../images/vodka.jpg";
import bg_vodka from "../../images/bg_vodka.jpg";

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

const Logo = styled.a`
  display: block;
  width: 146px;
  height: 149px;
  background-position: 50% 50%;
  background-size: 146px 149px;
  background-repeat: no-repeat;
  cursor: pointer;
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
      <SectionContainer style={{ padding: "0px" }} bgImage={bg_beer}>
        <SectionInner
          style={{ padding: "0px", margin: "0px", maxWidth: "none" }}
        >
          <Grid height={"100vh"} width={"100%"} templateRows="repeat(3, 1fr)">
            <Flex>
              <Flex
                className="product__btn"
                bgColor={"rgb(0,0,0)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  Український світлий ель
                </Text>
              </Flex>
              <Box bgColor={"rgba(255,255,255,0.5)"} width={"30%"}></Box>
              <Flex
                bgColor={"#000"}
                width={"10%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="6xl"
                >
                  Три
                </Text>
              </Flex>
              <Flex
                bgColor={"transparent"}
                width={"20%"}
                align={"center"}
                justify={"end"}
                direction={"column"}
                color="#000"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="5xl"
                >
                  Види
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="5xl"
                >
                  Нашого
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                align={"center"}
                justify={"center"}
                bgColor={"#f88654"}
                width={"10%"}
              >
                <Logo>
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="146px"
                    height="149px"
                    version="1.1"
                    viewBox="0 0 21000 29700"
                  >
                    <defs></defs>
                    <g id="Слой_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <polygon
                        className="logo_1"
                        fill="white"
                        class="fil0"
                        points="12345.87,20762.9 17107,20762.9 17107,3666.84 12345.87,3666.84 "
                      />
                      <polygon
                        className="logo_2"
                        fill="white"
                        class="fil0"
                        points="5475.79,3665.87 2893.91,21560.83 1450.21,21560.83 1450.21,26034.56 7074.11,26034.56 7680.27,21563.39 9597.82,8140.57 11547.02,8139.6 11547.02,3665.87 "
                      />
                      <polygon
                        className="logo_3"
                        fill="white"
                        class="fil0"
                        points="8479.42,21561.8 7872.36,26035.19 19503.56,26035.19 19535.52,21561.8 "
                      />
                    </g>
                  </svg>
                </Logo>
              </Flex>
              <Box bgColor={"rgba(255,255,255,0.5)"} width={"30%"}></Box>
              <Flex
                className="product__btn"
                bgColor={"rgb(248,134,84)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  Харківський портер
                </Text>
              </Flex>
              <Flex
                bgColor={"transparent"}
                width={"20%"}
                align={"center"}
                justify={"start"}
                direction={"column"}
                color="#000"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="5xl"
                >
                  кращого
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="5xl"
                >
                  пива
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                className="product__btn"
                bgColor={"rgb(0,0,0)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  Пшеничний ель
                </Text>
              </Flex>
              <Box bgColor={"rgba(255,255,255)"} width={"40%"}></Box>
              <Box bgColor={"rgba(0,0,0,0.5)"} width={"20%"}></Box>
            </Flex>
          </Grid>
        </SectionInner>
      </SectionContainer>
      <Divider bgImage={gin} attach={"fixed"} height={"50vh"}>
        <Heading
          fontFamily="'Montserrat', sans-serif"
          fontSize="100px"
          color="#fff"
          textTransform={"uppercase"}
          py={4}
        >
          GIN
        </Heading>
      </Divider>
      <SectionContainer style={{ padding: "0px" }} bgImage={bg_gin}>
        <SectionInner
          style={{ padding: "0px", margin: "0px", maxWidth: "none" }}
        >
          <Grid height={"100vh"} width={"100%"} templateRows="repeat(3, 1fr)">
            <Flex>
              <Flex
                bgColor={"transparent"}
                width={"20%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              ></Flex>
              <Box bgColor={"#000"} width={"10%"}></Box>
              <Flex
                bgColor={"rgba(255,255,255,0.5)"}
                width={"30%"}
                align={"center"}
                justify={"center"}
                color="#000"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  традиційний
                </Text>
              </Flex>
              <Flex
                // className="product__btn"
                bgColor={"rgba(0,0,0,0.5)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  сухий
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                align={"center"}
                justify={"center"}
                bgColor={"transparent"}
                width={"20%"}
              ></Flex>
              <Flex
                className="product__btn"
                align={"center"}
                justify={"center"}
                bgColor={"rgb(0,0,0)"}
                width={"40%"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="6xl"
                >
                  ДЖИН
                </Text>
              </Flex>
              <Flex
                bgColor={"rgba(255,255,255,0.5)"}
                width={"30%"}
                align={"center"}
                justify={"center"}
                direction={"column"}
                color="#000"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  ТА
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  дуже
                </Text>
              </Flex>
              <Flex
                bgColor={"#000"}
                width={"10%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Logo>
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="146px"
                    height="149px"
                    version="1.1"
                    viewBox="0 0 21000 29700"
                  >
                    <defs></defs>
                    <g id="Слой_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <polygon
                        className="logo_1"
                        fill="white"
                        class="fil0"
                        points="12345.87,20762.9 17107,20762.9 17107,3666.84 12345.87,3666.84 "
                      />
                      <polygon
                        className="logo_2"
                        fill="white"
                        class="fil0"
                        points="5475.79,3665.87 2893.91,21560.83 1450.21,21560.83 1450.21,26034.56 7074.11,26034.56 7680.27,21563.39 9597.82,8140.57 11547.02,8139.6 11547.02,3665.87 "
                      />
                      <polygon
                        className="logo_3"
                        fill="white"
                        class="fil0"
                        points="8479.42,21561.8 7872.36,26035.19 19503.56,26035.19 19535.52,21561.8 "
                      />
                    </g>
                  </svg>
                </Logo>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                bgColor={"rgba(255,255,255,0.5)"}
                width={"20%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              ></Flex>
              <Box bgColor={"rgb(0,0,0)"} width={"40%"}></Box>
              <Flex
                // className="product__btn"
                bgColor={"rgba(0,0,0,0.5)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  освіжаючий
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </SectionInner>
      </SectionContainer>
      <Divider bgImage={whiskey} attach={"fixed"} height={"50vh"}>
        <Heading
          fontFamily="'Montserrat', sans-serif"
          fontSize="100px"
          color="#fff"
          textTransform={"uppercase"}
          py={4}
        >
          Whiskey
        </Heading>
      </Divider>
      <SectionContainer style={{ padding: "0px" }} bgImage={bg_whiskey}>
        <SectionInner
          style={{ padding: "0px", margin: "0px", maxWidth: "none" }}
        >
          <Grid height={"100vh"} width={"100%"} templateRows="repeat(3, 1fr)">
            <Flex>
              <Flex
                // className="product__btn"
                bgColor={"rgba(0,0,0,0.5)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  надійний
                </Text>
              </Flex>
              <Box bgColor={"rgba(255,255,255,0.5)"} width={"30%"}></Box>
              <Flex
                bgColor={"#000"}
                width={"10%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              ></Flex>
              <Flex
                bgColor={"transparent"}
                width={"20%"}
                align={"center"}
                justify={"end"}
                direction={"column"}
                color="#000"
              ></Flex>
            </Flex>
            <Flex>
              <Flex
                align={"center"}
                justify={"center"}
                bgColor={"#f88654"}
                width={"10%"}
              >
                <Logo>
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="146px"
                    height="149px"
                    version="1.1"
                    viewBox="0 0 21000 29700"
                  >
                    <defs></defs>
                    <g id="Слой_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <polygon
                        className="logo_1"
                        fill="white"
                        class="fil0"
                        points="12345.87,20762.9 17107,20762.9 17107,3666.84 12345.87,3666.84 "
                      />
                      <polygon
                        className="logo_2"
                        fill="white"
                        class="fil0"
                        points="5475.79,3665.87 2893.91,21560.83 1450.21,21560.83 1450.21,26034.56 7074.11,26034.56 7680.27,21563.39 9597.82,8140.57 11547.02,8139.6 11547.02,3665.87 "
                      />
                      <polygon
                        className="logo_3"
                        fill="white"
                        class="fil0"
                        points="8479.42,21561.8 7872.36,26035.19 19503.56,26035.19 19535.52,21561.8 "
                      />
                    </g>
                  </svg>
                </Logo>
              </Flex>
              <Flex
                align={"center"}
                justify={"center"}
                bgColor={"rgba(255,255,255,0.5)"}
                width={"30%"}
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  витриманий
                </Text>
              </Flex>
              <Flex
                className="product__btn"
                bgColor={"rgb(248,134,84)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  Односолодовий віскі
                </Text>
              </Flex>
              <Flex
                bgColor={"transparent"}
                width={"20%"}
                align={"center"}
                justify={"start"}
                direction={"column"}
                color="#000"
              ></Flex>
            </Flex>
            <Flex>
              <Flex
                // className="product__btn"
                bgColor={"rgba(0,0,0,0.5)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              ></Flex>
              <Flex
                align={"center"}
                justify={"center"}
                direction={"column"}
                color="#000"
                bgColor={"rgba(255,255,255)"}
                width={"40%"}
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  немов
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  старий друг
                </Text>
              </Flex>
              <Box bgColor={"rgba(0,0,0,0.5)"} width={"20%"}></Box>
            </Flex>
          </Grid>
        </SectionInner>
      </SectionContainer>
      <Divider bgImage={vodka} attach={"fixed"} height={"50vh"}>
        <Heading
          fontFamily="'Montserrat', sans-serif"
          fontSize="100px"
          color="#fff"
          py={4}
        >
          GORILKA
        </Heading>
      </Divider>
      <SectionContainer style={{ padding: "0px" }} bgImage={bg_vodka}>
        <SectionInner
          style={{ padding: "0px", margin: "0px", maxWidth: "none" }}
        >
          <Grid height={"100vh"} width={"100%"} templateRows="repeat(3, 1fr)">
            <Flex>
              <Flex
                bgColor={"transparent"}
                width={"20%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              ></Flex>
              <Box bgColor={"#000"} width={"10%"}></Box>
              <Flex
                bgColor={"rgba(255,255,255,0.5)"}
                width={"30%"}
                align={"center"}
                justify={"center"}
                color="#000"
              ></Flex>
              <Flex
                // className="product__btn"
                bgColor={"rgba(0,0,0,0.5)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  класична
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                align={"center"}
                justify={"center"}
                bgColor={"transparent"}
                width={"20%"}
              ></Flex>
              <Flex
                className="product__btn"
                align={"center"}
                justify={"center"}
                bgColor={"rgb(0,0,0)"}
                width={"40%"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="6xl"
                >
                  Горілка
                </Text>
              </Flex>
              <Flex
                bgColor={"rgba(255,255,255,0.5)"}
                width={"30%"}
                align={"center"}
                justify={"center"}
                direction={"column"}
                color="#000"
              ></Flex>
              <Flex
                bgColor={"#000"}
                width={"10%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              >
                <Logo>
                  <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="146px"
                    height="149px"
                    version="1.1"
                    viewBox="0 0 21000 29700"
                  >
                    <defs></defs>
                    <g id="Слой_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <polygon
                        className="logo_1"
                        fill="white"
                        class="fil0"
                        points="12345.87,20762.9 17107,20762.9 17107,3666.84 12345.87,3666.84 "
                      />
                      <polygon
                        className="logo_2"
                        fill="white"
                        class="fil0"
                        points="5475.79,3665.87 2893.91,21560.83 1450.21,21560.83 1450.21,26034.56 7074.11,26034.56 7680.27,21563.39 9597.82,8140.57 11547.02,8139.6 11547.02,3665.87 "
                      />
                      <polygon
                        className="logo_3"
                        fill="white"
                        class="fil0"
                        points="8479.42,21561.8 7872.36,26035.19 19503.56,26035.19 19535.52,21561.8 "
                      />
                    </g>
                  </svg>
                </Logo>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                bgColor={"rgba(255,255,255,0.5)"}
                width={"20%"}
                align={"center"}
                justify={"center"}
                color="#fff"
              ></Flex>
              <Box bgColor={"rgb(0,0,0)"} width={"40%"}></Box>
              <Flex
                // className="product__btn"
                bgColor={"rgba(0,0,0,0.5)"}
                width={"40%"}
                align={"center"}
                justify={"center"}
                direction={"column"}
                color="#fff"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  без зайвих
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="4xl"
                >
                  слів
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </SectionInner>
      </SectionContainer>
    </>
  );
};

export default MainPage;
