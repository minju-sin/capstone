import React from "react";
import { StyledRightSection, StyledInvenButtonContainer } from "../styles/InvenRightCSS.js";
import { StyledRightButton } from "../styles/PosRightCSS.js";

function InvenRight() {


    return (
        <StyledRightSection class="right-section">
            <StyledInvenButtonContainer class="button-container">

                <StyledRightButton class="rightbutton">종류</StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <StyledRightButton class="button" onclick="showPopup('원두', 30)">원두</StyledRightButton>
                <StyledRightButton class="button" onclick="showPopup('바닐라', 15)">바닐라</StyledRightButton>
                <StyledRightButton class="button" onclick="showPopup('연유', 8)">연유</StyledRightButton>
                <StyledRightButton class="button" onclick="showPopup('초코시럽', 20)">초코시럽</StyledRightButton>
                <StyledRightButton class="button" onclick="showPopup('우유', 5)">우유</StyledRightButton>

                <StyledRightButton class="button">녹차</StyledRightButton>
                <StyledRightButton class="button">딸기</StyledRightButton>
                <StyledRightButton class="button">헤이즐넛</StyledRightButton>
                <StyledRightButton class="button">아이스크림</StyledRightButton>
                <StyledRightButton class="button">콜드브루</StyledRightButton>

                <StyledRightButton class="button">유자</StyledRightButton>
                <StyledRightButton class="button">설탕시럽</StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

            </StyledInvenButtonContainer>
        </StyledRightSection>
    );
}

export default InvenRight;