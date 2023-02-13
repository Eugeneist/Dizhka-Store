import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { ModalComponent } from '../../ModalComponent';
import { OrderForm } from '../../OrderForm';

const CartOrderSummary = ({ products, calculateTotal, clearCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size={{ base: '4xl', md: 'xl', lg: 'md' }}>
        Загальне замовлення
      </Heading>

      <Stack spacing="6">
        <Flex justify="start" align="center">
          <Text
            fontSize={{ base: '6xl', md: '3xl', lg: 'lg' }}
            fontWeight="semibold"
            pr="10px"
          >
            В цілому:
          </Text>
          <Text
            fontSize={{ base: '7xl', md: '5xl', lg: 'lg' }}
            fontWeight="semibold"
          >
            {calculateTotal} ГРН
          </Text>
        </Flex>
      </Stack>
      <Button
        onClick={onOpen}
        bgColor="#f88654"
        color="#fff"
        size="lg"
        p={{ base: '20px', md: '20px' }}
        fontSize={{ base: '5xl', md: '3xl', lg: 'md' }}
        transition={'all ease 0.3s'}
        rightIcon={<FaArrowRight />}
        _hover={{
          bgColor: '#000',
          color: '#fff',
          transition: 'all ease 0.3s',
        }}
      >
        Оформити замовлення
      </Button>
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        title="Ваше замовлення"
        size={{ base: '8xl', md: '6xl', lg: '2xl' }}
        form={'order'}
      >
        <OrderForm
          products={products}
          totalPrice={calculateTotal}
          clearCart={clearCart}
          onClose={onClose}
        />
      </ModalComponent>
    </Stack>
  );
};

export default CartOrderSummary;
