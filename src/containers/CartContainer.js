import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartItem from '../component/CartItem';

const CartContainer = () => {
    const [count,setCount] = useState()
    const [price,setPrice] = useState()
    const {cart} = useSelector(state=> state.product)
    useEffect(()=>{
        let total = 0;
        let totalPrice= 0;
        cart.forEach(item=> {
            total += item.qty;
            totalPrice += item.qty*item.price
        })
        setCount(total)
        setPrice(totalPrice)
    },[cart,count,price])
    return (
        <div className="cart-container">
            <h1 className="title">Cart</h1>
            <div className="cart">
                <span>
                    <AiOutlineShoppingCart size={35}/>
                    <p>{count}</p>
                </span>
            </div>
            <div className="flex justify-between gap-x-1">
                <div className="products">
                    {
                        cart.map(product=><CartItem key={product.id} product={product}/>)
                    }
                </div>
                <div className="price">
                    <p className="">
                        <span className="w-1/2">Total Product :</span>
                        <span className="w-1/2 flex justify-end">{count}</span>
                    </p>
                    <p className="">
                        <span className="w-1/2">Total Price :</span>
                        <span className="w-1/2 flex justify-end">{price}</span>
                    </p>
                    <button className="py-1 px-2 bg-red-500 text-white rounded mt-5">Process to checkout</button>
                </div>
            </div>
        </div>
    );
};
export default CartContainer