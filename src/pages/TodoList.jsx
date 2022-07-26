import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import { Provider } from 'react-redux';
import store from '../redux/configStore'


class TodoList extends Component {
    state = {}
    render() {
        return (
            <>
                <Provider store={store}>
                    <Layout />
                </Provider>
            </>
        );
    }
}

export default TodoList;