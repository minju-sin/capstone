import React from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import InvenLeft from "../ui/InvenLeft";
import InvenRight from "../ui/InvenRight";

function InventoryPage() {


    return (
    <StyledBody>
      <Header/>
      
        <StyledContainer class="container">
            
            <InvenLeft/>
            
            <InvenRight/>

        </StyledContainer>
    </StyledBody>
    );
}

export default InventoryPage;