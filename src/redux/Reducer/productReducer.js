import { products } from "../../data/json/products"
import { ADD_PRODUCT,REMOVE_PRODUCT,ADJUST_QTY, LOAD_ALL_PRODUCTS,LOAD_CURRENT_PRODUCT } from "../Action/actions"

const initailState = {
    products:[...products],
    cart:[]
}
export const productReducer = (state = initailState, action) => {
    switch (action.type) {
        case LOAD_ALL_PRODUCTS:
            return{
                ...state,
                products:[...state.products,...action.products]
            }
        case ADD_PRODUCT:
           //GET PRODUCT FROM PRODUCT ARRAY
            const product = state.products.find(product=>product.id === action.id)
           //CHECK THIS PRODUCT IS ADDED ALREADY IN CART
            const inCart =state.cart.find(product=>product.id === action.id ? true : false)
            return{
                // ...state,
                // cart: inCart? 
                //     state.cart.map(product =>product.id === action.id ? {...product,qty:product.qty+1}:product)
                //     :
                // [...state.cart,{...product,qty:1}]
                ...state,
                cart:inCart ? state.cart.map(item=>item.id===action.id ? {...item,qty:item.qty+1}:item): [...state.cart,{...product,qty:1}]
            }
        
        case REMOVE_PRODUCT:
            return{
                ...state,
                cart: state.cart.filter(product => product.id !== action.id)
            }
        
        case ADJUST_QTY:
            return{
                ...state,
                cart:state.cart.map(item=> item.id === action.id? {...item,qty:+action.qty} : item)
            }

        case LOAD_CURRENT_PRODUCT:
            return{

            }
        default:
            return state
    }
}