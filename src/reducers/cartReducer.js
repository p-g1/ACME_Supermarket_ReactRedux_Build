import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/action-types/cart-actions'
import fruit_tea from '../../src/images/fruit_tea.jpg';
import strawberries from '../../src/images/strawberries.jpg';
import coffee from '../../src/images/coffee.jpg';

const initState = {
    items: [
        {
            "code": "FR1",
            "name": "Fruit tea",
            "price": "3.11",
            "img": fruit_tea
        },
        {
            "code": "SR1",
            "name": "Strawberries",
            "price": "5.00",
            "img": strawberries
        },
        {
            "code": "CF1",
            "name": "Coffee",
            "price": "11.23",
            "img": coffee
        }
    ]
    ,
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    
    if(action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.code === action.code);

        let existed_item = state.addedItems.find(item => action.code === item.code);

        if(existed_item) 
        {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if(action.type === REMOVE_ITEM){
      
        let itemToRemove= state.addedItems.find(item=> action.code === item.code)
        let new_items = state.addedItems.filter(item=> action.code !== item.code)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.code === action.code)
    
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          
          return {
              ...state,
              addedItems: [...state.addedItems],
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        // item to be removed
        let addedItem = state.items.find(item=> item.code === action.code) 
        
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.code !== action.code)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: [...state.addedItems],
                total: newTotal
            }
        }   
    }
    console.log(state);
return state;
    
}

export default cartReducer;