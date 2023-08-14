import React from "react";
import Product from "./Product";

const ProductList = ({ products, handleClick }) => {
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => (
            <Product key={data.id} data={data} handleClick={handleClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
