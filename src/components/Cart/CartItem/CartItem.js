import {
  CloseButton,
  Flex,
  FormControl,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { CartProductMeta } from "../CartProductMeta";

const QuantitySelect = ({ value, addProduct, removeProduct, product }) => {
  return (
    <FormControl width={20}>
      <NumberInput value={value} max={100} min={1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper onClick={() => addProduct(product)} />
          <NumberDecrementStepper onClick={() => removeProduct(product)} />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

const CartItem = ({
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
  amount,
  addProduct,
  removeProduct,
  deleteProduct,
}) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      pb={200}
    >
      <CartProductMeta
        name={title}
        description={descriptionTitle}
        image={thumbnail}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        alignItems="center"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={amount}
          addProduct={addProduct}
          removeProduct={removeProduct}
          product={product}
          onChange={(e) => e.currentTarget.value}
        />
        <Box>
          <Text>{(price * amount).toFixed(2)} ГРН</Text>
        </Box>
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={() => deleteProduct(product)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Button
          fontSize="sm"
          bgColor={"transparent"}
          variant="solid"
          onClick={() => deleteProduct(product)}
        >
          Видалити
        </Button>
        <Box>
          <Text>{(price * amount).toFixed(2)} ГРН</Text>
        </Box>
        <QuantitySelect
          addProduct={addProduct}
          removeProduct={removeProduct}
          product={product}
          value={amount}
          onChange={(e) => e.currentTarget.value}
        />
      </Flex>
    </Flex>
  );
};

export default CartItem;
