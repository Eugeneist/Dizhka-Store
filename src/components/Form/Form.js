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
} from "@chakra-ui/react";
import { BsPerson, BsTelegram } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const Form = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Box>
      <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
        <Heading textTransform={"uppercase"} fontSize={"3rem"} color={"#fff"}>
          Або напиши нам!
        </Heading>

        <Stack
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          spacing={"40"}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            align="center"
            justify="space-around"
            direction={{ base: "row", md: "column" }}
          >
            <Tooltip
              label={hasCopied ? "Email скопійовано!" : "Скопіювати Email"}
              closeOnClick={false}
              hasArrow
            >
              <IconButton
                aria-label="email"
                bgColor={"#fff"}
                size="lg"
                fontSize="3xl"
                icon={<MdEmail />}
                _hover={{
                  bg: "#f88654",
                  color: useColorModeValue("white", "gray.700"),
                }}
                onClick={onCopy}
                isRound
              />
            </Tooltip>

            <Link href="tg://resolve?domain=nickname" isExternal>
              <IconButton
                aria-label="telegram"
                bgColor={"#fff"}
                size="lg"
                fontSize="3xl"
                icon={<BsTelegram />}
                _hover={{
                  bg: "#f88654",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>

            <Link href="https://www.instagram.com/nickname" isExternal>
              <IconButton
                aria-label="instagram"
                bgColor={"#fff"}
                size="lg"
                icon={<GrInstagram size="28px" />}
                _hover={{
                  bg: "#f88654",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
          </Stack>

          <Box
            bg={useColorModeValue("white", "gray.700")}
            borderRadius="lg"
            p={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
          >
            <VStack
              width={{ base: "none", md: "300px", lg: "500px" }}
              spacing={5}
            >
              <FormControl isRequired>
                <FormLabel>Ім'я</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input type="text" name="name" placeholder="Ваше ім'я" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input type="email" name="email" placeholder="Ваш Email" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Повідомлення</FormLabel>

                <Textarea
                  name="message"
                  placeholder="Ваше повідомлення"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                bg="#f88654"
                color="white"
                _hover={{
                  bg: "#000",
                }}
                isFullWidth
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
