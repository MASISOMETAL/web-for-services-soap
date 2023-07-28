import React from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../constants/Colors';

const Header = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    background-color: ${COLOR.primary};
`;
const Title = styled.h1`
    color: #fff;
    text-transform: uppercase;  
`;

export default Header
