import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@chakra-ui/react";

import { Container, SectionInner } from "../../styles/Styles";
import { ProductCard } from "../ProductCard";
import { ProductFilter } from "../ProductFilter";
import { Loader } from "../Loader";

const ProductList = () => {
  const state = useSelector((state) => state.productsReducer);

  const [filter, setFilter] = useState(state);

  if (!state) {
    return <Loader />;
  }

  return (
    <Container style={{ backgroundColor: "#000", color: "#fff" }}>
      <SectionInner>
        <ProductFilter state={state} setFilter={setFilter} />
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {filter.map((product) => (
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

export default ProductList;
