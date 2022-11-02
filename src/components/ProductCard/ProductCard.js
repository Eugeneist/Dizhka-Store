import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Box,
  useColorModeValue,
  Tooltip,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../actions/favoriteActions";

import { FiShoppingCart } from "react-icons/fi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const ProductCard = ({
  id,
  title,
  descriptionTitle,
  description,
  details,
  price,
  rating,
  category,
  thumbnail,
  product,
}) => {
  const [favoriteProduct, setFavoriteProduct] = useState(false);

  const dispatch = useDispatch();

  const toast = useToast();
  const toastIdRef = useRef();

  const favorite = useSelector((state) => state.favoriteReducer);

  const addProduct = (product) => {
    dispatch(addToCart(product));
    toastIdRef.current = toast({
      status: "success",
      isClosable: true,
      description: "Додано до Кошику!",
    });
  };

  const addFavoriteProduct = (product) => {
    if (favoriteProduct) {
      dispatch(removeFromFavorite(product));
      setFavoriteProduct(false);
      toastIdRef.current = toast({
        status: "success",
        isClosable: true,
        description: "Видалено з Побажань.",
      });
    } else {
      dispatch(addToFavorite(product));
      setFavoriteProduct(true);
      toastIdRef.current = toast({
        status: "success",
        isClosable: true,
        description: "Додано до Побажань!",
      });
    }
  };

  useEffect(() => {
    if (favorite.find((fav) => fav.id === product.id)) {
      setFavoriteProduct(true);
    }
  }, [favorite, product]);

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
      <NavLink to={`/product/${product.id}`}>
        <Box bgImage={thumbnail} height="400px" backgroundSize={"cover"} />
      </NavLink>

      <Box p="6">
        <Flex mt="1" pb="4" justifyContent="center" alignContent="center">
          <NavLink to={`/product/${product.id}`}>
            <Box
              fontSize="1.5rem"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="#fff"
            >
              {title}
            </Box>
          </NavLink>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <NavLink to={`/product/${id}`}>
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
          </NavLink>
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
            bg="white"
            placement={"top"}
            color={"#000"}
            fontSize={"1.2em"}
          >
            <IconButton
              onClick={() => addFavoriteProduct(product)}
              color="#fff"
              bgColor="transparent"
              h={8}
              w={8}
              alignSelf={"center"}
              icon={
                favoriteProduct ? (
                  <IoHeartSharp style={{ width: "1.5em", height: "1.5em" }} />
                ) : (
                  <IoHeartOutline style={{ width: "1.5em", height: "1.5em" }} />
                )
              }
              _hover={{
                color: "#f88654",
              }}
            />
          </Tooltip>
          <Tooltip
            bg="white"
            placement={"top"}
            color={"#000"}
            fontSize={"1.2em"}
          >
            <IconButton
              onClick={() => addProduct(product)}
              color="#fff"
              bgColor="transparent"
              h={8}
              w={8}
              alignSelf={"center"}
              icon={
                <FiShoppingCart style={{ width: "1.5em", height: "1.5em" }} />
              }
              _hover={{
                color: "#f88654",
              }}
            />
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
