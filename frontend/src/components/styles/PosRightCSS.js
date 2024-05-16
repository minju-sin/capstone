/* 포스기 오른쪽 디자인 */

import styled from "styled-components";

export const StyledRightHalf = styled.div`
    width: 50%; /* 나머지 공간인 오른쪽 반절의 너비를 50%로 설정. */
    height: 100%;
    padding: 20px;
    background-color: #ccc;
    box-sizing: border-box;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledRightButton = styled.button`
    width: calc(20% - 10px); /* 버튼 간격과 여백을 고려하여 설정 */
    height: 80px;
    margin: 5px;
    background-color: #ddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
export const StyledButtonMerged = styled.button`
    width: calc(40% - 10px); /* 병합된 버튼은 두 배의 너비. */
    height: 80px;
    background-color: #ddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;