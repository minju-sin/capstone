// ./ClosePage.js

import React, { useState, useEffect } from "react";
import { StyledBody, StyledH1, StyledHeader } from "../styles/HeaderCSS";
import Close from "../ui/Close";
import axios from "axios";

function ClosePage() {
  // 재고 변수 
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

    return (
      <StyledBody>
        <StyledHeader class="header">
          <StyledH1>마감영수증</StyledH1>
        </StyledHeader>

        <Close inventoryItems={inventoryItems} />

        
      </StyledBody>
    );
}

export default ClosePage;
