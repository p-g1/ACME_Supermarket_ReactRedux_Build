import styled from 'styled-components'

const S = {};

S.ItemBasketPanel = styled.div`
    max-width: 350px;
    background: #698EB8;
    display: flex;
    margin: 20px;
    border-radius: 5px;
`

 S.ItemBasketImage = styled.img`
    max-width: 200px;
    max-height: 150px;
    margin: 20px;
`

 S.Button = styled.button`
    margin: 5px;
`

 S.ItemDetails = styled.div`
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

 S.IncrementButtons = styled.div`
 
`

 S.Basket = styled.div`
    margin: auto;
    width: 30%;
    display: flex;
`

 S.DiscountDetails = styled(S.ItemDetails)`
    color: green;
`

export default S;