import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";

import styled from "styled-components";

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 21%;
  background-position: 50% 50%;
  background-size: 20% 21%;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Box bg="#000">
      <Divider w="100%" mx="auto" color="#f88654" h="3.5px" />
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Logo>
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            height="21%"
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

        <HStack
          alignItems="start"
          flex={1}
          justify="end"
          fontSize={{ base: "12px", md: "16px" }}
          color="#fff"
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Text textTransform="uppercase">Карта сайту</Text>
            <Link
              _hover={{
                color: "#f88654",
              }}
              textTransform="uppercase"
            >
              Домашня сторінка
            </Link>
            <Link
              _hover={{
                color: "#f88654",
              }}
              textTransform="uppercase"
            >
              Лавка
            </Link>
            <Link
              _hover={{
                color: "#f88654",
              }}
              textTransform="uppercase"
            >
              Контакти
            </Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider w="25%" mx="auto" color="#f88654" h="3.5px" />
      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              _hover={{
                color: "#f88654",
              }}
              color="#fff"
              h="20px"
              w="20px"
              as={BsTelegram}
            />
          </Link>
          <Link>
            <Icon
              _hover={{
                color: "#f88654",
              }}
              color="#fff"
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
        </HStack>
        <Text textAlign="center" fontSize="smaller" color="white">
          &copy;Copyright,2022. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
