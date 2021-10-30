import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 0 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh", marginBottom: "5px" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  background-color: rgba(0, 162, 255, 0.212);
`;
const Title = styled.h2`
  color: white;
  margin: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ img, title }) => {
  return (
    <Container>
      <Image src={img} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
