import { Text, Heading, Flex, Button } from '@chakra-ui/react';
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const CallToAction = () => {
  return (
    <Flex
      height={{ base: 'auto', md: 'auto', lg: '100vh' }}
      direction={'column'}
      maxWidth="none"
      justify={'center'}
      py={{ base: '200px', md: '200px', lg: '20px' }}
      px={{ base: '20px', md: '20px', lg: '20px' }}
    >
      <Heading
        className="parallax__title"
        fontFamily="KTFJermilov, sans-serif"
        fontSize={{ base: '18rem', md: '18rem', lg: '6.25rem' }}
        fontWeight="normal"
        cursor="pointer"
        pb={'20'}
      >
        ДIZHKA
      </Heading>

      <Text
        fontFamily="'Montserrat', sans-serif"
        textTransform={'uppercase'}
        fontSize={{ base: '7rem', md: '7rem', lg: '3rem' }}
        color={'#fff'}
        pb={10}
      >
        Вітаємо у гостях!
      </Text>
      <Text
        fontFamily="'Montserrat', sans-serif"
        textTransform={'uppercase'}
        fontSize={{ base: '4rem', md: '4rem', lg: '1.5rem' }}
        color={'#fff'}
        pb={1}
      >
        Хочеш замовити?
      </Text>
      <Text
        fontFamily="'Montserrat', sans-serif"
        textTransform={'uppercase'}
        fontSize={{ base: '4rem', md: '4rem', lg: '1.5rem' }}
        color={'#fff'}
        pb={1}
      >
        Або переглянути товари?
      </Text>
      <Flex alignItems={'center'} direction={'column'} pb={1}>
        <Text
          fontFamily="'Montserrat', sans-serif"
          textTransform={'uppercase'}
          fontSize={{ base: '4rem', md: '4rem', lg: '1.5rem' }}
          color={'#fff'}
          pb={20}
        >
          Мершій до лавки!
        </Text>
        <NavLink to="/store">
          <Button
            leftIcon={<TiShoppingCart />}
            color="#fff"
            bgColor="#f88654"
            variant="solid"
            fontSize={{ base: '4rem', md: '4rem', lg: '1rem' }}
            py={{ base: '20', md: '20', lg: '7' }}
            px={{ base: '25', md: '25', lg: '7' }}
            _hover={{
              bgColor: '#fff',
              color: '#000',
            }}
          >
            ДО ЛАВКИ!
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default CallToAction;
