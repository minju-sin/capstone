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
                    <StyledInvenThTd style={{background: '#ddd'}}>유통기한</StyledInvenThTd> 
                    {/* 그냥 유통기한 기준을 한달로 잡음.. 기능만 보여주기 위함 */}
                </StyledTr>

                {inventoryItems.map(item => (
                    <StyledTr key={item.idinventory}>
                        <StyledInvenThTd>{item.idinventory}</StyledInvenThTd>
                        <StyledInvenThTd>{item.quantity}</StyledInvenThTd>
                        <StyledInvenThTd>{new Date(item.dateAdded).toLocaleDateString()}</StyledInvenThTd>
                        <StyledInvenThTd>{item.daysLeft}</StyledInvenThTd>
                    </StyledTr>
                ))}
                
            </StyledInvenTable>
        </StyledLeftSection>
    );
}

export default InvenLeft;
