import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #3f51b5;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <>
      <Container>
        Super Deal! Free shipping on orders over 250 000 UZS
      </Container>
    </>
  );
};

export default Announcement;
