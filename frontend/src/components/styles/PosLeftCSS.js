/* pos 왼쪽 디자인 */ 

import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    height: calc(100% - 50px); /* 화면의 높이에서 헤더의 높이 빼기. */
`;

export const StyledLeftHalf = styled.div`
    width: 50%; /* 왼쪽 반절의 너비를 50%로 설정. */
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column; 
`;

export const StyledLeftInner = styled.div`
    width: 98%; 
    height: 40%; /* 왼쪽 반절의 40% */
    margin-bottom: 10px; 
    background-color: #ddd;
    padding: 10px;
    position: relative; 
`;

export const StyledTable = styled.table`
    width: 100%;
    
`;

export const StyledTr = styled.tr`
    
`;

export const StyledTh = styled.th`
    padding: 5px;
    border-bottom: 1px solid #999;
    
`;

/* 포스기 중간 부분 */ 
export const StyledLeftMiddle = styled.div`
    width: 100%; 
    height: 3%; /* 왼쪽 반절의 3% */
    margin-bottom: 10px; 
    background-color: #ccc;
    border-radius: 5px;
`;

export const StyledLeftThird = styled.div`
    width: 100%; 
    height: 7%; /* 왼쪽 반절의 7% */
    margin-bottom: 10px; 
    background-color: #f0f0f0;
    display: flex; /* 내부 요소들을 가로로 나열하기 위해 추가 */
    justify-content: space-around; /* 가로 정렬 설정 */
    align-items: center; /* 세로 정렬 설정 */
`;

export const StyledButton = styled.button`
    width: calc(20% - 10px); /* 버튼 간격과 여백을 고려하여 설정 */
    height: 50px;
    margin: 5px;
    background-color: #ddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const StyledLeftFourth = styled.div`
    width: 100%; 
    height: 50%; /* 왼쪽 반절의 50% */
    background-color: #a4a4a4;
    display: flex;
`;

export const StyledLeftFourthLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: #ddd;
`;

export const StyledLeftFourthMiddle = styled.div`
    width: 40%;
    height: 100%;
    background-color: #858383;
`;

export const StyledLeftFourthRight = styled.div`
    width: 10%; /* 왼쪽 반절의 10% */
    height: 100%;
    background-color: #bbb;
`;