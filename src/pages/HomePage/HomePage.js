import { useState, useEffect } from "react";
import { Text, Heading, Box, Grid, Flex, Button } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Form, Header, Footer, Logo, Loader } from "../../components";
import "../../App.css";
import {
  Container,
  SectionContainer,
  SectionInner,
  Divider,
} from "../../styles/Styles";
import { useDispatch } from "react-redux";
import { addToProducts } from "../../actions/productsActions";
import { axios } from "../../helpers";

import bg_about from "../../assets/images/bg_about.jpg";
import divider01 from "../../assets/images/divider02.jpg";
import divider_tablet from "../../assets/images/divider_tablet.jpg";
import beer from "../../assets/images/beer.jpg";
import bg_beer from "../../assets/images/bg_beer.jpg";
import gin from "../../assets/images/gin.jpg";
import bg_gin from "../../assets/images/bg_gin.jpg";
import whiskey from "../../assets/images/whiskey.jpg";
import bg_whiskey from "../../assets/images/bg_whiskey.jpg";
import vodka from "../../assets/images/vodka.jpg";
import bg_vodka from "../../assets/images/bg_vodka.jpg";

const HomePage = () => {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/products`)
      .then((data) => {
        // setProducts((prevProducts) => [...prevProducts, ...data]);
        dispatch(addToProducts(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const [tablet, setTablet] = useState(false);

  const availableScreenWidth = window.screen.availWidth;

  useEffect(() => {
    if (availableScreenWidth < 830) {
      setTablet(true);
    }
  }, [availableScreenWidth]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Container
        style={{ height: "100vh", backgroundColor: "#000", color: "#fff" }}
      >
        <SectionInner>Error!</SectionInner>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <SectionContainer bgImage={bg_about}>
        <SectionInner>
          <Box>
            <Heading fontFamily="KTFJermilov, sans-serif" color="#fff" py={4}>
              Молода компанія - стародавні традиції!
            </Heading>
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontSize="1rem"
              color="#fff"
              paddingBottom="0,3125rem"
            >
              Виробляємо алкоголь ручної роботи, зберігаючи автентичність
              рецептури.
            </Text>
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontSize="1rem"
              color="#fff"
              paddingBottom="0,625rem"
            >
              Компанія заснована у 2019 році.
            </Text>
          </Box>
        </SectionInner>
      </SectionContainer>
      {tablet ? (
        <Divider
          className="divider"
          bgImage={divider_tablet}
          attach={"scroll"}
        ></Divider>
      ) : (
        <Divider
          className="divider"
          bgImage={divider01}
          attach={"scroll"}
        ></Divider>
      )}
      <Divider bgImage={beer} attach={"fixed"} height={"50vh"}>
        <Heading
          fontFamily="KTFJermilov, sans-serif"
          fontSize="6rem"
          color="#fff"
          py={4}
        >
          ПИВО
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
                <NavLink
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  to={`/product/1`}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    textTransform={"uppercase"}
                    fontSize="2.25rem"
                  >
                    Український світлий ель
                  </Text>
                </NavLink>
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
                  fontSize="3.75rem"
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
                  fontSize="3rem"
                >
                  Види
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="3rem"
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
                <Logo width={"80%"} height={"81%"} />
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
                {" "}
                <NavLink
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  to={`/product/2`}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    textTransform={"uppercase"}
                    fontSize="2.25rem"
                  >
                    Харківський портер
                  </Text>
                </NavLink>
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
                  fontSize="3rem"
                >
                  кращого
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="3rem"
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
                <NavLink
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  to={`/product/3`}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    textTransform={"uppercase"}
                    fontSize="2.25rem"
                  >
                    Пшеничний ель
                  </Text>
                </NavLink>
              </Flex>
              <Box bgColor={"rgba(255,255,255)"} width={"40%"}></Box>
              <Box bgColor={"rgba(0,0,0,0.5)"} width={"20%"}></Box>
            </Flex>
          </Grid>
        </SectionInner>
      </SectionContainer>
      <Divider bgImage={gin} attach={"fixed"} height={"50vh"}>
        <Heading
          fontFamily="KTFJermilov, sans-serif"
          fontSize="6rem"
          color="#fff"
          textTransform={"uppercase"}
          py={4}
        >
          ДЖИН
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
                  fontSize="2.25rem"
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
                  fontSize="2.25rem"
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
                <NavLink
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  to={`/product/4`}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    textTransform={"uppercase"}
                    fontSize="3.75rem"
                  >
                    ДЖИН
                  </Text>
                </NavLink>
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
                  fontSize="2.25rem"
                >
                  ТА
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="2.25rem"
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
                <Logo width={"80%"} height={"81%"} />
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
                  fontSize="2.25rem"
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
          fontFamily="KTFJermilov, sans-serif"
          fontSize="6rem"
          color="#fff"
          textTransform={"uppercase"}
          py={4}
        >
          ВІСКІ
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
                  fontSize="2.25rem"
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
                <Logo width={"80%"} height={"81%"} />
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
                  fontSize="2.25rem"
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
                <NavLink
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  to={`/product/5`}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    textTransform={"uppercase"}
                    fontSize="2.25rem"
                  >
                    Односолодовий віскі
                  </Text>
                </NavLink>
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
                  fontSize="2.25rem"
                >
                  немов
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="2.25rem"
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
          fontFamily="KTFJermilov, sans-serif"
          fontSize="6rem"
          color="#fff"
          py={4}
        >
          ГОРІЛКА
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
                  fontSize="2.25rem"
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
                <NavLink
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  to={`/product/6`}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    textTransform={"uppercase"}
                    fontSize="3.75rem"
                  >
                    Горілка
                  </Text>
                </NavLink>
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
                <Logo width={"80%"} height={"81%"} />
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
                  fontSize="2.25rem"
                >
                  без зайвих
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textTransform={"uppercase"}
                  fontSize="2.25rem"
                >
                  слів
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </SectionInner>
      </SectionContainer>
      <SectionContainer
        style={{
          backgroundColor: "#000",
          justifyContent: "center",
          textAlign: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <SectionInner style={{ margin: 0, maxWidth: "none" }}>
          <Flex direction={"column"}>
            <Heading
              className="parallax__title"
              fontFamily="KTFJermilov, sans-serif"
              fontSize="6.25rem"
              fontWeight="normal"
              cursor="pointer"
              pb={"20"}
            >
              ДIZHKA
            </Heading>

            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="3rem"
              color={"#fff"}
              pb={10}
            >
              Вітаємо у гостях!
            </Text>
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="1.5rem"
              color={"#fff"}
              pb={1}
            >
              Хочеш замовити?
            </Text>
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize="1.5rem"
              color={"#fff"}
              pb={1}
            >
              Або переглянути товари?
            </Text>
            <Flex alignItems={"center"} direction={"column"} pb={1}>
              <Text
                fontFamily="'Montserrat', sans-serif"
                textTransform={"uppercase"}
                fontSize="1.5rem"
                color={"#fff"}
                pb={20}
              >
                Мершій до лавки!
              </Text>
              <NavLink to="/store">
                <Button
                  leftIcon={<TiShoppingCart />}
                  color="#fff"
                  bgColor="#f88654"
                  variant="solid"
                  py={"7"}
                  px={"7"}
                  _hover={{
                    bgColor: "#fff",
                    color: "#000",
                  }}
                >
                  ДО ЛАВКИ!
                </Button>
              </NavLink>
            </Flex>
          </Flex>
        </SectionInner>
      </SectionContainer>
      <SectionContainer
        style={{
          backgroundColor: "#000",
          justifyContent: "center",
          textAlign: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <SectionInner style={{ margin: 0, maxWidth: "none" }}>
          <Form />
        </SectionInner>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default HomePage;
