import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Flex, Box, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { Container, SectionInner } from "../../styles/Styles";
import { ProductCard } from "../ProductCard";
import { Loader } from "../Loader";

import menu_all from "../../assets/images/store menu/all.png";
import menu_all_hover from "../../assets/images/store menu/all_hover.png";
import menu_beer from "../../assets/images/store menu/beer.png";
import menu_beer_hover from "../../assets/images/store menu/beer_hover.png";
import menu_gin from "../../assets/images/store menu/gin.png";
import menu_gin_hover from "../../assets/images/store menu/gin_hover.png";
import menu_whiskey from "../../assets/images/store menu/whiskey.png";
import menu_whiskey_hover from "../../assets/images/store menu/whiskey_hover.png";
import menu_vodka from "../../assets/images/store menu/vodka.png";
import menu_vodka_hover from "../../assets/images/store menu/vodka_hover.png";

const ProductList = () => {
  const state = useSelector((state) => state.productsReducer);

  const [filter, setFilter] = useState(state);

  const filterProducts = (category) => {
    const filteredList = state.filter((x) => x.category === category);
    setFilter(filteredList);
  };

  if (!state) {
    return <Loader />;
  }

  return (
    <Container style={{ backgroundColor: "#000", color: "#fff" }}>
      <SectionInner>
        <Flex gap={10} alignItems={"center"} justifyContent={"center"} pb={50}>
          <Box
            onClick={() => setFilter(state)}
            width={"100px"}
            height={"100px"}
            backgroundImage={menu_all}
            backgroundSize={"cover"}
            cursor={"pointer"}
            transition={"all ease 0.3s"}
            _hover={{
              backgroundImage: `${menu_all_hover}`,
              transition: "all ease 0.3s",
            }}
          ></Box>
          <Box
            onClick={() => filterProducts("пиво")}
            width={"100px"}
            height={"100px"}
            backgroundImage={menu_beer}
            backgroundSize={"cover"}
            cursor={"pointer"}
            transition={"all ease 0.3s"}
            _hover={{
              backgroundImage: `${menu_beer_hover}`,
              transition: "all ease 0.3s",
            }}
          ></Box>
          <Box
            onClick={() => filterProducts("джин")}
            width={"100px"}
            height={"100px"}
            backgroundImage={menu_gin}
            backgroundSize={"cover"}
            cursor={"pointer"}
            transition={"all ease 0.3s"}
            _hover={{
              backgroundImage: `${menu_gin_hover}`,
              transition: "all ease 0.3s",
            }}
          ></Box>
          <Box
            onClick={() => filterProducts("віскі")}
            width={"100px"}
            height={"100px"}
            backgroundImage={menu_whiskey}
            backgroundSize={"cover"}
            cursor={"pointer"}
            transition={"all ease 0.3s"}
            _hover={{
              backgroundImage: `${menu_whiskey_hover}`,
              transition: "all ease 0.3s",
            }}
          ></Box>
          <Box
            onClick={() => filterProducts("горілка")}
            width={"100px"}
            height={"100px"}
            backgroundImage={menu_vodka}
            backgroundSize={"cover"}
            cursor={"pointer"}
            transition={"all ease 0.3s"}
            _hover={{
              backgroundImage: `${menu_vodka_hover}`,
              transition: "all ease 0.3s",
            }}
          ></Box>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {filter.map(
            ({
              id,
              title,
              description,
              details,
              price,
              rating,
              category,
              thumbnail,
            }) => (
              <NavLink to={`/product/${id}`}>
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  details={details}
                  price={price}
                  rating={rating}
                  category={category}
                  thumbnail={thumbnail}
                />
              </NavLink>
            )
          )}
        </Grid>
      </SectionInner>
    </Container>
  );
};

export default ProductList;
