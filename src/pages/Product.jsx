import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 64px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  padding: 24px;
`;
const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 24px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  &:active {
    outline-style: solid;
    outline-color: #333;
    outline-width: 0.5px;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid #333;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #222;
    color: #fff;
  }
  &:active {
    transition: all 0.1s ease-in-out;
    background-color: #777;
  }
`;

const FilterSizeOption = styled.option``;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.productschool.com/wp-content/uploads/2021/07/29105721/Book-Stack-EN.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Product</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            reprehenderit maxime officiis atque quibusdam nulla dolor, eos
            veniam fugit maxime corrupti alias?
          </Description>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color="#333" />
              <FilterColor color="#0062ff" />
              <FilterColor color="#c50000" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IconButton>
                <Remove />
              </IconButton>
              <Amount>2</Amount>
              <IconButton>
                <Add />
              </IconButton>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
