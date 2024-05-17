// ./PosLeft.js

import React from "react";
import { StyledLeftHalf, StyledLeftInner, StyledTable, StyledTr, StyledTh, StyledLeftMiddle, StyledLeftThird, StyledButton, StyledLeftFourth, StyledLeftFourthLeft, StyledLeftFourthMiddle, StyledLeftFourthRight, StyledLeftFourthLeftButton, StyledLeftFourthLeft2, StyledCenter, StyledNum } from "../styles/PosLeftCSS";



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
                <StyledLeftFourthLeft class="left-fourth-left">
                    <StyledLeftFourthLeft2>
                        <StyledLeftFourthLeftButton class="left-fourth-left-button">결제정보</StyledLeftFourthLeftButton>
                        <StyledLeftFourthLeftButton class="left-fourth-left-button">결제내역</StyledLeftFourthLeftButton>
                        <StyledLeftFourthLeftButton class="left-fourth-left-button">회원정보</StyledLeftFourthLeftButton>
                    </StyledLeftFourthLeft2>

                    <StyledButton class="button">Information</StyledButton>
                    <div>
                        <span>총 금액 </span>
                        <span>11,000</span>
                    </div>
                    <div>
                        <span>할인금액</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>받을금액</span>
                        <span>11,000</span>
                    </div>
                    <div>
                        <span>받은금액</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>거스름돈</span>
                        <span> </span>
                    </div>

                </StyledLeftFourthLeft>

                <StyledLeftFourthMiddle class="left-fourth-middle">
                    
                    <StyledCenter>
                        <StyledButton class="button" style={{width: '90%', marginLeft: '30px'}}>&nbsp;</StyledButton>
                    </StyledCenter>

                    <StyledNum>
                        <StyledButton class="button" style={{width: '30%'}}>7</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>8</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>9</StyledButton>
                    </StyledNum>

                    <StyledNum>
                        <StyledButton class="button" style={{width: '30%'}}>4</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>5</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>6</StyledButton>
                    </StyledNum>

                    <StyledNum>
                        <StyledButton class="button" style={{width: '30%'}}>1</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>2</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>3</StyledButton>
                    </StyledNum>

                    <StyledNum>
                        <StyledButton class="button" style={{width: '30%'}}>0</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>00</StyledButton>
                        <StyledButton class="button" style={{width: '30%'}}>C</StyledButton>
                    </StyledNum>

                    <StyledNum>
                        <StyledButton class="button" style={{width: '30%'}}>&lt;</StyledButton>
                        <StyledButton class="button" style={{width: '60%'}}>Enter</StyledButton>
                    </StyledNum>
                    
                </StyledLeftFourthMiddle>

                <StyledLeftFourthRight class="left-fourth-right">
                    <StyledButton class="button" style={{flex: 1, width: 'calc(100% - 10px)'}}>포장</StyledButton>
                    <StyledButton class="button" style={{flex: 1, width: 'calc(100% - 10px)'}}>환전</StyledButton>
                    <StyledButton class="button" style={{flex: 1, width: 'calc(100% - 10px)'}}>확장메뉴</StyledButton>
                    <StyledButton class="button" style={{flex: 1, width: 'calc(100% - 10px)'}}></StyledButton>
                    <StyledButton class="button" style={{flex: 1, width: 'calc(100% - 10px)'}}></StyledButton>
                </StyledLeftFourthRight>

            </StyledLeftFourth>
          </StyledLeftHalf>
    );
};

export default PosLeft;