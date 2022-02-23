import React from "react";
import { useParams } from "react-router-dom";
import ProductComp from "../components/ProductComp";

function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <ProductComp id={id} />
    </div>
  );
}

export default ProductPage;
