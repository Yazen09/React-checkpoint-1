import React from 'react';
import product from '../Product';

function Image() {
  return <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />;
}

export default Image;
