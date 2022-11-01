import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  Button,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  deleteFromCart,
  clearCart,
} from "../../actions/cartActions";
import { NavLink } from "react-router-dom";
import { Container } from "../../styles/Styles";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";

import cart_empty from "../../assets/images/cart_empty.png";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer);

  const calculateTotal = state
    .reduce((acc, product) => acc + product.amount * product.price, 0)
    .toFixed(2);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const deleteProduct = (product) => {
    dispatch(deleteFromCart(product));
  };

  const clearAllCart = (product) => {
    dispatch(clearCart(product));
  };

  let finalWordA = "позиція";
  let finalWordB = "позиції";
  let finalWordC = "позицій";
  let message;

  if (state.length === 1 || state.length % 10 === 1) {
    message = `${finalWordA}`;
  } else if (state.length >= 2 && state.length <= 4) {
    message = `${finalWordB}`;
  } else if (
    state.length % 10 === 2 ||
    state.length % 10 === 3 ||
    state.length % 10 === 4
  ) {
    message = `${finalWordB}`;
  } else if (state.length >= 5 && state.length <= 100) {
    message = `${finalWordC}`;
  } else {
    message = `${finalWordC}`;
  }

  if (state.length < 1) {
    return (
      <Container
        bgImage={cart_empty}
        style={{
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          backgroundSize: "40%",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text fontSize="1.5rem" fontFamily="'Montserrat', sans-serif" pb={25}>
          Кошик порожній! Давай заповнювати!
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
      </Container>
    );
  }

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "10", md: "14", lg: "16" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Твій кошик ({state.length} {message})
          </Heading>

          <Stack spacing="6">
            {state.map((product) => (
              <CartItem
                key={product.id}
                amount={product.amount}
                product={product}
                addProduct={addProduct}
                removeProduct={removeProduct}
                deleteProduct={deleteProduct}
                {...product}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary calculateTotal={calculateTotal} />
          <HStack mt="6" fontWeight="semibold">
            <p>чи</p>
            <NavLink to={`/store`}>
              <Link color={mode("blue.500", "blue.200")}>
                Повернутися до Лавки
              </Link>
            </NavLink>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Cart;
