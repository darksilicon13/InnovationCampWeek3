import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { readTodo } from '../../redux/modules/todo';

const Detail = (props) => {
    const params = useParams();
    const todo_id = params.id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(readTodo(todo_id));
    // const todo_list = useSelector(state => state.todo.list);
    // const target_todo = todo_list.filter((v) => v.id === todo_id);
    // console.log(target_todo);
    const cur_todo = useSelector(state=>state.todo.current);

    return (
        <DetailContainer>
            <InfoContainer>
                <InfoHeader>
                    <p>ID: {todo_id}</p>
                    <button onClick={() => { navigate(-1); }}>이전으로</button>
                </InfoHeader>
                <h1>{cur_todo.title}</h1>
                <p>{cur_todo.description}</p>
            </InfoContainer>
        </DetailContainer>
    );
}

export default Detail;


const DetailContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 10px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoContainer = styled.div`
    width: 50vw;
    height: 50vh;
    border: 1px solid #ddd;
    padding: 50px;
`;

const InfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & button {
        background-color: transparent;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 10px 50px;
        cursor: pointer;
    }
`;
