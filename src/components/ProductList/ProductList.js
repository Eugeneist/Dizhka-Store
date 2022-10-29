import { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { axios } from "../../helpers";
import { Container, SectionInner } from "../../styles/Styles";
import { ProductCard } from "../ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const filterProducts = (category) => {
    const filteredList = products.filter((x) => x.category === category);
    setFilter(filteredList);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/products`)
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, ...data]);
        setFilter((prevProducts) => [...prevProducts, ...data]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container
        style={{ height: "100vh", backgroundColor: "#000", color: "#fff" }}
      >
        <SectionInner>Loading...</SectionInner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        style={{ height: "100vh", backgroundColor: "#000", color: "#fff" }}
      >
        <SectionInner>Error!</SectionInner>
      </Container>
    );
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
