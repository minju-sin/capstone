import styled from "styled-components";

export const StyledLeftSection = styled.div`
    width: 30%; /* 왼쪽 섹션의 너비를 30%로 설정. */
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #f0f0f0;
     overflow-y: auto; /* 스크롤 가능하도록 설정. */
`;

export const StyledInvenTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const StyledInvenThTd = styled.th`
    padding: 10px;
    border: 1px solid #999;
    text-align: center;
`;