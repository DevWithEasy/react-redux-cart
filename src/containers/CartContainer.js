import React from 'react';
import {useSelector} from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartItem from '../component/CartItem';

const CartContainer = () => {
    const {cart} = useSelector(state=> state.product)
    console.log(cart)
    return (
        <div className="cart-container">
            <h1 className="title">Cart</h1>
            <div className="cart">
                <span>
                    <AiOutlineShoppingCart size={35}/>
                    <p>{cart.length}</p>
                </span>
            </div>
            <div className="products">
                {
                    cart.map(product=><CartItem key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};
export default CartContainer