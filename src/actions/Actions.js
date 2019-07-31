import { ADD_TO_BASKET, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM } from './actionTypes/actionTypes';

export const addToBasket = code => {
    return {
        type: ADD_TO_BASKET,
        code
    }
}

export const addQuantity = code => {
    return{
        type: ADD_QUANTITY,
        code
    }
}

export const subtractQuantity = code => {
    return{
        type: SUBTRACT_QUANTITY,
        code
    }
}

export const removeItem = code => {
    return{
        type: REMOVE_ITEM,
        code
    }
}