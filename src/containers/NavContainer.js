import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavContainer = () => {
    const [count,setCount] = useState()
    const {cart} = useSelector(state=> state.product)
    useEffect(()=>{
        let total = 0;
        cart.forEach(item=> {
            total += item.qty;
        })
        setCount(total)
    },[cart,count])

    return (
        <div className='nav-container'>
            <Link to='/'>
                <span className='logo'>Redux Cart</span>
            </Link>
            <div className='cart-icon'>
                <Link to='/cart'>
                    <p>
                        <AiOutlineShoppingCart/>
                        <span>{count}</span>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default NavContainer;