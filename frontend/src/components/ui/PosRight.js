// ./PosRight.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledRightHalf, StyledButtonContainer, StyledRightButton, StyledButtonMerged, StyledA } from "../styles/PosRightCSS";
import Button from "./Button";
import CreditCard from "./CreditCard";


function PosRight({ addOrder, handleCashButtonClick   }) {
    
    const [menuItems, setMenuItems] = useState([]); // 메뉴판 상태
    const [isCreditCardPopupVisible, setIsCreditCardPopupVisible] = useState(false); // 신용카드 


    // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect 훅을 사용하여 데이터를 가져옴
    useEffect(() => {
        fetchMenuItems(); // fetchMenuItems 함수 호출
    }, []);

    // 서버에서 메뉴 아이템 데이터를 가져오는 비동기 함수
    const fetchMenuItems = async () => {
        try {
            const response = await axios.get('http://localhost:8080/pos/menu'); // axios를 사용하여 GET 요청을 보냅니다.
            setMenuItems(response.data); // 응답 데이터를 상태에 설정합니다.
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    // 신용카드 결제 팝업창 열기 
    const openCreditCardPopup = () => {
        setIsCreditCardPopupVisible(true);
    };

    // 신용카드 결제 팝업창 닫기
    const closeCreditCardPopup = () => {
        setIsCreditCardPopupVisible(false);
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
                <StyledRightButton className="button merged_col" onClick={openCreditCardPopup}>
                    신용카드
                </StyledRightButton>
                {/* 신용카드 팝업창 */}
                {isCreditCardPopupVisible && 
                    <CreditCard onClose={closeCreditCardPopup} />
                }
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