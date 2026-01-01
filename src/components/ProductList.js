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
      <div className="filter-bar">
        {["all", "toiletries", "snacks", "cream", "desserts", "beverages"].map(cat => (
          <button
            key={cat}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            onClick={() => {
            setCategory(cat);
            setSubcategory("all");
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* SUBCATEGORY BUTTONS */}
      {category === "toiletries" && (
        <div className="sub-filter-bar">
          {["soaps", "toothpaste"].map(sub => (
            <button
              key={sub}
              className={`sub-filter-btn ${subcategory === sub ? "active" : ""}`}
              onClick={() => setSubcategory(sub)}
            >
              {sub.replace("-", " ")}
            </button>
          ))}
        </div>
      )}

      {category === "snacks" && (
        <div className="sub-filter-bar">
          {["biscuits", "nuts"].map(sub => (
            <button
              key={sub}
              className={`sub-filter-btn ${subcategory === sub ? "active" : ""}`}
              onClick={() => setSubcategory(sub)}
            >
              {sub.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    
      {category === "cream" && (
        <div className="sub-filter-bar">
          {["body-cream"].map(sub => (
            <button
              key={sub}
              className={`sub-filter-btn ${subcategory === sub ? "active" : ""}`}
              onClick={() => setSubcategory(sub)}
            >
              {sub.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
      {category === "desserts" && (
        <div className="sub-filter-bar">
          {["frozen desserts"].map(sub => (
            <button
              key={sub}
              className={`sub-filter-btn ${subcategory === sub ? "active" : ""}`}
              onClick={() => setSubcategory(sub)}
            >
              {sub.replace("-", " ")}
            </button>
          ))}
        </div>
      )}

      {category === "beverages" && (
        <div className="sub-filter-bar">
          {["cocoa and chocolate powder", "milk and diary powder"].map(sub => (
            <button
              key={sub}
              className={`sub-filter-btn ${subcategory === sub ? "active" : ""}`}
              onClick={() => setSubcategory(sub)}
            >
              {sub.replace("-", " ")}
            </button>
          ))}
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