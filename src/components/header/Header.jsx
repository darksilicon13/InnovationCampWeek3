import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    return (
        <HeaderBanner>
            <p>My Todo List</p>
            <p>React</p>
        </HeaderBanner>
    );
}
export default Header;

const HeaderBanner = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding-right: 1.5em;
    padding-left: 1.5em;
`;