import { Flex, Box } from '@chakra-ui/react';
import { FilterIcons } from '../FilterIcons';
import PropTypes from 'prop-types';
import '../../App.css';

const ProductFilter = ({ state, setFilter }) => {
  const filterProducts = (category) => {
    const filteredList = state.filter((x) => x.category === category);
    setFilter(filteredList);
  };

  return (
    <Flex
      display={{
        base: 'none',
        md: 'flex',
        lg: 'flex',
      }}
      gap={10}
      direction={{
        base: 'column',
        md: 'row',
        lg: 'row',
      }}
      alignItems={'center'}
      justifyContent={'center'}
      pb={50}
      pr={{
        base: '30px',
        md: 'none',
        lg: 'none',
      }}
    >
      <Box
        onClick={() => setFilter(state)}
        width={{ base: '100px', md: '90px', lg: '100px' }}
        height={{ base: '100px', md: '90px', lg: '100px' }}
        cursor={'pointer'}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={'all'} />
      </Box>
      <Box
        onClick={() => filterProducts('пиво')}
        width={{ base: '100px', md: '90px', lg: '100px' }}
        height={{ base: '100px', md: '90px', lg: '100px' }}
        cursor={'pointer'}
        className="filter_box"
        transition="all ease 0.4s"
      >
        <FilterIcons image={'beer'} />
      </Box>
      <Box
        onClick={() => filterProducts('джин')}
        width={{ base: '100px', md: '90px', lg: '100px' }}
        height={{ base: '100px', md: '90px', lg: '100px' }}
        cursor={'pointer'}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={'gin'} />
      </Box>
      <Box
        onClick={() => filterProducts('віскі')}
        width={{ base: '100px', md: '90px', lg: '100px' }}
        height={{ base: '100px', md: '90px', lg: '100px' }}
        cursor={'pointer'}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={'whiskey'} />
      </Box>
      <Box
        onClick={() => filterProducts('горілка')}
        width={{ base: '100px', md: '90px', lg: '100px' }}
        height={{ base: '100px', md: '90px', lg: '100px' }}
        cursor={'pointer'}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={'vodka'} />
      </Box>
    </Flex>
  );
};

ProductFilter.propTypes = {
  state: PropTypes.array,
  setFilter: PropTypes.func,
};

export default ProductFilter;
