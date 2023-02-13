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
        direction={{ base: 'row', lg: 'row' }}
        w="full"
        justify="space-between"
        p={10}
      >
        <NavLink style={{ paddingTop: '15px' }} to="/">
          <Logo width={'50%'} height={'51%'} />
        </NavLink>

        <HStack
          alignItems="start"
          flex={1}
          justify="end"
          fontSize={{ base: '12px', md: '16px', lg: '14px' }}
          color="#fff"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Flex justify="start" direction="column">
            <Text
              pb={{ base: '15px', md: '15px', lg: '6px' }}
              fontWeight={'bold'}
              textTransform="uppercase"
            >
              Карта сайту
            </Text>
            <Box pb={{ base: '10px', md: '10px', lg: '3px' }}>
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
            </Box>
            <Box pb={{ base: '10px', md: '10px', lg: '3px' }}>
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
            </Box>
            <Box pb={{ base: '10px', md: '10px', lg: '3px' }}>
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
            </Box>
          </Flex>
        </HStack>
      </Stack>
      <Divider w="25%" mx="auto" color="#f88654" h="3.5px" />
      <VStack py={{ base: '10', md: '5', lg: '2' }}>
        <HStack pb={{ base: '10' }} justify="center">
          <Link href="tg://resolve?domain=nickname" isExternal>
            <Icon
              _hover={{
                color: '#f88654',
              }}
              mx={{ base: '10', md: '1', lg: '1' }}
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
        <Text
          textAlign="center"
          fontSize={{ base: '3rem', md: 'smaller', lg: 'smaller' }}
          color="white"
        >
          &copy;Copyright,{currentYear}. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
