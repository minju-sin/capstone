import styled from "styled-components";

export const StyledServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px); 
    font-family: BMJUA;
    font-size: 20px;
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

export const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 4px;
`;

export const StyledServiceButton = styled.button`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    background-color: #ddd;
    border: none;
    margin-top: 5px;
    font-family: BMJUA;
    font-size: 20px;
`;

export const StyledBottomButtons = styled.div`
    display: flex;
    justify-content: space-between;
    @media print {
        display: none; /* 인쇄 시 이 버튼들을 숨김 */
    }
`;

export const StyledLeftButtons = styled.div`
    display: flex;
    gap: 10px;
    @media print {
        display: none; /* 인쇄 시 이 버튼들을 숨김 */
    }
`;

export const StyledLeftButton = styled.button`
    padding: 10px;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    font-family: BMJUA;
    font-size: 20px;
    @media print {
        display: none; /* 인쇄 시 이 버튼들을 숨김 */
    }
`;

/* 영수증 */
export const StyledPopUp = styled.div`
    display: none;
    position: fixed;
    top: 48%;
    left: 0.5%;
    transform: translateY(-50%);
    width: 41.5%; 
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledPopUpHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

export const StyledPopUpImg = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
`;

export const StyledPopUpClose = styled.button`
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    background: none;
    border: none;
`;

export const StyledConditionInput = styled.button`
    width: 20%;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 4px;
    font-family: BMJUA;
    font-size: 20px;
`;

export const ReceiptContent = styled.div`
    font-size: 12px;
    line-height: 1.5;
`;

export const ReceiptSection = styled.div`
    margin-bottom : 10px;
`;

export const Hr = styled.hr`
    border: none;
    border-top: 1px dashed #000;
    margin: 5px 0;
`;

export const ReceiptTitle = styled.div`
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: 5px;
`;

export const Div = styled.div`
    font-size: 15px;
`;

export const Span = styled.span`
    font-size: 15px;

`;

