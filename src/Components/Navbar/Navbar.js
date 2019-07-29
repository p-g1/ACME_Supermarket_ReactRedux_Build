import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, StyledLinksDiv } from './Navbar.styled';

const Navbar = () => {
    return (
        <StyledNav>
            <Link to="/" className="brand-logo">ACME Supermarket</Link>
            <StyledLinksDiv>
                <Link to="/">Shop</Link>
                <Link to="/cart">My cart</Link>
            </StyledLinksDiv>
        </StyledNav>
    )
}

export default Navbar;