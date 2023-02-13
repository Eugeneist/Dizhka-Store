import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Flex,
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  defineStyle,
  defineStyleConfig,
  useToast,
} from '@chakra-ui/react';
import { BsTelegram } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import {
  FormLabel,
  FormInput,
  FormTextarea,
  FormContainer,
} from '../../styles/Styles';

const mb = defineStyle({
  width: '20px',
  height: '20px',
});

export const buttonTheme = defineStyleConfig({
  sizes: { mb },
});

const Form = () => {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();
  const toastIdRef = useRef();

  const clearForm = () => {
    let name = document.getElementById('form_name');
    let mail = document.getElementById('form_mail');
    let text = document.getElementById('form_text');
    name.value = '';
    mail.value = '';
    text.value = '';
    toastIdRef.current = toast({
      title: 'Повідомлення відправлено!',
      status: 'success',
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    clearForm();
  };

  return (
    <Flex
      justify={'center'}
      height={{ base: 'auto', md: 'auto', lg: '100vh' }}
      py={{ base: '200px', md: '200px', lg: '20px' }}
      px={{ base: '20px', md: '20px', lg: '20px' }}
    >
      <VStack
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        spacing={{ base: 4, md: 8, lg: 20 }}
      >
        <Heading
          textTransform={'uppercase'}
          fontSize={{ base: '7rem', md: '6rem', lg: '3rem' }}
          color={'#fff'}
          pb={{ base: '45px', md: '55px', lg: '10px' }}
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
            spacing={{ base: '20', md: '30', lg: '35' }}
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
                w={{ base: '9rem', md: '6rem', lg: '3rem' }}
                h={{ base: '9rem', md: '6rem', lg: '3rem' }}
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
                w={{ base: '9rem', md: '6rem', lg: '3rem' }}
                h={{ base: '9rem', md: '6rem', lg: '3rem' }}
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
                w={{ base: '9rem', md: '6rem', lg: '3rem' }}
                h={{ base: '9rem', md: '6rem', lg: '3rem' }}
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
            px={{ base: '30', md: '12', lg: '8' }}
            py={{ base: '30', md: '8', lg: '8' }}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base"
          >
            <VStack
              width={{ base: '300px', md: '500px', lg: '500px' }}
              height={'100%'}
              spacing={{ base: '15', md: '10', lg: '5' }}
            >
              <FormContainer
                id="form_message"
                onSubmit={handleSubmit(onSubmit)}
              >
                {errors.name &&
                  (toastIdRef.current = toast({
                    description: "Будь-ласка, введіть Ваше ім'я!",
                    status: 'error',
                    position: 'top',
                  }))}

                <FormLabel>
                  Ваше ім'я:
                  <FormInput
                    id="form_name"
                    placeholder="Ваше ім'я"
                    type="text"
                    {...register('name', { required: true })}
                  />
                </FormLabel>

                {errors.mail &&
                  (toastIdRef.current = toast({
                    description: 'Будь-ласка, введіть Вашу електронну пошту!',
                    status: 'error',
                    position: 'top',
                  }))}

                <FormLabel>
                  E-mail:
                  <FormInput
                    id="form_mail"
                    placeholder="Ваш Email"
                    type="mail"
                    {...register('mail', { required: true })}
                  />
                </FormLabel>

                {errors.letter &&
                  (toastIdRef.current = toast({
                    description: 'Будь-ласка, введіть Ваше повідомлення!',
                    status: 'error',
                    position: 'top',
                  }))}

                <FormLabel>
                  Повідомлення:
                  <FormTextarea
                    id="form_text"
                    placeholder="Ваше повідомлення"
                    rows={6}
                    resize="none"
                    {...register('letter', {
                      required: false,
                      max: 1000,
                      min: 10,
                      maxLength: 10000,
                    })}
                    {...register('letter', { required: true })}
                  />
                </FormLabel>
              </FormContainer>
              <Button
                type="submit"
                form="form_message"
                fontSize={{ base: '3rem', md: '3rem', lg: '1rem' }}
                height={{ base: '10rem', md: '8rem', lg: '2.5rem' }}
                px={{ base: '15px', md: '15px', lg: '20px' }}
                colorScheme="blue"
                bg="#f88654"
                color="white"
                _hover={{
                  bg: '#000',
                }}
              >
                Надіслати
              </Button>
            </VStack>
          </Box>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Form;
