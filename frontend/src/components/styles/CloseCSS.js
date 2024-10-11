import styled from "styled-components";

export const DLreceiptContent = styled.div`
  width: 80%; /* 너비를 줄여서 적용 */
  margin: 0 auto;
  font-family: BMJUA;
  font-size: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const ReceiptTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const ReceiptHeader = styled.thead`
  background-color: #ddd;
  font-weight: bold;
  text-align: center;

  th {
    padding: 10px;
  }
`;

export const ReceiptRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const ReceiptCell = styled.td`
  padding: 8px;
  text-align: left;
  
  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(3) {
    text-align: right;
  }
`;
