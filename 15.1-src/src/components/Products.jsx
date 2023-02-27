import React, { useState, useEffect } from 'react';
import data from './store';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  );
}

export default Products;
