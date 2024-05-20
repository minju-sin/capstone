import React, { useState } from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import InvenLeft from "../ui/InvenLeft";
import InvenRight from "../ui/InvenRight";

function InventoryPage() {
    // State to hold inventory items
    const [inventoryItems, setInventoryItems] = useState([]);

    // Function to add item to inventory
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
