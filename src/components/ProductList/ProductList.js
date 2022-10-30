import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@chakra-ui/react";

import { Container, SectionInner } from "../../styles/Styles";
import { ProductCard } from "../ProductCard";
import { Loader } from "../Loader";

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
            )
          )}
        </Grid>
      </SectionInner>
    </Container>
  );
};

export default ProductList;
