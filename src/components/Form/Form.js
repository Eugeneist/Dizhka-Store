import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import { BsPerson, BsTelegram } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

const mb = defineStyle({
  width: '20px',
  height: '20px',
});

export const buttonTheme = defineStyleConfig({
  sizes: { mb },
});

const Form = () => {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  return (
    <Box>
      <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
        <Heading
          textTransform={'uppercase'}
          fontSize={{ base: '7rem', md: '3rem', lg: '3rem' }}
          color={'#fff'}
        >
          Або напиши нам!
        </Heading>

        <Stack
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          spacing={'40'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack
            align="center"
            justify="space-around"
            direction={{ base: 'row', md: 'column' }}
          >
            <Tooltip
              label={hasCopied ? 'Email скопійовано!' : 'Скопіювати Email'}
              closeOnClick={false}
              hasArrow
            >
              <IconButton
                aria-label="email"
                bgColor={'#fff'}
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
                bgColor={'#fff'}
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
                bgColor={'#fff'}
                size="lg"
                fontSize="3xl"
                icon={<GrInstagram size="28px" />}
                _hover={{
                  bg: '#f88654',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Link>
          </Stack>

          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="lg"
            p={{ base: '20', md: '8', lg: '8' }}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base"
          >
            <VStack
              width={{ base: '300px', md: '300px', lg: '500px' }}
              height={'100%'}
              spacing={{ base: '15', md: '10', lg: '5' }}
            >
              <FormControl isRequired>
                <FormLabel fontSize={{ base: '4rem', md: '1rem', lg: '1rem' }}>
                  Ім'я
                </FormLabel>

                <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input
                    fontSize={{ base: '3rem', md: '1rem', lg: '1rem' }}
                    height={{ base: '50px', md: '40px', lg: '40px' }}
                    type="text"
                    name="name"
                    placeholder="Ваше ім'я"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={{ base: '4rem', md: '1rem', lg: '1rem' }}>
                  Email
                </FormLabel>

                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input
                    fontSize={{ base: '3rem', md: '1rem', lg: '1rem' }}
                    height={{ base: '50px', md: '40px', lg: '40px' }}
                    type="email"
                    name="email"
                    placeholder="Ваш Email"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={{ base: '4rem', md: '1rem', lg: '1rem' }}>
                  Повідомлення
                </FormLabel>

                <Textarea
                  fontSize={{ base: '3rem', md: '1rem', lg: '1rem' }}
                  height={{ base: '150px', md: 'auto', lg: 'auto' }}
                  name="message"
                  placeholder="Ваше повідомлення"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                type="submit"
                fontSize={{ base: '3rem', md: '1rem', lg: '1rem' }}
                height={{ base: '10rem', md: '2.5rem', lg: '2.5rem' }}
                colorScheme="blue"
                bg="#f88654"
                color="white"
                _hover={{
                  bg: '#000',
                }}
              >
                Надіслати повідомлення
              </Button>
            </VStack>
          </Box>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Form;
