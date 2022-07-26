import React from 'react';
import './style.css';
import Header from '../header/Header';
import Form from '../form/Form';
import Todo from '../todo/Todo';

const Layout = (props) => {

    return (
        <div className='layout'>
            <Header/>
            <Form/>
            <Todo />
        </div>
    );
}
 
export default Layout;