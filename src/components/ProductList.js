
import React, { useEffect, useState} from 'react';
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
  const [products, setProducts]= useState([]);

  useEffect(()=> {
    fetch('https://ecommerce-backend-ejce.onrender.com/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('Failed to load products:',err));
  }, []);

  return (
    <div className='product-list'>
      {products && products.length >0 ? (
        products.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))
    ) :(
      <p>Loading products...</p>
    )}
    </div>
  );
}

export default ProductList;