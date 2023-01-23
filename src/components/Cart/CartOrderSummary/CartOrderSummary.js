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
      <Heading size="md">Загальне замовлення</Heading>

      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            В цілому: {calculateTotal} ГРН
          </Text>
          <Text fontSize="xl" fontWeight="extrabold"></Text>
        </Flex>
      </Stack>
      <Button
        onClick={onOpen}
        bgColor="#f88654"
        color="#fff"
        size="lg"
        fontSize="md"
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
        size={'2xl'}
        form={'orderForm'}
      >
        <OrderForm
          products={products}
          totalPrice={calculateTotal}
          clearCart={clearCart}
        />
      </ModalComponent>
    </Stack>
  );
};

export default CartOrderSummary;
