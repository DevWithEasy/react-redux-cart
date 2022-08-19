import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Action/actions';

const Product = ({product}) => {
    const dispath = useDispatch()
    return (
        <div className='product'>
            <div className="product_image">
                <img src={product.img} alt="" />
            </div>
            <div className='product_details'>
                <p>
                    <span className="name">{product.name}</span>
                    <br />
                    <span className='price'>{product.price}$</span>
                </p>
                <button onClick={()=>dispath(addProduct(product.id))}>Add Cart</button>
            </div>
        </div>
    );
};

export default Product;