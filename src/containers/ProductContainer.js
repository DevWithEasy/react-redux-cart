import React from 'react';
import Product from '../component/Product';
import { products } from '../data/json/products';

const ProductContainer = () => {
    return (
        <div className="product-container">
            <h1 className="title">Products</h1>
            {
                products.map((product,i) => <Product key={i} product={product}/>)
            }
            
        </div>
    );
};


export default ProductContainer;