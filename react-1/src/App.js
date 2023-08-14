import { useState } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Product from "./Product";

function App() {

  const [ newProduct, setNewProduct ] = useState({
    id: "",
    name: "",
    type: "",
    quantity: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setNewProduct({...newProduct,[e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    const productWithId = {...newProduct, id: products.length + 1};
    e.preventDefault();
    setProducts([...products, productWithId]);
    setNewProduct({
      id: "",
      name: "",
      type: "",
      quantity: "",
    });
  };

  const handleClick = (id) => {
    const newProducts = products.filter((data) => data.id !== id);
    setProducts(newProducts);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "T-shirt",
      type: "Apparel",
      quantity: 50,
    },
    {
      id: 2,
      name: "Pencil Set",
      type: "Stationery",
      quantity: 40,
    },
    {
      id: 3,
      name: "Smartphone",
      type: "Electronics",
      quantity: 8,
    },
    {
      id: 4,
      name: "Sunglasses",
      type: "Accessories",
      quantity: 25,
    }
  ]);

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <ProductList products={products} handleClick={handleClick} />
      <AddProduct onSubmit={onSubmit} product={newProduct} onChange={onChange} />
    </div>
  );
}

export default App;
