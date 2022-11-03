import { Container, SectionInner } from "../../styles/Styles";
import {
  Flex,
  Image,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useColorModeValue,
  useClipboard,
} from "@chakra-ui/react";

import { BsTelegram } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import "../../App.css";

import map from "../../assets/images/map.png";
import flag from "../../assets/images/flag.png";

const Contacts = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Container
      style={{
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <SectionInner>
        <Flex align={"center"} pb={50}>
          <Image width={"50%"} height={"50%"} src={map} alt="map" />
          <Image pl={20} width={"50%"} height={"50%"} src={flag} alt="flag" />
        </Flex>
        <Stack
          width={"40%"}
          align="center"
          justify="space-around"
          margin={"0 auto"}
          direction={"row"}
        >
          <Tooltip
            label={hasCopied ? "Email скопійовано!" : "Скопіювати Email"}
            closeOnClick={false}
            hasArrow
          >
            <IconButton
              aria-label="email"
              bgColor={"#000"}
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
              bgColor={"#000"}
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
              bgColor={"#000"}
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
      </SectionInner>
    </Container>
  );
};

export default Contacts;
