import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adjustQuantity, removeProduct } from '../redux/Action/actions';

const CartItem = ({product}) => {
    const [qty,setQty] = useState(product.qty)
    const dispatch = useDispatch()
    const qtyHandler = (e)=>{
        setQty(e.target.value)
        dispatch(adjustQuantity(product.id,e.target.value))
    }
    return (
        <div className='product'>
            <div className="product_image">
                <img src={product.image} alt="" />
            </div>
            <div className='product_details'>
                <p>
                    <span className="name">{product.title}</span>
                    <br />
                    <span className='price'>{product.price}$ * {product.qty}</span>
                    <br />
                    <span className=''> ={product.price * product.qty}$</span>
                </p>
                <p className="adjust">
                    <input min="1" type="number" name="qty" value={qty} onChange={qtyHandler}/>
                    <button onClick={()=>dispatch(removeProduct(product.id))} >X</button>
                </p>
            </div>
        </div>
    );
};

export default CartItem;