import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { addProduct } from './../redux/Action/actions';

const DetailsContainer = () => {
    const [product,setProduct] = useState({})
    const dispath = useDispatch()
    const {id} = useParams()
    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    })
    console.log(product)
    return (
        <>
        {
            product ? 
            <div className='product mt-16 mx-2'>
            <div className="product_image">
                <img src={product.image} alt="" />
            </div>
            <div className='product_details'>
                <p className='name'>
                    {product.title}
                </p>
                <p className='category'>
                    <span className='font-bold'>Category:</span>
                    {product.category}
                </p>
                <p className='category'>
                    <span className='font-bold'>Category:</span>
                    {product.price}$
                </p>
                <p>{product.description}
                </p>
                <button onClick={()=>dispath(addProduct(product.id))}>Add Cart</button>
            </div>
        </div>
        :
        ''
        }
        </>
    );
};

export default DetailsContainer;