import { useState } from "react";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

import productsData from "./data/products.json";

import "./App.css";

export default function App() {
  const [products] = useState(productsData);
  const [tempProduct, setTempProduct] = useState(null);

  return (
    <section className="container">
      <div className="row mt-5">
        <ProductList products={products} onProductClick={setTempProduct} />
        <ProductDetail tempProduct={tempProduct} />
      </div>
    </section>
  );
}
