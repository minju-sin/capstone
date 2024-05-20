import React, { useState } from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import InvenLeft from "../ui/InvenLeft";
import InvenRight from "../ui/InvenRight";

function InventoryPage() {
    // 재고 추가 변수 
    const [inventoryItems, setInventoryItems] = useState([]);

    // 재고 추가하는 함수 
    const addItemToInventory = (item, quantity) => {
        setInventoryItems(prevItems => [
            ...prevItems,
            { item, quantity }
        ]);
    };

    return (
        <StyledBody>
            <Header/>
            <StyledContainer className="container">
                <InvenLeft inventoryItems={inventoryItems} />
                <InvenRight addItemToInventory={addItemToInventory} />
            </StyledContainer>
        </StyledBody>
    );
}

export default InventoryPage;
