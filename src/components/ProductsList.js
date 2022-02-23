import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { setProducts } from "../actions";

const FilterSection = styled.div`
  width: 100%;
  margin-bottom: 25px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0 10px;
  }
`;
const Info = styled.p``;
const Filter = styled.div``;

const ProductSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Product = styled.div`
  width: 300px;
  height: 400px;
  padding: 5px;
  background-color: white;
  margin: 10px;
  &:hover {
    transform: scale(1.01);
    transition: all 0.5s ease;
  }
`;
const ImageContainer = styled.div`
  height: 70%;
`;
const Image = styled.img`
  width: 90%;
`;
const InfoContainer = styled.div``;
const Name = styled.p``;
const Model = styled.p``;
const Price = styled.p``;
const Action = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;
const Button = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    font-weight: 700;
    transition: 0.5s ease-out;
  }
`;
function ProductsList({ productList }) {
  const [category, setCategory] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(productList);

  const fetchCategoryList = async () => {
    let response;
    try {
      response = await axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/categories"
      );

      setCategory([...response.data, { id: 3, name: "All" }]);
    } catch (error) {
      console.log(error.message);
      response = error.message;
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, [products]);

  const handleChange = (e) => {
    const catId = parseFloat(e.target.value);

    if (catId === 3) {
      dispatch(setProducts(productList));
    } else {
      const myProducts = productList.filter((item) => {
        return item.categoryId === catId;
      });
      dispatch(setProducts(myProducts));
    }
  };
  console.log(products);

  return (
    <>
      <FilterSection>
        <Info>Filter Category</Info>
        <Filter>
          <select name="category" onChange={handleChange}>
            <option value="" selected disabled>
              Select Category
            </option>
            {category.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </Filter>
      </FilterSection>
      <ProductSection>
        {products.map((item) => (
          <Product key={item.id}>
            <ImageContainer>
              <Image src={`/images/image${item.id}.jpg`} />
            </ImageContainer>
            <InfoContainer>
              <Name>{item.name}</Name>
              <Model>{item.model}</Model>
              <Price>{item.price}</Price>
            </InfoContainer>
            <Action>
              <Button>Add to Cart</Button>
              <Link to={`product/${item.id}`}>
                <Button>View Details</Button>{" "}
              </Link>
            </Action>
          </Product>
        ))}
      </ProductSection>
    </>
  );
}

export default ProductsList;
