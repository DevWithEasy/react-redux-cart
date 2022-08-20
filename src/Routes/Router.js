import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import CartContainer from '../containers/CartContainer';
import DetailsContainer from '../containers/DetailsContainer';
import ProductContainer from '../containers/ProductContainer';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/product/:id" element={<DetailsContainer/>}/>
        </Routes>
    );
};

export default Router;