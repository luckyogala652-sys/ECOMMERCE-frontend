import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [subcategory, setSubcategory] = useState("all");

  useEffect(() => {
    fetch('https://ecommerce-backend-ejce.onrender.com/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  // FILTER LOGIC
  const filteredProducts = products.filter(product => {
    if (category !== "all" && product.category !== category) return false;
    if (subcategory !== "all" && product.subcategory !== subcategory) return false;
    return true;
  });

  return (
    <>
      {/* CATEGORY BUTTONS */}
      <div className="categories">
        <button onClick={() => {
          setCategory("all");
          setSubcategory("all");
        }}>All</button>

        <button onClick={() => {
          setCategory("toiletries");
          setSubcategory("all");
        }}>Toiletries</button>

        <button onClick={() => {
          setCategory("beverages");
          setSubcategory("all");
        }}>Beverages</button>
      </div>

      {/* SUBCATEGORY BUTTONS */}
      {category === "toiletries" && (
        <div className="subcategories">
          <button onClick={() => setSubcategory("soaps")}>Soaps</button>
          <button onClick={() => setSubcategory("toothpaste")}>Toothpaste</button>
          <button onClick={() => setSubcategory("others")}>Others</button>
        </div>
      )}

      {category === "beverages" && (
        <div className="subcategories">
          <button onClick={() => setSubcategory("cocoa and chocolate powder")}>
            Cocoa & Chocolate
          </button>
        </div>
      )}

      {/* PRODUCT LIST */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <ProductCard key={item.id} product={item} addToCart={addToCart} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
}

export default ProductList;