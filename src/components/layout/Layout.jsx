import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import Form from '../form/Form';
import Todo from '../todo/Todo';

const Layout = (props) => {

    return (
        <Layouts>
            <Header />
            <Form />
            <Todo />
        </Layouts>
    );
}

export default Layout;

const Layouts = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin-left: auto;
    margin-right: auto;
`;