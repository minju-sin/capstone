import React from "react";
import { StyledTr } from "../styles/PosLeftCSS";
import { StyledLeftSection, StyledInvenTable, StyledInvenThTd } from "../styles/InvenLeftCSS";

function InvenLeft({ inventoryItems }) {
    return (
        <StyledLeftSection className="left-section">
            <StyledInvenTable>
                <StyledTr>
                    <StyledInvenThTd style={{background: '#ddd'}}>품목</StyledInvenThTd>
                    <StyledInvenThTd style={{background: '#ddd'}}>수량</StyledInvenThTd>
                    <StyledInvenThTd style={{background: '#ddd'}}>생산일</StyledInvenThTd>
                </StyledTr>

                {inventoryItems.map(item => (
                    <StyledTr key={item.idinventory}>
                        <StyledInvenThTd>{item.idinventory}</StyledInvenThTd>
                        <StyledInvenThTd>{item.quantity}</StyledInvenThTd>
                        <StyledInvenThTd>{new Date(item.dateAdded).toLocaleDateString()}</StyledInvenThTd>
                    </StyledTr>
                ))}
                
            </StyledInvenTable>
        </StyledLeftSection>
    );
}

export default InvenLeft;
