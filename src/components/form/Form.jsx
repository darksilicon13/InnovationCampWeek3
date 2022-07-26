import React from 'react';
import './style.css';
import {createTodo} from '../../redux/modules/todo'
import {useDispatch} from 'react-redux';

const Form = (props) => {
    const dispatch = useDispatch();
    const title = React.createRef(null);
    const desc = React.createRef(null);
    
    const addTodoCard = (title_val, desc_val) => {
        dispatch(createTodo({title: title_val, description: desc_val, isDone: false}));
        title.current.value ='';
        desc.current.value = '';
    }




    return (
        <div className='form'>
            <div>
                <label htmlFor="title">제목</label>
                <input ref={title} className="text-input" id="title" type="text" />
                <label htmlFor="description">내용</label>
                <input ref={desc} className="text-input" id="description" type="text" />
            </div>
            <button className='add-button' onClick={() => {addTodoCard(title.current.value, desc.current.value)}}>추가하기</button>
        </div>
    );
}

export default Form;