import React, { useState } from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import PosLeft from "../ui/PosLeft";
import PosRight from "../ui/PosRight";

function MainPage() {

    // 메뉴 클릭 시 주문표에 추가되는 기능 
    const [orders, setOrders] = useState([]);

    const addOrder = (item) => {
        setOrders([...orders, item]);
    };

    // 전체 주문 목록을 비우는 함수
    const clearOrders = () => {
      setOrders([]);
    };

    return (
    <StyledBody>
      <Header/>
      
        <StyledContainer class="container">
          
          <PosLeft orders={orders} clearOrders={clearOrders}/>

          <PosRight addOrder={addOrder}/>

        </StyledContainer>
    </StyledBody>
    );
}

export default MainPage;