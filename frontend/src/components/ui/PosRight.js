// ./PosRight.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledRightHalf, StyledButtonContainer, StyledRightButton, StyledButtonMerged, StyledA } from "../styles/PosRightCSS";
import Button from "./Button";


function PosRight({ addOrder, handleCashButtonClick   }) {
    
    const [menuItems, setMenuItems] = useState([]); // 메뉴판 상태

    // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect 훅을 사용하여 데이터를 가져옴
    useEffect(() => {
        fetchMenuItems(); // fetchMenuItems 함수 호출
    }, []);

    // 서버에서 메뉴 아이템 데이터를 가져오는 비동기 함수
    const fetchMenuItems = async () => {
        try {
            // 서버로 GET 요청을 보내고 응답을 받음
            const response = await fetch('http://localhost:8080/menu');

            // 응답 데이터를 JSON 형식으로 변환
            const data = await response.json();

            // 메뉴 아이템 상태를 업데이트
            setMenuItems(data);

        } catch (error) {
            // 에러가 발생한 경우 콘솔에 에러 메시지를 출력
            console.error('에러가 발생했습니다.', error);
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