import React from "react";
import styled from "styled-components";
import ProductsList from "../components/ProductsList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  background-color: lightgray;
`;

function HomePage({ productList }) {
  return (
    <Container>
      <ProductsList productList={productList} />
    </Container>
  );
}

export default HomePage;
