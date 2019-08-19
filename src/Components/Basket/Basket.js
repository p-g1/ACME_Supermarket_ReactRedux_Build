import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity} from '../../actions/Actions'
import { twoForOne, multibuyAdd } from '../../Discounts/Discounts';
import S from './Basket.styled';

class Basket extends Component{

    handleAddQuantity = code => {
        this.props.addQuantity(code);
    };

    handleSubtractQuantity = code => {
        this.props.subtractQuantity(code);
    };

    handleRemove = code => {
        this.props.removeItem(code);
    };

  
    render(){
        let basketTotal = 0;

        let addedItems = this.props.items.length ?
            (  
            this.props.items.map( item => {

                let total = (item.quantity * item.price / (twoForOne(item.code) ? 2 : 1)).toFixed(2);
                
                basketTotal += Number(total);
              
                return(       
                    <S.ItemBasketPanel key={item.code}>
                        <S.ItemBasketImage src={item.img} alt={item.img} />
                        <S.ItemDetails>
                            <p>{item.name}</p>
                            <p>Total: £{total}</p> 
                            <p>Quantity: {item.quantity}</p>
                            
                            <div>
                                <S.Button onClick={() => {this.handleAddQuantity(item.code)}}>+</S.Button>
                                <S.Button onClick={() => {this.handleSubtractQuantity(item.code)}}>-</S.Button>
                            </div>
                                <S.Button onClick={() => {this.handleRemove(item.code)}}>Remove</S.Button>
                                {multibuyAdd(item.code, item.quantity) && <S.DiscountDetails>Offer applied</S.DiscountDetails> }
                                {twoForOne(item.code) && <S.DiscountDetails>Offer applied</S.DiscountDetails> }
                        </S.ItemDetails>         
                    </S.ItemBasketPanel>       
                    )
                })  
            )
            :
            (
            <S.Empty> Empty</S.Empty>
            );
 
       return(
                <S.Basket>
                    <h5>Basket:</h5>
                    <div>
                        {addedItems}
                    </div>
                    {basketTotal > 0 &&
                        <S.BasketTotal>
                            <h5>Total: £{basketTotal.toFixed(2)}</h5>
                        </S.BasketTotal>}
                </S.Basket>        
       )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        addQuantity: code => {dispatch(addQuantity(code))},
        subtractQuantity: code => {dispatch(subtractQuantity(code))},
        removeItem: code => {dispatch(removeItem(code))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Basket);
