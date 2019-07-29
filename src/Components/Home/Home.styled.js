import styled from 'styled-components'

export const StyledHomeSelection = styled.div`
    
`

export const StyledItemCollection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const StyledItemPanel = styled.div`
    max-width: 400px;
    max-height: 400px;
    background: #698EB8;
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const StyledItemImage = styled.img`
    max-width: 300px;
    max-height: 300px;
`

export const StyledButton = styled.button`
    background: red;
`

export const StyledItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
        color: white;
    }

    p:nth-child(2) {
        margin-bottom: 0px;
        font-weight: 700;
    }

    button {
       width: 30%;
    }
`
