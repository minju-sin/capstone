import styled from "styled-components";

export const DLreceiptContent = styled.div`
    font-size: 12px;
    line-height: 1.5;
    max-height: 500px;
    max-width: 300px;
    overflow-y: auto; /*스크롤*/
    padding: 10px;
`;

export const DoubleLine = styled.hr`
    border-top: 2px solid #000;
`;

export const DLreceiptTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    margin: 10px 0;
`;

export const DLreceiptSection = styled.div`
    margin-bottom: 10px;
`;

export const DLreceiptSectionFlex = styled.div`
    margin-bottom: 10px;
    display: flex;
`;

export const SpanCenter = styled.span`
    flex: 1;
    text-align: center;
`;

export const SpanRight = styled.span`
    flex: 1;
    text-align: right;
`;

export const SpanFlex2 = styled.span`
    flex: 2;
`;

export const Flex05 = styled.span`
    flex: 0.5;
    text-align: right;
`;

export const Sign = styled.div`
    border-bottom: 1px solid #000; 
    width: 200px; 
    display: inline-block; 
    vertical-align: middle;
`;