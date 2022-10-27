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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { TiShoppingCart, TiHeartFullOutline } from "react-icons/ti";
import { Logo } from "../Logo";
import "../../App.css";

const Links = ["ДОМАШНЯ", "ЛАВКА", "КОНТАКТИ"];

const IconLinks = [
  <Icon as={TiHeartFullOutline} w={7} h={7} />,
  <Icon as={TiShoppingCart} w={7} h={7} />,
];

const NavLink = ({ children }) => (
  <Link
    alignItems={"center"}
    justifyContent={"center"}
    color="white"
    _hover={{
      textDecoration: "none",
      color: "#f88654",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const NavBar = () => {
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </GridItem>
          <GridItem textAlign={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <Logo width={"90%"} height={"91%"} />
            </HStack>
          </GridItem>
          <GridItem>
            <Flex alignItems={"center"} flexDirection={"row-reverse"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {IconLinks.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </Flex>
          </GridItem>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
