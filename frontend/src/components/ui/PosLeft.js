// ./PosLeft.js

import React, { useState } from "react";
import { StyledLeftHalf, StyledLeftInner, StyledTable, StyledTr, StyledTh, StyledLeftMiddle, StyledLeftThird, StyledButton, StyledLeftFourth, StyledLeftFourthLeft, StyledLeftFourthMiddle, StyledLeftFourthRight, StyledLeftFourthLeftButton, StyledLeftFourthLeft2, StyledCenter, StyledNum, StyledInfoRow, StyledLabel, StyledValue } from "../styles/PosLeftCSS";



function PosLeft({ orders, clearOrders, removeSelectedOrder, receivedAmount  }) {
    const [selectedOrderIndex, setSelectedOrderIndex] = useState(null); // 선택된 주문 인덱스

    // 주문 목록의 가격 총합을 계산하는 함수
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        orders.forEach(order => {
            totalPrice += order.price;
        });
        return totalPrice;
    };

    // 주문 선택 처리 함수
    const handleOrderClick = (index) => {
        if (selectedOrderIndex === index) {
            setSelectedOrderIndex(null); // 이미 선택된 주문을 클릭하면 선택 해제
        } else {
            setSelectedOrderIndex(index); // 새로운 주문 선택
        }
    };
    
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
                    {orders.map((order, index) => (
                            <StyledTr
                                key={index}
                                onClick={() => handleOrderClick(index)} // 클릭 시 주문 선택
                                style={{
                                    backgroundColor:
                                        selectedOrderIndex === index ? "#f0f0f0" : "transparent", // 선택된 주문 하이라이트
                                    cursor: "pointer"
                                }}
                            >
                                <StyledTh>{index + 1}</StyledTh>
                                <StyledTh>{order.name}</StyledTh>
                                <StyledTh>{order.price.toLocaleString()}</StyledTh>
                                <StyledTh>1</StyledTh>
                                <StyledTh>0</StyledTh>
                                <StyledTh>{order.price.toLocaleString()}</StyledTh>
                                <StyledTh></StyledTh>
                            </StyledTr>
                    ))}
                </StyledTable>
            </StyledLeftInner>

            <StyledLeftMiddle class="left-middle">&nbsp;</StyledLeftMiddle>

            <StyledLeftThird class="left-third">
                <StyledButton className="button" onClick={clearOrders}>
                    전체<br/>취소
                </StyledButton>
                <StyledButton className="button" onClick={() => removeSelectedOrder(selectedOrderIndex)}>
                선택<br />취소
                </StyledButton>
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

                    <StyledLeftFourthLeftButton class="button" style={{color: "#ff6600"}}>Information</StyledLeftFourthLeftButton>
                    <StyledInfoRow>
                        <StyledLabel>총 금액 </StyledLabel>
                        <StyledValue>{calculateTotalPrice().toLocaleString()}원</StyledValue>
                    </StyledInfoRow>
                    <StyledInfoRow>
                        <StyledLabel>할인금액</StyledLabel>
                        <StyledValue>0원</StyledValue>
                    </StyledInfoRow>
                    <StyledInfoRow>
                        <StyledLabel style={{color: "#ff6600"}}>받을금액</StyledLabel>
                        <StyledValue>{calculateTotalPrice().toLocaleString()}원</StyledValue>
                    </StyledInfoRow>
                    <StyledInfoRow>
                        <StyledLabel>받은금액</StyledLabel>
                        <StyledValue>{receivedAmount.toLocaleString()}원</StyledValue>
                    </StyledInfoRow>
                    <StyledInfoRow>
                        <StyledLabel style={{color: "#ff6600"}}>거스름돈</StyledLabel>
                        <StyledValue style={{color: "#ff6600"}}>0원</StyledValue>
                    </StyledInfoRow>

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