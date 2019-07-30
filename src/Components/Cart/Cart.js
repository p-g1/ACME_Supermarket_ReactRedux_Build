import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity} from '../../actions/cartActions'
import { StyledItemCartPanel, StyledItemCartImage, StyledButton, StyledItemDetails, StyledIncrementButtons, StyledCart } from './Cart.styled';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (code) => {
        this.props.removeItem(code);
    }
    //to add the quantity
    handleAddQuantity = (code) => {
        this.props.addQuantity(code);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (code) => {
        this.props.subtractQuantity(code);
        console.log(this.props);
    }

    render(){

        console.log(this.props.items)
              
        let addedItems = this.props.items.length ?
            (  
            this.props.items.map(item=>{
                return(       
                    <StyledItemCartPanel key={item.code}>
                        <StyledItemCartImage src={item.img} alt={item.img} className=""/>
                        <StyledItemDetails>
                            <p>{item.name}</p>
                            <p>Price: £{item.price*item.quantity}</p> 
                            <p>Quantity: {item.quantity}</p>
                            <StyledIncrementButtons>
                                <StyledButton onClick={() => {this.handleAddQuantity(item.code)}}>+</StyledButton>
                                <StyledButton onClick={() => {this.handleSubtractQuantity(item.code)}}>-</StyledButton>
                            </StyledIncrementButtons>
                                <StyledButton className="waves-effect waves-light btn pink remove" onClick={() => {this.handleRemove(item.code)}}>Remove</StyledButton>
                        </StyledItemDetails>         
                    </StyledItemCartPanel>       
                    )
                })
            )
            :
            (
            <p>Empty.</p>
            )
       return(
                <StyledCart>
                    <h5>Cart:</h5>
                    <div>
                        {addedItems}
                    </div>
                    <div>
                        Total: 
                    </div>
                </StyledCart>        
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (code)=>{dispatch(removeItem(code))},
        addQuantity: (code)=>{dispatch(addQuantity(code))},
        subtractQuantity: (code)=>{dispatch(subtractQuantity(code))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
