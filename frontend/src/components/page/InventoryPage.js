import React, { useEffect, useState } from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import InvenLeft from "../ui/InvenLeft";
import InvenRight from "../ui/InvenRight";
import axios from "axios";

function InventoryPage() {
    // 재고 추가 변수 
    const [inventoryItems, setInventoryItems] = useState([]);

    // 초기 재고 데이터를 불러오는 함수
    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get('http://192.168.35.48:8080/inventory/show');
                setInventoryItems(response.data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };

        fetchInventory();
    }, []);

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
