import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Flex,
  Box,
  useColorModeValue,
  Tooltip,
  IconButton,
  useToast,
  Image,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../actions/favoriteActions';
import { TfiMoreAlt } from 'react-icons/tfi';
import { FiShoppingCart } from 'react-icons/fi';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

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
      status: 'success',
      isClosable: true,
      description: 'Додано до Кошику!',
    });
  };

  const addFavoriteProduct = (product) => {
    if (favoriteProduct) {
      dispatch(removeFromFavorite(product));
      setFavoriteProduct(false);
      toastIdRef.current = toast({
        status: 'success',
        isClosable: true,
        description: 'Видалено з Побажань.',
      });
    } else {
      dispatch(addToFavorite(product));
      setFavoriteProduct(true);
      toastIdRef.current = toast({
        status: 'success',
        isClosable: true,
        description: 'Додано до Побажань!',
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
      margin={'0 auto'}
      bg={useColorModeValue('#000', 'gray.800')}
      maxW={{ base: '90%', md: '90%', lg: '100%' }}
      shadow="lg"
      overflow={'hidden'}
      cursor={'pointer'}
      _hover={{
        bg: '#221D23',
      }}
      pb={{ base: '25px', md: '15px', lg: '5px' }}
    >
      <NavLink to={`/product/${product.id}`}>
        <Image
          src={thumbnail}
          alt="alcohol"
          height={{ base: '70rem', md: '25rem', lg: '25rem' }}
          pb="4"
          style={{
            backgroundSize: 'cober',
            backgroundPosition: '44% 50%',
            transition: 'all 0.5s',
          }}
          _hover={{
            transform: 'scale(1.1)',
            transition: 'all 0.5s',
          }}
        />
      </NavLink>

      <Box p="6" zIndex={2}>
        <Flex mt="1" pb="2" justifyContent="center" alignContent="center">
          <NavLink to={`/product/${product.id}`}>
            <Box
              fontSize={{ base: '5rem', md: '1.6rem', lg: '1.5rem' }}
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="#fff"
            >
              {title}
            </Box>
          </NavLink>
        </Flex>

        <Flex pb="10" justifyContent="center" alignContent="center">
          <Box
            fontSize={{ base: '5rem', md: '1.6rem', lg: '1.5rem' }}
            fontWeight="bold"
            color={useColorModeValue('#fff')}
          >
            {price} грн
          </Box>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <IconButton
            onClick={() => addFavoriteProduct(product)}
            color="#fff"
            bgColor="transparent"
            h={{ base: '10rem', md: '3rem', lg: '1.5rem' }}
            w={{ base: '10rem', md: '3rem', lg: '1.5rem' }}
            alignSelf={'center'}
            icon={
              favoriteProduct ? (
                <IoHeartSharp style={{ width: '8em', height: '8em' }} />
              ) : (
                <IoHeartOutline style={{ width: '8em', height: '8em' }} />
              )
            }
            _hover={{
              color: '#f88654',
            }}
            _active={{
              backgroundColor: 'transparent',
            }}
          />
          <Tooltip
            bg="white"
            placement={'top'}
            color={'#000'}
            fontSize={'1.2em'}
          >
            <NavLink to={`/product/${id}`}>
              <IconButton
                color="#fff"
                bgColor="transparent"
                h={{ base: '10rem', md: '3rem', lg: '1.5rem' }}
                w={{ base: '10rem', md: '3rem', lg: '1.5rem' }}
                alignSelf={'center'}
                icon={<TfiMoreAlt style={{ width: '8em', height: '8em' }} />}
                _hover={{
                  color: '#f88654',
                }}
                _active={{
                  backgroundColor: 'transparent',
                }}
              />
            </NavLink>
          </Tooltip>
          <Tooltip
            bg="white"
            placement={'top'}
            color={'#000'}
            fontSize={'1.2em'}
          >
            <IconButton
              onClick={() => addProduct(product)}
              color="#fff"
              bgColor="transparent"
              h={{ base: '10rem', md: '3rem', lg: '1.5rem' }}
              w={{ base: '10rem', md: '3rem', lg: '1.5rem' }}
              alignSelf={'center'}
              icon={<FiShoppingCart style={{ width: '8em', height: '8em' }} />}
              _hover={{
                color: '#f88654',
              }}
              _active={{
                backgroundColor: 'transparent',
              }}
            />
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

ProductCard.propTypes = {
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
};

export default ProductCard;
