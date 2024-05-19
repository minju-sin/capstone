import React from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import InvenLeft from "../ui/InvenLeft";


function InventoryPage() {


    return (
    <StyledBody>
      <Header/>
      
        <StyledContainer class="container">
            
            <InvenLeft/>

        </StyledContainer>
    </StyledBody>
    );
}

export default InventoryPage;