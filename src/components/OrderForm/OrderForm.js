import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Flex, useToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {
  FormLabel,
  FormInput,
  FormTextarea,
  FormContainer,
  FormSelect,
} from '../../styles/Styles';

const OrderForm = ({ products, totalPrice, clearCart, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();
  const toastIdRef = useRef();

  const onSubmit = (data) => {
    data['cart'] = products;
    data['totalPrice'] = totalPrice;
    console.log(data);
    clearCart();
    onClose();
    toastIdRef.current = toast({
      title: 'Замовлення прийнято!',
      status: 'success',
    });
  };

  return (
    <FormContainer
      id="order"
      style={{
        width: '95%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: 'auto',
        backgroundColor: '#fff',
        color: '#14213d',
        fontSize: '17px',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex gap={'10%'} justify="start">
        {errors.firstname &&
          (toastIdRef.current = toast({
            description: "Будь-ласка, введіть Ваше ім'я!",
            status: 'error',
            position: 'top',
          }))}

        <FormLabel style={{ paddingBottom: '20px' }}>
          Ваше ім'я:
          <FormInput
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="text"
            {...register('firstname', { required: true })}
          />
        </FormLabel>

        {errors.lastname &&
          (toastIdRef.current = toast({
            description: 'Будь-ласка, введіть Ваше прізвище!',
            status: 'error',
            position: 'top',
          }))}

        <FormLabel style={{ paddingBottom: '20px' }}>
          Ваше прізвище:
          <FormInput
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="text"
            {...register('lastname', { required: true })}
          />
        </FormLabel>
      </Flex>

      <Flex gap={'10%'} justify="start">
        {errors.mobile &&
          (toastIdRef.current = toast({
            description: 'Будь-ласка, введіть номер Вашого мобільного!',
            status: 'error',
            position: 'top',
          }))}

        <FormLabel style={{ paddingBottom: '10px' }}>
          Номер мобільного:
          <FormInput
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="tel"
            {...register('mobile', { required: true })}
          />
        </FormLabel>

        {errors.mail &&
          (toastIdRef.current = toast({
            description: 'Будь-ласка, введіть Вашу електронну пошту!',
            status: 'error',
            position: 'top',
          }))}

        <FormLabel style={{ paddingBottom: '10px' }}>
          E-mail:
          <FormInput
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="mail"
            {...register('mail', { required: true })}
          />
        </FormLabel>
      </Flex>

      {errors.country &&
        (toastIdRef.current = toast({
          description: 'Будь-ласка, укажіть країну.',
          status: 'error',
          position: 'top',
        }))}

      <FormLabel style={{ paddingBottom: '10px' }}>
        Ваша країна:
        <FormSelect
          style={{ width: '100%', height: '30px', border: '2px solid #14213d' }}
          {...register('country', { required: true })}
        >
          <option value="Poland">Польща</option>
          <option value="Ukraine">Україна</option>
          <option value="England">Велика Британія</option>
        </FormSelect>
      </FormLabel>

      {errors.adress &&
        (toastIdRef.current = toast({
          description: 'Будь-ласка, введіть Вашу адресу!',
          status: 'error',
          position: 'top',
        }))}

      <FormLabel style={{ paddingBottom: '10px' }}>
        Адреса:
        <FormInput
          style={{ width: '100%', height: '30px', border: '2px solid #14213d' }}
          type="text"
          {...register('adress', { required: true })}
        />
      </FormLabel>

      <FormLabel style={{ paddingBottom: '10px' }}>
        Будь-які побажання або коментарі:
        <FormTextarea
          style={{
            width: '100%',
            minHeight: '150px',
            border: '2px solid #14213d',
          }}
          {...register('notes', {
            required: false,
            max: 1000,
            min: 10,
            maxLength: 10000,
          })}
        />
      </FormLabel>

      <FormLabel style={{ paddingBottom: '20px' }}>
        <input
          type="checkbox"
          placeholder="Subscribe to Newsletter"
          name="Subscribe to Newsletter"
          id="news"
          style={{ marginRight: '10px' }}
          {...register('news')}
        />
        <FormLabel htmlFor="news">Підписатися на оновлення</FormLabel>
      </FormLabel>
    </FormContainer>
  );
};

OrderForm.propTypes = {
  clearCart: PropTypes.func,
  onClose: PropTypes.func,
  products: PropTypes.string,
  totalPrice: PropTypes.string,
};

export default OrderForm;
