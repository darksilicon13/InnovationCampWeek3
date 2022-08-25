// todo slice
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [
            {
                id: '1',
                title: '리덕스 공부하기',
                description: '리덕스 기초를 공부해봅시다',
                isDone: false
            },
            {
                id: '2',
                title: '리액트 공부하기',
                description: '리액트 기초를 공부해봅시다',
                isDone: true
            },
        ],
        current: {}
    },

    reducers: {
        createTodo: (state, action) => {
            console.log(action);
            state.list.push(action.payload);
        },
        readTodo: (state, action) => {
            state.current = state.list.filter((v) => v.id === action.payload)[0];
        },
        updateTodo: (state, action) => {
            state.list = state.list.map(todo => {
                if(action.payload === todo.id) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            })
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { createTodo, readTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;