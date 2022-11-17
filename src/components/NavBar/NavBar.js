import {
  Icon,
  Grid,
  GridItem,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { TiShoppingCart, TiHeartFullOutline } from "react-icons/ti";
import { Logo } from "../Logo";
import "../../App.css";

<Link
  alignItems={"center"}
  justifyContent={"center"}
  color="white"
  transition={"all ease 0.3s"}
  _hover={{
    textDecoration: "none",
    color: "#f88654",
    transition: "all ease 0.3s",
  }}
  href={"#"}
></Link>;

const NavBar = () => {
  const cart = useSelector((state) => state.cartReducer);
  const favorite = useSelector((state) => state.favoriteReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        alignItems={"center"}
        height={"80px"}
        position={"sticky"}
        top={"0"}
        bg={useColorModeValue("black")}
        px={8}
        py={1}
        zIndex="999"
      >
        <Grid
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          templateColumns={"1fr 42px 1fr"}
        >
          <GridItem>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={"nav"}
              spacing={4}
              fontSize="1rem"
              fontFamily="'Montserrat', sans-serif"
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to="/">
                <Link
                  alignItems={"center"}
                  justifyContent={"center"}
                  color="white"
                  transition={"all ease 0.3s"}
                  _hover={{
                    textDecoration: "none",
                    color: "#f88654",
                    transition: "all ease 0.3s",
                  }}
                >
                  ГОЛОВНА
                </Link>
              </NavLink>
              <NavLink to="/store">
                <Link
                  alignItems={"center"}
                  justifyContent={"center"}
                  color="white"
                  transition={"all ease 0.3s"}
                  _hover={{
                    textDecoration: "none",
                    color: "#f88654",
                    transition: "all ease 0.3s",
                  }}
                >
                  ЛАВКА
                </Link>
              </NavLink>
              <NavLink to="/contacts">
                <Link
                  alignItems={"center"}
                  justifyContent={"center"}
                  color="white"
                  transition={"all ease 0.3s"}
                  _hover={{
                    textDecoration: "none",
                    color: "#f88654",
                    transition: "all ease 0.3s",
                  }}
                >
                  КОНТАКТИ
                </Link>
              </NavLink>
            </HStack>
          </GridItem>
          <GridItem textAlign={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <NavLink to="/">
                <Logo width={"90%"} height={"91%"} />
              </NavLink>
            </HStack>
          </GridItem>
          <GridItem>
            <Flex alignItems={"center"} flexDirection={"row-reverse"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <NavLink to="/favorite">
                  <Link
                    alignItems={"center"}
                    justifyContent={"center"}
                    color="white"
                    transition={"all ease 0.3s"}
                    _hover={{
                      textDecoration: "none",
                      color: "#f88654",
                      transition: "all ease 0.3s",
                    }}
                    href={"#"}
                  >
                    <Icon as={TiHeartFullOutline} w={7} h={7} />
                    {favorite.length > 0 ? (
                      <Badge variant="solid" bgColor={"#f88654"}>
                        {favorite.length}
                      </Badge>
                    ) : (
                      <Badge
                        variant="solid"
                        color={"transparent"}
                        bgColor={"transparent"}
                      >
                        {favorite.length}
                      </Badge>
                    )}
                  </Link>
                </NavLink>
                <NavLink to="/cart">
                  <Link
                    alignItems={"center"}
                    justifyContent={"center"}
                    color="white"
                    transition={"all ease 0.3s"}
                    _hover={{
                      textDecoration: "none",
                      color: "#f88654",
                      transition: "all ease 0.3s",
                    }}
                    href={"#"}
                  >
                    <Icon as={TiShoppingCart} w={7} h={7} />
                    {cart.length > 0 ? (
                      <Badge variant="solid" bgColor={"#f88654"}>
                        {cart.length}
                      </Badge>
                    ) : (
                      <Badge
                        variant="solid"
                        color={"transparent"}
                        bgColor={"transparent"}
                      >
                        {cart.length}
                      </Badge>
                    )}
                  </Link>
                </NavLink>
              </HStack>
            </Flex>
          </GridItem>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
