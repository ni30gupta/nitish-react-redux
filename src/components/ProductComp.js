import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setProducts } from "../actions";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
`;
const Left = styled.div`
  padding: 10px;
  flex: 1;
  height: 80vh;
  object-fit: contain;
`;
const Image = styled.img`
  height: 100%;
  width: "100%";
  height: "65vh";
  object-fit: "contain";
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > * {
    margin-bottom: 15px;
  }
`;
const Title = styled.h1``;

const Price = styled.h1``;

const Desc = styled.p`
  font-size: 15px;
  word-spacing: 2px;
`;

const ProductComp = (props) => {
  const products = useSelector((state) => state.products);
  console.log(products);
  let product = products.find((prod) => prod.id == props.id);
  console.log(product);
  console.log(props.id);

  return (
    <>
      <Container>
        <Left>
          <Image src={`/images/image${product.id}.jpg`} />
        </Left>
        <Right>
          <Title>{product.name}</Title>
          <Price>Rs.{product.price}</Price>
          <Desc>{product.description}</Desc>
        </Right>
      </Container>
    </>
  );
};

export default ProductComp;
