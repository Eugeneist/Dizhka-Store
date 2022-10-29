import {
  Flex,
  Box,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";

import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({
  id,
  title,
  description,
  details,
  price,
  rating,
  category,
  thumbnail,
}) => {
  return (
    <Box
      bg={useColorModeValue("#000", "gray.800")}
      maxW="100%"
      maxH="100%"
      shadow="lg"
      cursor={"pointer"}
      _hover={{
        bg: "#221D23",
      }}
    >
      <Box bgImage={thumbnail} height="400px" backgroundSize={"cover"} />

      <Box p="6">
        <Flex mt="1" pb="4" justifyContent="center" alignContent="center">
          <Box
            fontSize="1.5rem"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="#fff"
          >
            {title}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Button
            color="#fff"
            bgColor="transparent"
            variant="ghost"
            _hover={{
              bg: "#221D23",
              color: "#f88654",
            }}
            _active={{
              color: "#000",
              bg: "#fff",
            }}
          >
            Огляд
          </Button>
          <Box
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("#fff")}
          >
            {price}&nbsp;
            <Box as="span" color={"#fff"} fontSize="xl">
              грн
            </Box>
          </Box>
          <Tooltip
            label="Додати до кошику"
            bg="white"
            placement={"top"}
            color={"#000"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon
                color="#fff"
                as={FiShoppingCart}
                h={7}
                w={7}
                alignSelf={"center"}
                _hover={{
                  color: "#f88654",
                }}
              />
            </chakra.a>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
