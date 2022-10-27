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
import { GrInstagram } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";
import { Logo } from "../Logo";

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
        <Logo width={"20%"} height={"21%"} />
        <HStack
          alignItems="start"
          flex={1}
          justify="end"
          fontSize={{ base: "12px", md: "16px" }}
          color="#fff"
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Text fontWeight={"bold"} textTransform="uppercase">
              Карта сайту
            </Text>
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
