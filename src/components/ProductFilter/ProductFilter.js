import { Flex, Box } from "@chakra-ui/react";
import { FilterIcons } from "../FilterIcons";
import "../../App.css";

const ProductFilter = ({ state, setFilter }) => {
  const filterProducts = (category) => {
    const filteredList = state.filter((x) => x.category === category);
    setFilter(filteredList);
  };

  return (
    <Flex gap={10} alignItems={"center"} justifyContent={"center"} pb={50}>
      <Box
        onClick={() => setFilter(state)}
        width={"100px"}
        height={"100px"}
        cursor={"pointer"}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={"all"} />
      </Box>
      <Box
        onClick={() => filterProducts("пиво")}
        width={"100px"}
        height={"100px"}
        cursor={"pointer"}
        className="filter_box"
        transition="all ease 0.4s"
      >
        <FilterIcons image={"beer"} />
      </Box>
      <Box
        onClick={() => filterProducts("джин")}
        width={"100px"}
        height={"100px"}
        cursor={"pointer"}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={"gin"} />
      </Box>
      <Box
        onClick={() => filterProducts("віскі")}
        width={"100px"}
        height={"100px"}
        cursor={"pointer"}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={"whiskey"} />
      </Box>
      <Box
        onClick={() => filterProducts("горілка")}
        width={"100px"}
        height={"100px"}
        cursor={"pointer"}
        transition="all ease 0.4s"
        className="filter_box"
      >
        <FilterIcons image={"vodka"} />
      </Box>
    </Flex>
  );
};

export default ProductFilter;
