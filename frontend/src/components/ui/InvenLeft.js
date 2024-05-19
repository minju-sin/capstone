import React from "react";
import { StyledTr } from "../styles/PosLeftCSS";
import { StyledLeftSection, StyledInvenTable, StyledInvenThTd } from "../styles/InvenLeftCSS";


function InvenLeft() {


    return (
        <StyledLeftSection class="left-section">
            <StyledInvenTable>
                <StyledTr>
                    <StyledInvenThTd style={{background: '#ddd'}}>품목</StyledInvenThTd>
                    <StyledInvenThTd style={{background: '#ddd'}}>수량</StyledInvenThTd>
                </StyledTr>
                <StyledTr>
                    <StyledInvenThTd>원두</StyledInvenThTd>
                    <StyledInvenThTd>30</StyledInvenThTd>
                </StyledTr>
                <StyledTr>
                    <StyledInvenThTd>바닐라</StyledInvenThTd>
                    <StyledInvenThTd>15</StyledInvenThTd>
                </StyledTr>
                <StyledTr>
                    <StyledInvenThTd>연유</StyledInvenThTd>
                    <StyledInvenThTd>8</StyledInvenThTd>
                </StyledTr>
                <StyledTr>
                    <StyledInvenThTd>초코시럽</StyledInvenThTd>
                    <StyledInvenThTd>20</StyledInvenThTd>
                </StyledTr>
                <StyledTr>
                    <StyledInvenThTd>유자</StyledInvenThTd>
                    <StyledInvenThTd>5</StyledInvenThTd>
                </StyledTr>
            </StyledInvenTable>
        </StyledLeftSection>
    );
}

export default InvenLeft;