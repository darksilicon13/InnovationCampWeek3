import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../../redux/modules/todo';

const Todo = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.list);
    console.log(todos);

    return (
        <TodoContainer>
            <Title>Working..🛠</Title>
            <List>

                {todos.map((v, i) => {
                    if (!v.isDone) {
                        return (
                            <Card key={i}>
                                <CardTitle>{v.title}</CardTitle>
                                <p>{v.description}</p>
                                <ButtonGroup>
                                    <DeleteBtn onClick={() => { dispatch(deleteTodo(i)) }}>삭제하기</DeleteBtn>
                                    <CompleteBtn onClick={() => { dispatch(updateTodo(i)) }}>완료</CompleteBtn>
                                </ButtonGroup>
                            </Card>
                        )
                    }
                    return null;
                })}
            </List>
            <Title>Done..!🎉</Title>
            <List>
                {todos.map((v, i) => {
                    if (v.isDone) {
                        return (
                            <Card key={i}>
                                <CardTitle>{v.title}</CardTitle>
                                <p>{v.description}</p>
                                <ButtonGroup>
                                    <DeleteBtn onClick={() => { dispatch(deleteTodo(i)) }}>삭제하기</DeleteBtn>
                                    <CompleteBtn onClick={() => { dispatch(updateTodo(i)) }}>취소</CompleteBtn>
                                </ButtonGroup>
                            </Card>
                        )
                    }
                    return null;
                })}
            </List>
        </TodoContainer>);
}

export default Todo;

const TodoContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

const Title = styled.h2`
    text-align: left;
`;

const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div`
    text-align: left;
    width: 270px;
    min-height: 150px;
    border: 4px solid darkcyan;
    border-radius: 10px;
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardTitle = styled.h2`
    margin: 0px;
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
`;

const DeleteBtn = styled.button`
    width: 50%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 3px solid red;
`;

const CompleteBtn = styled.button`
    width: 50%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 3px solid green;
`;
