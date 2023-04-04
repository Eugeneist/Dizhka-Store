import { useRef } from 'react';
import {
  Icon,
  Grid,
  GridItem,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Badge,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { TiShoppingCart, TiHeartFullOutline } from 'react-icons/ti';
import { HiOutlineHome } from 'react-icons/hi';
import { MdStorefront } from 'react-icons/md';
import { RiContactsBook2Line } from 'react-icons/ri';
import { Logo } from '../Logo';
import '../../App.css';

<Link
  alignItems={'center'}
  justifyContent={'center'}
  color="white"
  transition={'all ease 0.3s'}
  _hover={{
    textDecoration: 'none',
    color: '#f88654',
    transition: 'all ease 0.3s',
  }}
  href={'#'}
></Link>;

const NavBar = () => {
  const cart = useSelector((state) => state.cartReducer);
  const favorite = useSelector((state) => state.favoriteReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <Grid
        alignItems={'center'}
        position={'sticky'}
        top={'0'}
        bg={useColorModeValue('black')}
        px={8}
        py={1}
        zIndex="999"
      >
        <Grid
          h={16}
          height={'70px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          templateColumns={'1fr 42px 1fr'}
          backgroundColor={'#000'}
        >
          <GridItem>
            <IconButton
              ref={btnRef}
              width={'50px'}
              height={'50px'}
              backgroundColor={'#000'}
              icon={
                isOpen ? (
                  <CloseIcon
                    width={'35px'}
                    height={'35px'}
                    backgroundColor={'#000'}
                    color={'#fff'}
                  />
                ) : (
                  <HamburgerIcon
                    backgroundColor={'#000'}
                    color={'#fff'}
                    width={'45px'}
                    height={'45px'}
                  />
                )
              }
              aria-label={'Open Menu'}
              display={{ lg: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={'nav'}
              spacing={4}
              fontSize="1rem"
              fontFamily="'Montserrat', sans-serif"
              display={{ base: 'none', lg: 'flex' }}
            >
              <NavLink to="/">
                <Link
                  alignItems={'center'}
                  justifyContent={'center'}
                  color="white"
                  transition={'all ease 0.3s'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#f88654',
                    transition: 'all ease 0.3s',
                  }}
                >
                  ГОЛОВНА
                </Link>
              </NavLink>
              <NavLink to="/store">
                <Link
                  alignItems={'center'}
                  justifyContent={'center'}
                  color="white"
                  transition={'all ease 0.3s'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#f88654',
                    transition: 'all ease 0.3s',
                  }}
                >
                  ЛАВКА
                </Link>
              </NavLink>
              <NavLink to="/contacts">
                <Link
                  alignItems={'center'}
                  justifyContent={'center'}
                  color="white"
                  transition={'all ease 0.3s'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#f88654',
                    transition: 'all ease 0.3s',
                  }}
                >
                  КОНТАКТИ
                </Link>
              </NavLink>
            </HStack>
          </GridItem>
          <GridItem textAlign={'center'}>
            <HStack spacing={8} alignItems={'center'}>
              <NavLink to="/">
                <Logo width={'90%'} height={'91%'} />
              </NavLink>
            </HStack>
          </GridItem>
          <GridItem>
            <Flex alignItems={'center'} flexDirection={'row-reverse'}>
              <HStack as={'nav'} spacing={4} display="flex">
                <NavLink to="/favorite">
                  <Link
                    alignItems={'center'}
                    justifyContent={'center'}
                    color="white"
                    transition={'all ease 0.3s'}
                    _hover={{
                      textDecoration: 'none',
                      color: '#f88654',
                      transition: 'all ease 0.3s',
                    }}
                    href={'#'}
                  >
                    <Icon
                      as={TiHeartFullOutline}
                      w={{ base: '9rem', md: '5rem', lg: '8' }}
                      h={{ base: '9rem', md: '5rem', lg: '8' }}
                    />
                    {favorite.length > 0 ? (
                      <Badge
                        variant="solid"
                        bgColor={'#f88654'}
                        fontSize="11px"
                        px={{ base: '4px', md: '7px', lg: '4px' }}
                      >
                        {favorite.length}
                      </Badge>
                    ) : (
                      <Badge
                        variant="solid"
                        color={'transparent'}
                        bgColor={'transparent'}
                        fontSize="11px"
                        px={{ base: '4px', md: '7px', lg: '4px' }}
                      >
                        {favorite.length}
                      </Badge>
                    )}
                  </Link>
                </NavLink>
                <NavLink to="/cart">
                  <Link
                    alignItems={'center'}
                    justifyContent={'center'}
                    color="white"
                    transition={'all ease 0.3s'}
                    _hover={{
                      textDecoration: 'none',
                      color: '#f88654',
                      transition: 'all ease 0.3s',
                    }}
                    href={'#'}
                  >
                    <Icon
                      as={TiShoppingCart}
                      w={{ base: '9rem', md: '5rem', lg: '8' }}
                      h={{ base: '9rem', md: '5rem', lg: '8' }}
                    />
                    {cart.length > 0 ? (
                      <Badge
                        fontSize="11px"
                        variant="solid"
                        bgColor={'#f88654'}
                        px={{ base: '4px', md: '7px', lg: '4px' }}
                      >
                        {cart.length}
                      </Badge>
                    ) : (
                      <Badge
                        variant="solid"
                        fontSize="11px"
                        color={'transparent'}
                        bgColor={'transparent'}
                        px={{ base: '4px', md: '7px', lg: '4px' }}
                      >
                        {cart.length}
                      </Badge>
                    )}
                  </Link>
                </NavLink>
              </HStack>
            </Flex>
          </GridItem>
        </Grid>
      </Grid>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size={'xl'}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody backgroundColor="#000">
            <HStack
              bgColor={'black'}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'start'}
              justifyContent={'center'}
              as={'nav'}
              marginTop={'50px'}
              spacing={4}
              fontSize="5rem"
              fontFamily="'Montserrat', sans-serif"
            >
              <NavLink
                onClick={onClose}
                style={{ marginBottom: '25px' }}
                to="/"
              >
                <Flex align={'center'}>
                  <Icon
                    color={'#fff'}
                    as={HiOutlineHome}
                    w={{ base: '9rem', md: '8rem', lg: '8rem' }}
                    h={{ base: '9rem', md: '8rem', lg: '8rem' }}
                    mr={'10px'}
                  />
                  <Link
                    color="white"
                    transition={'all ease 0.3s'}
                    _hover={{
                      textDecoration: 'none',
                      color: '#f88654',
                      transition: 'all ease 0.3s',
                    }}
                  >
                    ГОЛОВНА
                  </Link>
                </Flex>
              </NavLink>
              <NavLink
                onClick={onClose}
                style={{ marginBottom: '25px' }}
                to="/store"
              >
                <Flex align={'center'}>
                  <Icon
                    color={'#fff'}
                    as={MdStorefront}
                    w={{ base: '9rem', md: '8rem', lg: '8rem' }}
                    h={{ base: '9rem', md: '8rem', lg: '8rem' }}
                    mr={'10px'}
                  />
                  <Link
                    color="white"
                    transition={'all ease 0.3s'}
                    _hover={{
                      textDecoration: 'none',
                      color: '#f88654',
                      transition: 'all ease 0.3s',
                    }}
                  >
                    ЛАВКА
                  </Link>
                </Flex>
              </NavLink>
              <NavLink
                onClick={onClose}
                style={{ marginBottom: '25px' }}
                to="/contacts"
              >
                <Flex align={'center'}>
                  <Icon
                    color={'#fff'}
                    as={RiContactsBook2Line}
                    w={{ base: '9rem', md: '8rem', lg: '8rem' }}
                    h={{ base: '9rem', md: '8rem', lg: '8rem' }}
                    mr={'10px'}
                  />
                  <Link
                    color="white"
                    transition={'all ease 0.3s'}
                    _hover={{
                      textDecoration: 'none',
                      color: '#f88654',
                      transition: 'all ease 0.3s',
                    }}
                  >
                    КОНТАКТИ
                  </Link>
                </Flex>
              </NavLink>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
