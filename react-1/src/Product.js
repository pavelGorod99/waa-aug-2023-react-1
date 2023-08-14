import React from "react";

const Product = ({ data, handleClick }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.type}</td>
    <td>{data.quantity}</td>
    <td>
      {" "}
      <button onClick={() => handleClick(data.id)}>Remove</button>
    </td>
  </tr>
);

export default Product;
