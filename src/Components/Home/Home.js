import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import { StyledItemPanel, StyledItemImage, StyledItemDetails, StyledItemCollection, StyledHomeSelection } from './Home.styled';

class Home extends Component {
    
    handleClick = (code) => {
        this.props.addToCart(code);
    }
    
    render() {
        let itemList = this.props.items.map(item => {
            return(
                <StyledItemPanel  key={item.code}>
                    <StyledItemDetails>
                        <StyledItemImage src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <p>Price: £{item.price}</p>
                        <button onClick={() => {this.handleClick(item.code)}}>add</button>
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

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (code) => {dispatch(addToCart(code))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);