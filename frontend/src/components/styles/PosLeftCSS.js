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
    height: 192px; /* 왼쪽 반절의 40% */
    margin-bottom: 10px; 
    background-color: #ddd;
    padding: 10px;
    position: relative; 
    overflow: auto; /* 내용이 넘칠 경우 스크롤바 표시 */
`;

export const StyledTable = styled.table`
    width: 100%;
    
`;

export const StyledTr = styled.tr`
    font-family: BMJUA;
    font-size: 18px;
`;

export const StyledTh = styled.th`
    padding: 5px;
    font-family: BMJUA;
    font-size: 18px;
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
    font-family: BMJUA;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 부드러운 색상 전환 효과 */

    &:hover {
        background-color: #a4a4a4; /* 호버 시 색상 변경 */
    }
`;

export const StyledLeftFourth = styled.div`
    width: 100%; 
    height: 470px; 
    background-color: #a4a4a4;
    display: flex;
    padding: 2px;
`;

export const StyledLeftFourthLeft = styled.div`
    width: 50%;
    height: 95%;
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

export const StyledLeftFourthLeft2 = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const StyledLeftFourthLeftButton = styled.button`
    width: calc(33.3% - 10px); /* 버튼 간격과 여백을 고려하여 설정 */
    height: 2px;
    margin: 1px;
    background-color: #ddd;
    font-family: BMJUA;
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 부드러운 색상 전환 효과 */

    &:hover {
        background-color: #bbb; /* 호버 시 색상 변경 */
    }
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
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const StyledCenter = styled.div`
    width: 90%;
    display: flex;
    justifyContent: center;
`;

export const StyledNum = styled.div`
    width: 100%;
    display: flex;
    justifyContent: space-around;
    margin-top: 10px;
`;

export const StyledInfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    width: 100%;
`;

export const StyledLabel = styled.span`
    text-align: left;
    flex: 1;
    font-family: BMJUA;
    font-weight: bold;
    font-size: 20px;
`;

export const StyledValue = styled.span`
    text-align: right;
    flex: 1;
    font-family: BMJUA;
    font-weight: bold;
    font-size: 20px;
`;