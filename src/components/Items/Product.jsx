import styled from "styled-components";
import React from "react";
import { Favorite, Search, ShoppingCart } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4f9ff;
  position: relative;
  &:hover ${Info} {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
`;
const Image = styled.img`
  /* width: 100%; */
  height: 75%;
  z-index: 2;
  /* object-fit: cover; */
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
`;

const Icon = styled.div`
  transition: all 0.3s;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0px 5px;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: #f6f8ff;
    transform: scale(1.2);
  }
`;
const Product = ({ img }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <IconButton>
            <ShoppingCart />
          </IconButton>
        </Icon>
        <Icon>
          <IconButton>
            <Search />
          </IconButton>
        </Icon>
        <Icon>
          <IconButton>
            <Favorite />
          </IconButton>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
