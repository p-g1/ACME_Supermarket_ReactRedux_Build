import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity} from '../../actions/Actions'
import { twoForOne, multibuy } from '../../Discounts';
import { StyledItemBasketPanel, StyledItemBasketImage, StyledButton, StyledItemDetails, StyledIncrementButtons, StyledBasket, StyledDiscountDetails } from './Basket.styled';

class Basket extends Component{

    handleAddQuantity = (code) => {
        this.props.addQuantity(code);
    };

    handleSubtractQuantity = (code) => {
        this.props.subtractQuantity(code);
        console.log(this.props);
    };

    handleRemove = (code) => {
        this.props.removeItem(code);
    };

    render(){

        let addedItems = this.props.items.length ?
            (  
            this.props.items.map( item => {
              
                return(       
                    <StyledItemBasketPanel key={item.code}>
                        <StyledItemBasketImage src={item.img} alt={item.img} />
                        <StyledItemDetails>
                            <p>{item.name}</p>
                            <p>Price: £{item.price * item.quantity}</p> 
                            <p>Quantity: {item.quantity}</p>
                            {multibuy(item.code, item.quantity) && <StyledDiscountDetails>20% Multibuy discount applied</StyledDiscountDetails> }
                            {twoForOne(item.code) && <StyledDiscountDetails>2 for 1 discount applied</StyledDiscountDetails> }
                            <StyledIncrementButtons>
                                <StyledButton onClick={() => {this.handleAddQuantity(item.code)}}>+</StyledButton>
                                <StyledButton onClick={() => {this.handleSubtractQuantity(item.code)}}>-</StyledButton>
                            </StyledIncrementButtons>
                                <StyledButton onClick={() => {this.handleRemove(item.code)}}>Remove</StyledButton>
                        </StyledItemDetails>         
                    </StyledItemBasketPanel>       
                    )
                })
            )
            :
            (
            <h5> Empty</h5>
            )
       return(
                <StyledBasket>
                    <h5>Basket:</h5>
                    <div>
                        {addedItems}
                    </div>
                    {this.props.total &&<h5>
                        Total: {this.props.total}
                    </h5>}
                </StyledBasket>        
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
