import styled from 'styled-components'

const S = {};

S.Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    line-height: 38px;
    width: 100%;
    background: #386596;
    height: 40px;
    text-decoration: none;

    a {
        color: white;
        text-decoration: none;
        font-weight: 700;
        margin: 0px 10px;
    }
`
S.LinksDiv = styled.div`
    right: 0px;
      
    a {
        color: white;
        text-decoration: none;
        font-weight: 700;
    }
`

export default S;