import styled from 'styled-components'

const S = {};

S.ItemBasketPanel = styled.div`
    max-width: 350px;
    background: #698EB8;
    display: flex;
    margin: 20px;
    border-radius: 5px;

    @media (max-width: 768px) {
      margin: 0px;
      margin-bottom: 10px;
    }
`

S.ItemBasketImage = styled.img`
    max-width: 200px;
    max-height: 150px;
    margin: 20px;

    @media (max-width: 768px) {
        max-width: 170px;
        max-height: 140px;
    }
`

S.ItemDetails = styled.div`
    padding: 10px;

    p {
        color: white;
        padding-right: 30px;
        min-width: 80px;
    }

    p:nth-child(1) {
        margin-bottom: 0px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        p {
            text-align: center;
        }
    }
`

 S.Button = styled.button`
    margin: 5px;
    background: white;

    @media (max-width: 768px) {
        text-align: center;
        background: white;
        margin-left: 10px;
    }
`

 S.Basket = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;

    h5 {
        font-size: 18px
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 10px;

        h5 {
            margin: 0px;
        }
      }
`

 S.DiscountDetails = styled.p`
    color: green;
`

S.Empty = styled.h5 `
    margin-left: 5px;
`

S.BasketTotal = styled.div`
    min-width: 350px; 
`

export default S;