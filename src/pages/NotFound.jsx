import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = (props) => {
    const navigate = useNavigate();
    return (
        <NotFoundContainer>
            <InfoContainer>
                <InfoHeader>
                    <p>Not Found: 404</p>
                    <button onClick={() => { navigate(-1); }}>이전으로</button>
                </InfoHeader>
                <h1>주소가 올바르지 않아요!</h1>
            </InfoContainer>
        </NotFoundContainer>
    );
}

export default NotFound;

const NotFoundContainer = styled.div`
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
    & p {
        font-weight: bold;
    }
    & button {
        background-color: transparent;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 10px 50px;
        cursor: pointer;
    }
`;
