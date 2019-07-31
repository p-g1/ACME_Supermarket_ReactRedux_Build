import fruit_tea from '../../src/images/fruit_tea.jpg';
import strawberries from '../../src/images/strawberries.jpg';
import coffee from '../../src/images/coffee.jpg';

const initialState = {
    items: [
        {
            "code": "FR1",
            "name": "Fruit tea",
            "price": 3.11,
            "img": fruit_tea,
            "special_offer": "Buy one get one free"
        },
        {
            "code": "SR1",
            "name": "Strawberries",
            "price": 5.00,
            "img": strawberries, 
            "special_offer": "10% multi buy discount"
        },
        {
            "code": "CF1",
            "name": "Coffee",
            "price": 11.23,
            "img": coffee, 
            "special_offer": null
        }
    ]
    ,
    addedItems:[],
    total: 0
}

export default initialState;

// let addedItem = state.items.find(item => item.code === action.code);
// let existing_item = state.addedItems.find(item => action.code === item.code);

// addedItem.quantity += twoForOne(addedItem.code) ? 2 : 1;

// if (existing_item) 
// {
//     if (multibuy(addedItem.code, addedItem.quantity)) {
//         addedItem.price = discountedPrice;
//     }
// }

// //let newTotal = addedItem.quantity * addedItem.price / (twoForOne(addedItem.code) ? 2 : 1);
// let newTotal = twoForOne(addedItem.code) ? addedItem.quantity * addedItem.price/2 : addedItem.quantity * addedItem.price;

// return existing_item ?  {
//         ...state,
//         total: newTotal
//     } : {
//         ...state,
//         addedItems: [...state.addedItems, addedItem],
//         total: newTotal
//     }
// }
