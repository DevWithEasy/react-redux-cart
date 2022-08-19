import React from 'react';
import Product from '../component/Product';
import { products } from '../data/json/products';
// import {useDispatch} from 'react-redux'
// import { loadAllProducts } from '../redux/Action/actions';

const ProductContainer = (props) => {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(loadAllProducts(products))
    // })
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