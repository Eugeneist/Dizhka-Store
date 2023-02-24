import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CartProductMeta = ({ name, image, description }) => {
  return (
    <Stack direction="row" spacing="5" width="full" pr={26}>
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text
            fontSize={{ base: '5rem', md: '2rem', lg: '1.5rem' }}
            fontWeight="medium"
          >
            {name}
          </Text>
          <Text
            color={mode('gray.600', 'gray.400')}
            fontSize={{ base: '2rem', md: '1rem', lg: 'sm' }}
          >
            {description}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};

CartProductMeta.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default CartProductMeta;
