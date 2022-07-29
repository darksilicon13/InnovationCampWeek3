import React from 'react';
import styled from 'styled-components';
import {createTodo} from '../../redux/modules/todo'
import {useDispatch} from 'react-redux';

const Form = (props) => {
    const dispatch = useDispatch();
    const title = React.createRef(null);
    const desc = React.createRef(null);
    
    const addTodoCard = (title_val, desc_val) => {
        if(title.current.value === '' || desc.current.value === '') {
            return;
        }
        dispatch(createTodo({title: title_val, description: desc_val, isDone: false}));
        title.current.value ='';
        desc.current.value = '';
    }

    return (
        <InputForm>
            <div>
                <InputLabel htmlFor="title">제목</InputLabel>
                <TextInput ref={title}  id="title" type="text"/>
                <InputLabel htmlFor="description">내용</InputLabel>
                <TextInput ref={desc}  id="description" type="text"/>
            </div>
            <AddButton onClick={() => {addTodoCard(title.current.value, desc.current.value)}}>추가하기</AddButton>
        </InputForm>
    );
}

export default Form;

const InputForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    padding: 2em;
    height: 40px;
    border-radius: 10px;
`;

const InputLabel = styled.label`
    font-weight: bold
`;

const TextInput = styled.input`
    margin: 0px 16px 0px 16px;
    border-radius: 10px;
    border: none;
    height: 40px;
    width: 250px;
`;

const AddButton = styled.button`
    font-weight: bold;
    padding: 10px 50px;
    background-color: darkcyan;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;
