  // ProductDetail.jsx
  import React, { useState, useEffect } from 'react';
  import { useParams, Link } from 'react-router-dom';
  import data from './store';

  function ProductDetail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
      const selectedProduct = data.find(
        (product) => product.id === parseInt(id)
      );
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }, [id]);

    return (
      <div>
        <h3>{product.title}</h3>
        <img src={product.imageUrl} alt={product.title} />
        <p>Price: ${product.price}</p>
        <p>Size: {product.size}</p>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  export default ProductDetail;