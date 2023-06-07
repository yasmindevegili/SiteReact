import React from "react";
import { useParams } from "react-router-dom";
import "./products.css";

function Products() {
  const { type } = useParams();
  return (
    <div className="wrapper">
        <div className="title">
      <h1>Our Products</h1>
      <div className="paragraph">
      <p className="left-p">
        Product: {type}
      </p>
      </div>
    </div>
    </div>
  );
}

export default Products;
