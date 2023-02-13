import { Container, SectionInner } from '../../styles/Styles';
import {
  Flex,
  Image,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useColorModeValue,
  useClipboard,
} from '@chakra-ui/react';

import { BsTelegram } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import '../../App.css';

import map from '../../assets/images/map.png';
import flag from '../../assets/images/flag.png';

const Contacts = () => {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  return (
    <Container
      style={{
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '300px 40px',
      }}
    >
      <SectionInner>
        <Flex
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          align={'center'}
          pb={50}
        >
          <Image
            width={{ base: '100%', md: '50%', lg: '50%' }}
            height={{ base: '100%', md: '50%', lg: '50%' }}
            pb={{ base: '50', md: '5', lg: '5' }}
            src={map}
            alt="map"
          />
          <Image
            pl={20}
            width={{ base: '100%', md: '50%', lg: '50%' }}
            height={{ base: '100%', md: '50%', lg: '50%' }}
            src={flag}
            alt="flag"
          />
        </Flex>
        <Stack
          width={{ base: '70%', md: '40%', lg: '40%' }}
          align="center"
          justify="space-around"
          margin={'0 auto'}
          direction={'row'}
        >
          <Tooltip
            label={hasCopied ? 'Email скопійовано!' : 'Скопіювати Email'}
            closeOnClick={false}
            hasArrow
          >
            <IconButton
              aria-label="email"
              bgColor={'#000'}
              size="lg"
              fontSize="3xl"
              icon={<MdEmail size="28px" />}
              _hover={{
                bg: '#f88654',
                color: useColorModeValue('white', 'gray.700'),
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip>

          <Link href="tg://resolve?domain=nickname" isExternal>
            <IconButton
              aria-label="telegram"
              bgColor={'#000'}
              size="lg"
              fontSize="3xl"
              icon={<BsTelegram size="28px" />}
              _hover={{
                bg: '#f88654',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>

          <Link href="https://www.instagram.com/nickname" isExternal>
            <IconButton
              aria-label="instagram"
              bgColor={'#000'}
              size="lg"
              icon={<GrInstagram size="28px" />}
              _hover={{
                bg: '#f88654',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>
        </Stack>
      </SectionInner>
    </Container>
  );
};

export default Contacts;
