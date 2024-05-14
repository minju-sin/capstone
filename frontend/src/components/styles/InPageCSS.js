import styled from "styled-components";

export const StyledBody = styled.body`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
`;

export const StyledNavigationBar = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fff;
    position: fixed;
    top: 20px;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #192287; 
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
    padding-bottom: 10px;
`;

export const StyledContainer = styled.div`
    margin-top: 60px;
    padding: 20px;
    box-sizing: border-box;
`;

export const StyledBox = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const StyledBoxImg = styled.img`
    width: 100px;
    height: auto;
    margin-right: 20px;
`;

export const StyledBoxDetails = styled.div`
    flex-grow: 1;
`;

// 입고하기 버튼 
export const StyledButtonIncoming = styled.a`
    position: fixed;
    bottom: 90px;
    right: 20px;
    font-size: 14px;
    font-weight: bolder;
    padding: 10px 20px;
    background-color: #192287;
    color: #fff; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex; /* 플렉스 컨테이너로 설정하여 내부 아이콘과 텍스트를 가로로 정렬 */
    align-items: center; /* 수직 정렬 */
    text-decoration: none; 
`;

