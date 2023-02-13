import { Container, SectionInner } from '../../styles/Styles';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useScreenWidth } from '../../hooks';
import { ProductCard } from '../ProductCard';
import { Grid, Text, Button } from '@chakra-ui/react';
import { TiShoppingCart } from 'react-icons/ti';

import favorite_empty from '../../assets/images/favorite_empty.png';

const FavoriteList = () => {
  const favorite = useSelector((state) => state.favoriteReducer);

  const tablet = useScreenWidth();

  if (favorite.length < 1) {
    return (
      <Container
        bgImage={favorite_empty}
        style={{
          height: '100vh',
          backgroundColor: '#000',
          color: '#fff',
          backgroundSize: tablet ? '100%' : '40%',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Text
          fontSize={{ base: '4rem', md: '1.5rem', lg: '1.5rem' }}
          fontFamily="'Montserrat', sans-serif"
          pb={5}
        >
          Ваш лист побажань порожній!
        </Text>
        <Text
          fontSize={{ base: '4rem', md: '1.5rem', lg: '1.5rem' }}
          fontFamily="'Montserrat', sans-serif"
          pb={25}
        >
          Це можна виправити у Лавці.
        </Text>
        <NavLink to="/store">
          <Button
            leftIcon={<TiShoppingCart />}
            fontSize={{ base: '3rem', md: '1rem', lg: '1rem' }}
            height={{ base: '10rem', md: '2.5rem', lg: '2.5rem' }}
            color="#fff"
            bgColor="#f88654"
            variant="solid"
            py={'7'}
            px={{ base: '12', md: '7', lg: '7' }}
            _hover={{
              bgColor: '#fff',
              color: '#000',
            }}
          >
            ДО ЛАВКИ!
          </Button>
        </NavLink>
      </Container>
    );
  }

  return (
    <Container
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <SectionInner>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={4}
        >
          {favorite.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              descriptionTitle={product.descriptionTitle}
              description={product.description}
              details={product.details}
              price={product.price}
              rating={product.rating}
              category={product.category}
              thumbnail={product.thumbnail}
              product={product}
            />
          ))}
        </Grid>
      </SectionInner>
    </Container>
  );
};

export default FavoriteList;
