import React from "react";
import Header from "../ui/Header";
import { StyledBody } from "../styles/HeaderCSS";
import { StyledContainer } from "../styles/PosLeftCSS";
import PosLeft from "../ui/PosLeft";
import PosRight from "../ui/PosRight";




function MainPage() {

    return (
    <StyledBody>
      <Header/>
      
        <StyledContainer class="container">
          
          <PosLeft/>

          <PosRight/>

        </StyledContainer>
    </StyledBody>
    );
}

export default MainPage;