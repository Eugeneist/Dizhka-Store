import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { MdLocalShipping } from "react-icons/md";

const Product = () => {
  const state = useSelector((state) => state.productsReducer);
  const { id } = useParams();

  const dispatch = useDispatch();

  const toast = useToast();
  const toastIdRef = useRef();

  const addProduct = (product) => {
    dispatch(addToCart(product));
    toastIdRef.current = toast({
      status: "success",
      isClosable: true,
      description: "Додано до Кошику!",
    });
  };

  const [product, setProduct] = useState(state);

  // useEffect(() => {
  //   const filteredList = state.filter((x) => x.id === id);
  //   setProduct(filteredList);
  // }, [id, state]);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={state[id - 1].thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {state[id - 1].title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {state[id - 1].price} ГРН
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {state[id - 1].descriptionTitle}
              </Text>
              <Tabs isFitted variant="enclosed">
                <TabList>
                  <Tab>Опис</Tab>
                  <Tab>Рецензія</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Text fontSize={"lg"}>{state[id - 1].description}</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize={"lg"}>{state[id - 1].review}</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Деталі
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    {state[id - 1].details}
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            onClick={() => addProduct(product)}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Додати до кошику
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 робочих дня</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Product;
