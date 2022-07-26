import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import todo from './modules/todo';

const rootReducer = combineReducers({todo});

const store = configureStore({reducer: rootReducer});

export default store;