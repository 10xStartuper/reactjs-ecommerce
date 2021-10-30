import styled from "styled-components";
import React from "react";
import { popularProducts } from "../data";
import Product from "./Items/Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 64px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} img={product.img} />
      ))}
    </Container>
  );
};

export default Products;
