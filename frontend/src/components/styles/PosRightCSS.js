import styled from "styled-components";

export const StyledRightHalf = styled.div`
    width: 50%; /* 기본적으로 오른쪽 반절의 너비를 50%로 설정. */
    height: 820px;
    padding: 20px;
    background-color: #ccc;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 100%; /* 화면 너비가 768px 이하일 경우 전체 너비로 설정 */
        height: auto; /* 높이를 자동으로 설정하여 유동적으로 변하도록 함 */
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%; /* 화면 너비가 768px 이하일 경우 전체 너비로 설정 */
        height: auto; /* 높이를 자동으로 설정하여 유동적으로 변하도록 함 */
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* 버튼 간격 조정 */
`;

export const StyledRightButton = styled.button`
    width: calc(20% - 10px); /* 버튼 간격과 여백을 고려하여 설정 */
    height: 80px;
    margin: 5px;
    background-color: #ddd;
    font-family: BMJUA;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 부드러운 색상 전환 효과 */

    &:hover {
        background-color: #bbb; /* 호버 시 색상 변경 */
    }

    @media (max-width: 768px) {
        width: calc(45% - 10px); /* 화면 너비가 768px 이하일 경우 버튼 너비 조정 */
    }

    @media (max-width: 480px) {
        width: 100%; /* 화면 너비가 480px 이하일 경우 버튼을 전체 너비로 설정 */
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 10px;
    }
`;

export const StyledA = styled.a`
    text-decoration: none;
    color: #000;
`;

export const StyledButtonMerged = styled.button`
    width: calc(40% - 10px); /* 병합된 버튼은 두 배의 너비. */
    height: 80px;
    margin: 5px;
    background-color: #ddd;
    font-family: BMJUA;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 부드러운 색상 전환 효과 */
    
    &:hover {
        background-color: #bbb; /* 호버 시 색상 변경 */
    }

    @media (max-width: 768px) {
        width: calc(45% - 10px); /* 화면 너비가 768px 이하일 경우 버튼 너비 조정 */
        font-size: 10px;
    }

    @media (max-width: 480px) {
        width: 100%; /* 화면 너비가 480px 이하일 경우 버튼을 전체 너비로 설정 */
        font-size: 10px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%; /* 크기 조정 */
        font-size: 10px;
    }
`;
