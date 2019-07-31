import styled from 'styled-components'

const S = {};

S.ItemPanel = styled.div`
    max-width: 400px;
    max-height: 400px;
    background: #698EB8;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    margin: 20px;
`

S.ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
        color: white;
        font-weight: 700;
    }

    p:nth-child(2) {
        margin-bottom: 0px;
    }

    button {
       margin: auto;
    }
`

S.ItemImage = styled.img`
    max-width: 300px;
    max-height: 300px;
`

S.NameAndPrice = styled.div`
    display: flex;
    justify-content: space-around;
`

S.PromoDetails = styled.div`
    display: flex;
    justify-content: center;

    p {
        color: white;
        margin-top: 0px;
        font-weight: 500;
    }
    p:nth-child(2) {
        color: green;
        margin-left: 5px;
    }
`

S.ItemCollection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export default S;