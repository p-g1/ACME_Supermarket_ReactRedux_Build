import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/Actions';
import { twoForOne, multibuyAdd } from '../../Discounts';
import { StyledItemPanel, StyledItemImage, StyledItemDetails, StyledItemCollection, StyledHomeSelection, StyledPromoDetails } from './Home.styled';

class Home extends Component {
    
    handleClick = code => {
        this.props.addToBasket(code);
    }
    
    render() {
        let itemList = this.props.items.map(item => {
  
            return(
                <StyledItemPanel  key={item.code}>
                    <StyledItemDetails>
                        <StyledItemImage src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <p>Price: £{item.price.toFixed(2)}</p>
                        <button onClick={() => {this.handleClick(item.code)}}>add</button>
                        {item.special_offer && <StyledPromoDetails>
                            <p>Offer: {item.special_offer}</p>
                            {multibuyAdd(item.code, item.quantity) && <p> (applied)</p> }
                            {twoForOne(item.code) && item.quantity > 0 && <p> (applied)</p> }
                        </StyledPromoDetails>
                        }
                        
                    </StyledItemDetails>
                </StyledItemPanel>
            )
        })
        return(
            <StyledHomeSelection>
                <h3>For Sale</h3>
                <StyledItemCollection>
                    {itemList}
                </StyledItemCollection>
            </StyledHomeSelection>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToBasket: code => {dispatch(addToBasket(code))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);