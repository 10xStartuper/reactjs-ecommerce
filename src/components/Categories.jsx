import React from "react";
import styled from "styled-components";
import { categories } from "../data";

import CategoryItem from "./Items/CategoryItem";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    padding: "0px",
  })}/* padding: 12px 64px; */
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((element) => (
        <CategoryItem
          key={element.id}
          img={element.img}
          title={element.title}
        />
      ))}
    </Container>
  );
};

export default Categories;
