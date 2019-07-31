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
            "special_offer": "Buy one get one free",
            "quantity": 0
        },
        {
            "code": "SR1",
            "name": "Strawberries",
            "price": 5.00,
            "img": strawberries, 
            "special_offer": "10% multibuy discount",
            "quantity": 0
        },
        {
            "code": "CF1",
            "name": "Coffee",
            "price": 11.23,
            "img": coffee, 
            "special_offer": null,
            "quantity": 0
        }
    ]
    ,
    addedItems:[],
    total: 0
}

export default initialState;
