import styled from "styled-components";

export const StyledRSection = styled.div`
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    width: 55%;  
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledRightHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
`;

export const StyledRhButton = styled.button`
    padding: 10px 20px;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    font-family: BMJUA;
    font-size: 20px;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
`;

export const StyledTh = styled.th`
    padding: 10px;
    border: 1px solid #999;
    text-align: center;
    background-color: #ddd;
`;

export const StyledTd = styled.td`
    padding: 10px;
    border: 1px solid #999;
    text-align: center;
`;

export const Tr = styled.tr``;
export const Div = styled.div``;

export const StyledArrowButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
`;

export const StyledArrowButton = styled.button`
    padding: 10px;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
`;

export const StyledDoubleArrowButton = styled.button`
    padding: 10px;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
`;

export const StyledRightButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const StyledRightButton = styled.button`
    padding: 10px;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    justify-content: flex-end;
    font-family: BMJUA;
    font-size: 20px;
`;