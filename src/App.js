import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import axios from "axios";
import { setCategories, setProducts } from "./actions";

function App() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);

  React.useEffect(() => {
    callProductAPI();
  }, []);

  const callProductAPI = () => {
    axios
      .get("https://aveosoft-react-assignment.herokuapp.com/products")
      .then((resp) => {
        dispatch(setProducts(resp.data));
        setProductList(resp.data);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage productList={productList} />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
