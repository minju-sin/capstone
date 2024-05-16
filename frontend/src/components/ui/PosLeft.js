// ./PosLeft.js

import React from "react";
import { StyledLeftHalf, StyledLeftInner, StyledTable, StyledTr, StyledTh, StyledLeftMiddle, StyledLeftThird, StyledButton, StyledLeftFourth, StyledLeftFourthLeft, StyledLeftFourthMiddle, StyledLeftFourthRight } from "../styles/PosLeftCSS";



function PosLeft() {
    return (
        <StyledLeftHalf class="left-half">
            <StyledLeftInner class="left-inner">
              <StyledTable>
                    <StyledTr>
                        <StyledTh>*</StyledTh>
                        <StyledTh>메뉴명</StyledTh>
                        <StyledTh>단가</StyledTh>
                        <StyledTh>수량</StyledTh>
                        <StyledTh>할인</StyledTh>
                        <StyledTh>금액</StyledTh>
                        <StyledTh>비고</StyledTh>
                    </StyledTr>
                    <StyledTr>
                        <StyledTh>1</StyledTh>
                        <StyledTh>카페라떼</StyledTh>
                        <StyledTh>3,500</StyledTh>
                        <StyledTh>1</StyledTh>
                        <StyledTh>0</StyledTh>
                        <StyledTh>3,500</StyledTh>
                        <StyledTh> </StyledTh>
                    </StyledTr>
                    <StyledTr>
                        <StyledTh>2</StyledTh>
                        <StyledTh>아포카토</StyledTh>
                        <StyledTh>4,000</StyledTh>
                        <StyledTh>1</StyledTh>
                        <StyledTh>0</StyledTh>
                        <StyledTh>4,000</StyledTh>
                        <StyledTh> </StyledTh>
                    </StyledTr>
                    <StyledTr>
                        <StyledTh>3</StyledTh>
                        <StyledTh>카페모카</StyledTh>
                        <StyledTh>3,500</StyledTh>
                        <StyledTh>1</StyledTh>
                        <StyledTh>0</StyledTh>
                        <StyledTh>3,500</StyledTh>
                        <StyledTh> </StyledTh>
                    </StyledTr>
              </StyledTable>
            </StyledLeftInner>

            <StyledLeftMiddle class="left-middle">&nbsp;</StyledLeftMiddle>

            <StyledLeftThird class="left-third">
                <StyledButton class="button">전체<br/>취소 </StyledButton>
                <StyledButton class="button">선택<br/>취소</StyledButton>
                <StyledButton class="button">할인<br/>처리</StyledButton>
                <StyledButton class="button">수량<br/>변경</StyledButton>
                <StyledButton class="button">-</StyledButton>
                <StyledButton class="button">+</StyledButton>
                <StyledButton class="button">&lt;</StyledButton>
                <StyledButton class="button">&gt;</StyledButton>
            </StyledLeftThird>

            <StyledLeftFourth class="left-fourth">
                <StyledLeftFourthLeft class="left-fourth-left">&nbsp;</StyledLeftFourthLeft>
                <StyledLeftFourthMiddle class="left-fourth-middle">&nbsp;</StyledLeftFourthMiddle>
                <StyledLeftFourthRight class="left-fourth-right">&nbsp;</StyledLeftFourthRight>
            </StyledLeftFourth>
          </StyledLeftHalf>
    );
};

export default PosLeft;