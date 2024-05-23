// ./PosRight.js

import React, { useEffect, useState } from "react";
import { StyledRightHalf, StyledButtonContainer, StyledRightButton, StyledButtonMerged, StyledA } from "../styles/PosRightCSS";
import Button from "./Button";


function PosRight({ addOrder, handleCashButtonClick   }) {
    
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        try {
            const response = await fetch('http://localhost:8080/menu');
            const data = await response.json();
            setMenuItems(data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };


    return (
        <StyledRightHalf class="right-half">
            <StyledButtonContainer class="button-container">
                <StyledRightButton class="rightbutton">종류</StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <Button/>

                {/* 가게 메뉴목록 */}
                {menuItems.map((item, index) => (
                    <StyledRightButton
                        key={index}
                        className="rightbutton"
                        onClick={() => addOrder({ name: item.idmenu, price: item.pricemenu })}
                    >
                        {item.idmenu}<br/>{item.pricemenu.toLocaleString()}원
                    </StyledRightButton>
                ))}
                
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>

                <Button/>

                <StyledButtonMerged class="button merged">기타</StyledButtonMerged>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <StyledRightButton class="button merged_col">주문</StyledRightButton>
                <StyledRightButton className="button merged_col" onClick={handleCashButtonClick}>
                    현금
                </StyledRightButton>
                <StyledRightButton class="button merged_col">신용카드</StyledRightButton>
                <StyledRightButton class="button merged_col">
                    <StyledA href="/inventory">재고</StyledA>
                </StyledRightButton>
                <StyledRightButton class="button merged_col">
                    <StyledA href="/service">서비스</StyledA>
                </StyledRightButton>
            </StyledButtonContainer>

            
        </StyledRightHalf>
    );
};

export default PosRight;