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
} from '@chakra-ui/react';
import { CartProductMeta } from '../CartProductMeta';
import PropTypes from 'prop-types';

const QuantitySelect = ({ value, addProduct, removeProduct, product }) => {
  return (
    <FormControl width={{ base: '100px', md: '40', lg: '20' }}>
      <NumberInput
        height={{ base: '50px', md: '20', lg: '12' }}
        value={value}
        max={100}
        min={1}
      >
        <NumberInputField
          fontSize={{ base: '4rem', md: '2rem', lg: 'sm' }}
          height={{ base: '50px', md: '20', lg: '12' }}
        />
        <NumberInputStepper width={{ base: '50px', md: '20', lg: '7' }}>
          <NumberIncrementStepper
            fontSize={{ base: '2rem', md: 'md', lg: 'sm' }}
            onClick={() => addProduct(product)}
          />
          <NumberDecrementStepper
            fontSize={{ base: '2rem', md: 'md', lg: 'sm' }}
            onClick={() => removeProduct(product)}
          />
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
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      pb={50}
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
        display={{ base: 'none', md: 'flex' }}
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
        display={{ base: 'flex', md: 'none' }}
      >
        <Button
          fontSize={{ base: '2rem', md: '2rem', lg: 'sm' }}
          bgColor={'transparent'}
          variant="solid"
          onClick={() => deleteProduct(product)}
        >
          Видалити
        </Button>
        <Box>
          <Text fontSize={{ base: '4rem', md: '2rem', lg: 'sm' }}>
            {(price * amount).toFixed(2)} ГРН
          </Text>
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

QuantitySelect.propTypes = {
  value: PropTypes.number,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
  product: PropTypes.object,
};

CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  descriptionTitle: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  category: PropTypes.string,
  thumbnail: PropTypes.string,
  product: PropTypes.object,
  amount: PropTypes.number,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default CartItem;
