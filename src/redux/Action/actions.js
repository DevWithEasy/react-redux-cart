//CREATE TYPES

export const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADJUST_QTY = 'ADJUST_QTY';

//CREATE ACTIONS

export const loadAllProducts = (products) => {
    return  {
        type: LOAD_ALL_PRODUCTS,
        products
    }
}

export const addProduct = (id) => {
    return  {
        type: ADD_PRODUCT,
        id
    }
}

export const removeProduct = (id) => {
    return  {
        type: REMOVE_PRODUCT,
        id
    }
}

export const adjustQuantity = (id,qty) => {
    return  {
        type: ADJUST_QTY,
        id,qty
    }
}
