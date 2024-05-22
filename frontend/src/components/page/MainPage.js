// ./MainPage.js

import React, { useState } from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import PosLeft from "../ui/PosLeft";
import PosRight from "../ui/PosRight";

function MainPage() {

    const [orders, setOrders] = useState([]); // 메뉴 클릭 시 주문표에 추가되는 기능 
    const [receivedAmount, setReceivedAmount] = useState(0);  // 받은 금액 상태

    // 주문표 추가하는 함수
    const addOrder = (item) => {
        setOrders([...orders, item]);
    };

    // 전체 주문 목록을 비우는 함수
    const clearOrders = () => {
        setOrders([]);
    };

    // 현금 버튼 클릭 시 실행되는 함수
    const handleCashButtonClick = () => {
      const totalAmount = calculateTotalPrice();
      setReceivedAmount(totalAmount);
    };

    // 주문목록 총 금액 함수
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      orders.forEach(order => {
          totalPrice += order.price;
      });
      return totalPrice;
    };


    return (
      <StyledBody>
        <Header/>
        <StyledContainer class="container">
            <PosLeft orders={orders} clearOrders={clearOrders} receivedAmount={receivedAmount}/>
            <PosRight addOrder={addOrder} handleCashButtonClick={handleCashButtonClick}/>
        </StyledContainer>
      </StyledBody>
    );
}

export default MainPage;
