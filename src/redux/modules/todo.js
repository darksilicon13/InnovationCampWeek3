

// Actions
const CREATE = 'todo/CREATE';
const READ = 'todo/READ';
const UPDATE = 'todo/UPDATE';
const DELETE = 'todo/DELETE';

const initialState = {
    list: [
        {
            title: '리덕스 공부하기',
            description: '리덕스 기초를 공부해봅시다',
            isDone: false
        },
        {
            title: '리액트 공부하기',
            description: '리액트 기초를 공부해봅시다',
            isDone: true
        },
    ]
}


// Action Creators
export function createTodo(todo) {
    return { type: CREATE, todo };
}

export function readTodo(todo_index) {
    return { type: READ, todo_index };
}

export function updateTodo(todo_index) {
    return { type: UPDATE, todo_index };
}

export function deleteTodo(todo_index) {
    return { type: DELETE, todo_index };
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "todo/CREATE": {
            const new_todo_list = [...state.list, action.todo];
            return { list: new_todo_list };
        }
        case "todo/READ": {
            return {state}
        }
        case "todo/UPDATE": {
            const new_todo_list = state.list.map((v, i) => {
                if (i === action.todo_index) {
                    return { ...v, isDone: !v.isDone };
                }
                else {
                    return v;
                }
            });
            return { list: new_todo_list };
        }
        case "todo/DELETE": {
            const new_todo_list = state.list.filter((v, i) => {
                return i !== action.todo_index;
            });
            return { list: new_todo_list };
        }
        default:
            return state;
        }
}