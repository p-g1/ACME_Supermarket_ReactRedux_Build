import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './action-types/cart-actions';

export const addToCart = code => {
    return {
        type: ADD_TO_CART,
        code
    }
}

export const removeItem = code => {
    return{
        type: REMOVE_ITEM,
        code
    }
}

export const subtractQuantity = code => {
    return{
        type: SUB_QUANTITY,
        code
    }
}

export const addQuantity = code => {
    return{
        type: ADD_QUANTITY,
        code
    }
}