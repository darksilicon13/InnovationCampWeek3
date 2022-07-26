import React from 'react';
import './style.css';
import {useSelector, useDispatch} from 'react-redux';
import {updateTodo, deleteTodo} from '../../redux/modules/todo';

const Todo = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todo.list);
    console.log(todos);

    return (
        <div className='todo-container'>
            <h2 className='working-title'>Working..🛠</h2>
            <div className='working-list'>

                {todos.map((v, i) => {
                    if (!v.isDone) {
                        return (
                            <div key={i} className='working-card'>
                                <h2 className='card-title'>{v.title}</h2>
                                <p>{v.description}</p>
                                <div className='buttons'>
                                    <button className="delete-btn" onClick={() => { dispatch(deleteTodo(i)) }}>삭제하기</button>
                                    <button className="complete-btn" onClick={() => { dispatch(updateTodo(i)) }}>완료</button>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}

            </div>
            <h2 className="done-title">Done..!🎉</h2>
            <div className='done-list'>
                {todos.map((v, i) => {
                    if (v.isDone) {
                        return (
                            <div key={i} className='working-card'>
                                <h2 className='card-title'>{v.title}</h2>
                                <p>{v.description}</p>
                                <div className='buttons'>
                                    <button className="delete-btn" onClick={() => { dispatch(deleteTodo(i)) }}>삭제하기</button>
                                    <button className="cancel-btn" onClick={() => { dispatch(updateTodo(i)) }}>취소</button>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>);
}

export default Todo;