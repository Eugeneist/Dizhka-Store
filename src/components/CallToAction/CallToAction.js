import { Text, Heading, Flex, Button } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useScreenWidth } from "../../hooks";
import { SectionContainer, SectionInner } from "../../styles/Styles";

const CallToAction = () => {
  const tablet = useScreenWidth();

  return (
    <SectionContainer
      style={{
        backgroundColor: "#000",
        justifyContent: "center",
        textAlign: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <SectionInner style={{ margin: 0, maxWidth: "none" }}>
        <Flex direction={"column"} maxWidth="none">
          <Heading
            className="parallax__title"
            fontFamily="KTFJermilov, sans-serif"
            fontSize={tablet ? "18rem" : "6.25rem"}
            fontWeight="normal"
            cursor="pointer"
            pb={"20"}
          >
            ДIZHKA
          </Heading>

          <Text
            fontFamily="'Montserrat', sans-serif"
            textTransform={"uppercase"}
            fontSize={tablet ? "7rem" : "3rem"}
            color={"#fff"}
            pb={10}
          >
            Вітаємо у гостях!
          </Text>
          <Text
            fontFamily="'Montserrat', sans-serif"
            textTransform={"uppercase"}
            fontSize={tablet ? "4rem" : "1.5rem"}
            color={"#fff"}
            pb={1}
          >
            Хочеш замовити?
          </Text>
          <Text
            fontFamily="'Montserrat', sans-serif"
            textTransform={"uppercase"}
            fontSize={tablet ? "4rem" : "1.5rem"}
            color={"#fff"}
            pb={1}
          >
            Або переглянути товари?
          </Text>
          <Flex alignItems={"center"} direction={"column"} pb={1}>
            <Text
              fontFamily="'Montserrat', sans-serif"
              textTransform={"uppercase"}
              fontSize={tablet ? "4rem" : "1.5rem"}
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
                fontSize={tablet ? "4rem" : "1rem"}
                py={tablet ? "20" : "7"}
                px={tablet ? "25" : "7"}
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
  );
};

export default CallToAction;
