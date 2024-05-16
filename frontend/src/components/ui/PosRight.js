// ./PosLeft.js

import React from "react";
import { StyledButtonContainer, StyledButtonMerged, StyledRightButton, StyledRightHalf } from "../styles/PosRightCSS";



function PosRight() {
    return (
        <StyledRightHalf class="right-half">
            <StyledButtonContainer class="button-container">
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

                <StyledRightButton class="rightbutton">아메리카노<br/>3,000</StyledRightButton>
                <StyledRightButton class="rightbutton">카페라떼<br/>3,500</StyledRightButton>
                <StyledRightButton class="rightbutton">카페모카<br/>3,500</StyledRightButton>
                <StyledRightButton class="rightbutton">연유라떼<br/>3,500</StyledRightButton>
                <StyledRightButton class="rightbutton">토피넛라떼<br/>3,500</StyledRightButton>

                <StyledRightButton class="rightbutton">콜드브루<br/>3,500</StyledRightButton>
                <StyledRightButton class="rightbutton">아포카토<br/>4,000</StyledRightButton>
                <StyledRightButton class="rightbutton">카푸치노<br/>3,500</StyledRightButton>
                <StyledRightButton class="rightbutton">유자차<br/>3,500</StyledRightButton>
                <StyledRightButton class="rightbutton">녹차라떼<br/>3,500</StyledRightButton>

                <StyledRightButton class="rightbutton">딸기라떼<br/>4,000</StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>

                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>

                <StyledButtonMerged class="button merged">기타</StyledButtonMerged>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <StyledRightButton class="button merged_col">주문</StyledRightButton>
                <StyledRightButton class="button merged_col">현금</StyledRightButton>
                <StyledRightButton class="button merged_col">신용카드</StyledRightButton>
                <StyledRightButton class="button merged_col">재고</StyledRightButton>
                <StyledRightButton class="button merged_col">서비스</StyledRightButton>
            </StyledButtonContainer>
        </StyledRightHalf>
    );
};

export default PosRight;