import React, { useEffect, useState } from 'react';
import Product from '../component/Product';
// import products from '../data/json/products.json';

const ProductContainer = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    })
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