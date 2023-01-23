import { useForm } from 'react-hook-form';
import { Flex } from '@chakra-ui/react';

const OrderForm = ({ products, totalPrice, clearCart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data['cart'] = products;
    data['totalPrice'] = totalPrice;
    console.log(data);
    clearCart();
  };

  return (
    <form
      id="orderForm"
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
        <label style={{ paddingBottom: '20px' }}>
          Ваше ім'я:
          <input
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="text"
            {...register('firstname', { required: true })}
          />
          {errors.firstname && <span>Будь-ласка, введіть Ваше ім'я!</span>}
        </label>

        <label style={{ paddingBottom: '20px' }}>
          Ваше прізвище:
          <input
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="text"
            {...register('lastname', { required: true })}
          />
          {errors.lastname && <span>Будь-ласка, введіть Ваше прізвище!</span>}
        </label>
      </Flex>

      <Flex gap={'10%'} justify="start">
        <label style={{ paddingBottom: '10px' }}>
          Номер мобільного:
          <input
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="tel"
            {...register('mobile', { required: true })}
          />
          {errors.mobile && (
            <span>Будь-ласка, введіть номер Вашого мобільного!</span>
          )}
        </label>
        <label style={{ paddingBottom: '10px' }}>
          E-mail:
          <input
            style={{
              width: '100%',
              height: '30px',
              border: '2px solid #14213d',
            }}
            type="mail"
            {...register('mail', { required: true })}
          />
          {errors.mail && (
            <span>Будь-ласка, введіть Вашу електронну пошту!</span>
          )}
        </label>
      </Flex>

      <label style={{ paddingBottom: '10px' }}>
        Ваша країна:
        <select
          style={{ width: '100%', height: '30px', border: '2px solid #14213d' }}
          {...register('country', { required: true })}
        >
          <option value="">Країна</option>
          <option value="Poland">Польща</option>
          <option value="Ukraine">Україна</option>
          <option value="England">Велика Британія</option>
        </select>
        {errors.country && <span>Будь-ласка, укажіть країну.</span>}
      </label>

      <label style={{ paddingBottom: '10px' }}>
        Адреса:
        <input
          style={{ width: '100%', height: '30px', border: '2px solid #14213d' }}
          type="text"
          {...register('adress', { required: true })}
        />
        {errors.adress && <span>Будь-ласка, введіть Вашу адресу!</span>}
      </label>

      <label style={{ paddingBottom: '10px' }}>
        Будь-які побажання або коментарі:
        <textarea
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
      </label>

      <label style={{ paddingBottom: '20px' }}>
        <input
          type="checkbox"
          placeholder="Subscribe to Newsletter"
          name="Subscribe to Newsletter"
          id="news"
          {...register('news')}
        />
        <label htmlFor="news">Підписатися на оновлення</label>
      </label>
    </form>
  );
};

export default OrderForm;
