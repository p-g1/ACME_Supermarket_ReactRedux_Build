import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/Actions';
import { twoForOne, multibuyAdd } from '../../Discounts/Discounts';
import S from './Home.styled';
import Button from '@material-ui/core/Button';

class Home extends Component {
    
    handleClick = code => {
        this.props.addToBasket(code);
    }
    
    render() {
        let itemList = this.props.items.map(item => {
  
            return(
                <S.ItemPanel  key={item.code}>
                    <S.ItemDetails>
                        <S.ItemImage src={item.img} alt={item.name} />
                        <S.NameAndPrice>
                            <p>{item.name}</p>
                            <p>£{item.price.toFixed(2)}</p>
                        </S.NameAndPrice>
                        {item.special_offer && <S.PromoDetails>
                            <p>Offer: {item.special_offer}</p>
                            {multibuyAdd(item.code, item.quantity) && <p>(applied)</p> }
                            {twoForOne(item.code) && item.quantity > 0 && <p>(applied)</p> }
                        </S.PromoDetails>}
                        <Button variant="contained" disableRipple={true} onClick={() => {this.handleClick(item.code)}}>add</Button>
                    </S.ItemDetails>
                </S.ItemPanel>
            )
        })
        return(
            <S.ItemCollection>
                {itemList}
            </S.ItemCollection>
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