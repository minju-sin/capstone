// ./PosLeft.js

import React, { useState } from "react";
import { StyledRightHalf, StyledButtonContainer, StyledRightButton, StyledButtonMerged } from "../styles/PosRightCSS";


function PosRight() {

    const [orders, setOrders] = useState([]);

    const handleAddOrder = (item) => {
        setOrders([...orders, item]);
    };

    const menuItems = [
        { name: "아메리카노", price: 3000 },
        { name: "카페라떼", price: 3500 },
        { name: "카페모카", price: 3500 },
        { name: "돌체라떼", price: 3500 },
        { name: "바닐라라떼", price: 3500 },
        { name: "콜드브루", price: 3500 },
        { name: "아포카토", price: 4000 },
        { name: "카푸치노", price: 3500 },
        { name: "유자차", price: 3500 },
        { name: "녹차라떼", price: 3500 },
        { name: "딸기라떼", price: 4000 },
    ];

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

                {/* 가게 메뉴목록 */}
                {menuItems.map((item, index) => (
                    <StyledRightButton
                        key={index}
                        className="rightbutton"
                        onClick={() => handleAddOrder(item)}
                    >
                        {item.name}<br/>{item.price.toLocaleString()}
                    </StyledRightButton>
                ))}

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
                <StyledRightButton class="button merged_col">
                    <a href="/inventory">재고</a>
                </StyledRightButton>
                <StyledRightButton class="button merged_col">서비스</StyledRightButton>
            </StyledButtonContainer>
        </StyledRightHalf>
    );
};

export default PosRight;