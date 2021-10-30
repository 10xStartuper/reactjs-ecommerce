import React from "react";
import styled from "styled-components";
import { categories } from "../data";

import CategoryItem from "./Items/CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  /* padding: 12px 64px; */
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
