import {
  Box,
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
import "../../App.css";

import styled from "styled-components";

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 91%;
  background-position: 90% 91%;
  background-size: 52px 53px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Links = ["ДОМАШНЯ", "МАГАЗИН", "КОНТАКТИ"];

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
      <Box
        position={"sticky"}
        top={"0"}
        bg={useColorModeValue("black")}
        px={4}
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
              fontSize="0.9375rem"
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
              <Logo>
                <svg
                  className="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="90%"
                  height="91%"
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
      </Box>
    </>
  );
};

export default NavBar;
