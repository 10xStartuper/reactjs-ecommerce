import { Badge, IconButton } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px" })}
`;

//Left side of a Navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid #333;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;

//Central part of ne Navbar goes here
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: "2" })}
`;
const Logo = styled.h2`
  ${mobile({ fontSize: "20px" })}
`;

//Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 6 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search here" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TechBook.</Logo>
        </Center>
        <Right>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Badge badgeContent={4} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
