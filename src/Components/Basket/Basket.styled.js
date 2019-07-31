import styled from 'styled-components'

export const StyledItemBasketPanel = styled.div`
    max-width: 350px;
    background: #698EB8;
    display: flex;
    margin: 20px;
`

export const StyledItemBasketImage = styled.img`
    max-width: 200px;
    max-height: 150px;
    margin: 20px;
`

export const StyledButton = styled.button`
    margin: 5px;
`

export const StyledItemDetails = styled.div`
    padding: 10px;
    
    p {
        color: white;
    }

    p:nth-child(1) {
        margin-bottom: 0px;
        font-weight: 700;
    }

    button {

    }
`

export const StyledIncrementButtons = styled.div`
 
`

export const StyledBasket = styled.div`
    margin: auto;
    width: 30%;
    display: flex;
`

export const StyledDiscountDetails = styled(StyledItemDetails)`
    color: green;
`