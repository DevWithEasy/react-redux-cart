import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Action/actions';
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    const dispath = useDispatch()
    return (
        <div className='product'>
            <div className="product_image">
                <img src={product.image} alt="" />
            </div>
            <div className='product_details'>
               <Link to={`/product/${product.id}`}>
               <p className='name'>
                    {product.title}
                </p>
               </Link>
                <p className='category'>{product.category}</p>
                <p className=''>Rating {product.rating.rate} of {product.rating.count}</p>
                <p className='category'>Price: {product.price}$</p>
                <p>{product.description.slice(0,75)} <Link to={`/product/${product.id}`} className="text-blue-500"> Read more</Link>
                </p>
                <button onClick={()=>dispath(addProduct(product.id))}>Add Cart</button>
            </div>
        </div>
    );
};

export default Product;