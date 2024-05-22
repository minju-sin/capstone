import styled from "styled-components";

export const StyledServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px); 
`;

export const StyledMainContent = styled.div`
    display: flex;
    flex: 1;
`;

export const StyledLSection = styled.div`
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    width: 45%; 
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledInlineGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-right: 10px;
    margin-right: 0;
`;

export const StyledFormGroup = styled.div`
    margin-bottom: 15px;
    flex: 1;
    margin-right: 10px;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const StyledSelect = styled.select`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 4px;
`;