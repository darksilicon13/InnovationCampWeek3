import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import Detail from '../components/detail/Detail';
import store from '../redux/configStore'


class TodoList extends Component {
    state = {}
    render() {
        return (
            <>
                <BrowserRouter>
                    <Provider store={store}>
                        <Routes>
                            <Route path='/' element={<Layout />}/>
                            <Route path='/detail/:index' element={<Detail/>}/>
                        </Routes>
                    </Provider>
                </BrowserRouter>
            </>
        );
    }
}

export default TodoList;