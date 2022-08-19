import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../redux/Action/actions';

const CartItem = ({product}) => {
    const [qty,setQty] = useState(product.qty)
    const dispatch = useDispatch()
    const qtyHandler = (e)=>{
        setQty(e.target.value)
    }
    console.log(qty)
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
                <p className="adjust">
                    <input type="number" name="qty" value={qty} onChange={qtyHandler}/>
                    <button onClick={()=>dispatch(removeProduct(product.id))} >X</button>
                </p>
            </div>
        </div>
    );
};

export default CartItem;