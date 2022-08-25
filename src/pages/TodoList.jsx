import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import Detail from '../components/detail/Detail';
import NotFound from './NotFound';


class TodoList extends Component {
    state = {}
    render() {
        return (
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        );
    }
}

export default TodoList;