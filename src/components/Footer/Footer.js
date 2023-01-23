import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { GrInstagram } from 'react-icons/gr';
import { BsTelegram } from 'react-icons/bs';
import { Logo } from '../Logo';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <Box bg="#000">
      <Divider w="100%" mx="auto" color="#f88654" h="3.5px" />
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        w="full"
        justify="space-between"
        p={10}
      >
        <NavLink to="/">
          <Logo width={'50%'} height={'51%'} />
        </NavLink>
        <HStack
          alignItems="start"
          flex={1}
          justify="end"
          fontSize={{ base: '12px', md: '16px' }}
          color="#fff"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Flex justify="start" direction="column">
            <Text fontWeight={'bold'} textTransform="uppercase">
              Карта сайту
            </Text>
            <NavLink to="/">
              <Link
                _hover={{
                  color: '#f88654',
                }}
                textTransform="uppercase"
              >
                Головна сторінка
              </Link>
            </NavLink>
            <NavLink to="/store">
              <Link
                _hover={{
                  color: '#f88654',
                }}
                textTransform="uppercase"
              >
                Лавка
              </Link>
            </NavLink>
            <NavLink to="/contacts">
              <Link
                _hover={{
                  color: '#f88654',
                }}
                textTransform="uppercase"
              >
                Контакти
              </Link>
            </NavLink>
          </Flex>
        </HStack>
      </Stack>
      <Divider w="25%" mx="auto" color="#f88654" h="3.5px" />
      <VStack py={3}>
        <HStack justify="center">
          <Link href="tg://resolve?domain=nickname" isExternal>
            <Icon
              _hover={{
                color: '#f88654',
              }}
              color="#fff"
              h="20px"
              w="20px"
              as={BsTelegram}
            />
          </Link>
          <Link href="https://www.instagram.com/nickname" isExternal>
            <Icon
              _hover={{
                color: '#f88654',
              }}
              color="#fff"
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
        </HStack>
        <Text textAlign="center" fontSize="smaller" color="white">
          &copy;Copyright,{currentYear}. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
