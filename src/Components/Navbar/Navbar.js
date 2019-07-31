import React from 'react';
import { Link } from 'react-router-dom';
import S from './Navbar.styled';

const Navbar = () => {
    return (
        <S.Nav>
            <Link to="/" className="brand-logo">ACME Supermarket</Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/basket">My basket</Link>
            </div>
        </S.Nav>
    )
}

export default Navbar;