

// Actions
const CREATE = 'todo/CREATE';
const READ = 'todo/READ';
const UPDATE = 'todo/UPDATE';
const DELETE = 'todo/DELETE';

const initialState = {
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
}


// Action Creators
export function createTodo(todo) {
    return { type: CREATE, todo };
}

export function readTodo(todo_id) {
    return { type: READ, todo_id };
}

export function updateTodo(todo_id) {
    return { type: UPDATE, todo_id };
}

export function deleteTodo(todo_id) {
    return { type: DELETE, todo_id };
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "todo/CREATE": {
            const new_todo_list = [...state.list, action.todo];
            return { ...state, list: new_todo_list };
        }
        case "todo/READ": {
            const target_todo = state.list.filter((v) => v.id === action.todo_id)[0];

            return { ...state, current: target_todo };
        }
        case "todo/UPDATE": {
            const new_todo_list = state.list.map((v) => {
                if (v.id === action.todo_id) {
                    return { ...v, isDone: !v.isDone };
                }
                else {
                    return v;
                }
            });
            return { ...state, list: new_todo_list };
        }
        case "todo/DELETE": {
            const new_todo_list = state.list.filter((v) => {
                return v.id !== action.todo_id;
            });
            return { ...state, list: new_todo_list };
        }
        default:
            return state;
    }
}