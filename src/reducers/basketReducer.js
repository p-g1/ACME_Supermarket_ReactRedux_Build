import { ADD_TO_BASKET, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM } from '../actions/actionTypes/actionTypes'
import InitialState from '../State/InitialState';
import { twoForOne, multibuyAdd, multibuyRemove, multibuyDiscountedPrice, multibuyFullPrice } from '../Discounts';

const basketReducer = (state = InitialState, action) => {

    if(action.type === ADD_TO_BASKET) {
   
        let addedItem = state.items.find(item => item.code === action.code);
        let existing_item = state.addedItems.find(item => action.code === item.code);

        addedItem.quantity = (twoForOne(addedItem.code) ? 2 : 1) + (addedItem.quantity ? addedItem.quantity : 0);

        if (existing_item) 
        {
            if (multibuyAdd(addedItem.code, addedItem.quantity)) {
                addedItem.price = multibuyDiscountedPrice;
            }
        }

        let newTotal = addedItem.quantity * addedItem.price / (twoForOne(addedItem.code) ? 2 : 1);

        return existing_item ?  {
                ...state,
                total: newTotal
            } : {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find( item => item.code === action.code);

        addedItem.quantity += twoForOne(addedItem.code) ? 2 : 1;

        if (multibuyAdd(addedItem.code, addedItem.quantity)) {
            addedItem.price = multibuyDiscountedPrice;
        }

        let newTotal = addedItem.quantity * addedItem.price / (twoForOne(addedItem.code) ? 2 : 1);
          
        return {
            ...state,
            addedItems: [...state.addedItems],
            total: newTotal
        }
    }

    if (action.type === SUBTRACT_QUANTITY) {  
        
        let addedItem = state.items.find( item => item.code === action.code); 
        
        if ((addedItem.quantity === 1 || addedItem.quantity === 2) && twoForOne(addedItem.code)) {
            let new_items = state.addedItems.filter( item => item.code !== action.code);
            let newTotal = state.total - addedItem.price;
            
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {

            addedItem.quantity -= twoForOne(addedItem.code) ? 2 : 1;

            if (multibuyRemove(addedItem.code, addedItem.quantity)) {
                addedItem.price = multibuyFullPrice;
            }


            let newTotal = addedItem.quantity * addedItem.price;
            
            return {
                ...state,
                addedItems: [...state.addedItems],
                total: newTotal
            }
        }   
    }

    if (action.type === REMOVE_ITEM) {
      
        let itemToRemove = state.addedItems.find( item => action.code === item.code);
        let new_items = state.addedItems.filter( item => action.code !== item.code);
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
        
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    return state; 
}

export default basketReducer;