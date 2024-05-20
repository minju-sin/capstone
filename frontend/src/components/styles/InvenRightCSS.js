import styled from "styled-components";

export const StyledRightSection = styled.div`
    width: 70%; /* 오른쪽 섹션의 너비를 70%로 설정. */
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #ccc;
`;

export const StyledInvenButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* 버튼 간의 간격을 균일하게 분배 */
`;

export const StyledPopUp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 1000;
    width: 400px; 
    height: 300px;
`;

export const StyledPopUpInner = styled.div`
    text-align: center;
`;

export const StyledH1 = styled.h1`
    margin-top: 20px;
    font-family: BMJUA;
`;

export const StyledB = styled.button`
    margin-top: 30px;
    font-family: BMJUA;
    font-size: 20px;
    padding: 10px;
`;

export const StyledP = styled.p`
    font-family: BMJUA;
    font-size: 25px;
`;

export const StyledCancelButton = styled.button`
    background-color: #f44336; 
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    &:hover {
        background-color: #d32f2f;
    }
`;

export const StyledConfirmButton = styled.button`
    background-color: #4CAF50; 
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    &:hover {
        background-color: #388E3C;
    }
`;