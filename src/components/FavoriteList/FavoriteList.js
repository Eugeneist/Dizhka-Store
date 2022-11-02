import { Container, SectionInner } from "../../styles/Styles";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import { Grid, Text, Button } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

import cart_empty from "../../assets/images/cart_empty.png";

const FavoriteList = () => {
  const favorite = useSelector((state) => state.favoriteReducer);

  if (favorite.length < 1) {
    return (
      <Container
        bgImage={cart_empty}
        style={{
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          backgroundSize: "40%",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text fontSize="1.5rem" fontFamily="'Montserrat', sans-serif" pb={25}>
          Ваш лист побажань порожній! Це можна виправити у Лавці.
        </Text>
        <NavLink to="/store">
          <Button
            leftIcon={<TiShoppingCart />}
            color="#fff"
            bgColor="#f88654"
            variant="solid"
            py={"7"}
            px={"7"}
            _hover={{
              bgColor: "#fff",
              color: "#000",
            }}
          >
            ДО ЛАВКИ!
          </Button>
        </NavLink>
      </Container>
    );
  }

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
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {favorite.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              descriptionTitle={product.descriptionTitle}
              description={product.description}
              details={product.details}
              price={product.price}
              rating={product.rating}
              category={product.category}
              thumbnail={product.thumbnail}
              product={product}
            />
          ))}
        </Grid>
      </SectionInner>
    </Container>
  );
};

export default FavoriteList;
