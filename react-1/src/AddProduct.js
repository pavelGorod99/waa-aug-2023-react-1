import React from "react";

const AddProduct = ({ onSubmit, onChange, product }) => {
  
  const { name, type, quantity } = product;
  
  return (

    <div className="add-product-container">

      <h2>Add New Product</h2>

      <form onSubmit={onSubmit}>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={onChange}
            value={name}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            id="type"
            name="type"
            type="text"
            onChange={onChange}
            value={type}
            placeholder="Enter product type"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            onChange={onChange}
            value={quantity}
            placeholder="Enter product quantity"
            required
          />
        </div>
        
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
