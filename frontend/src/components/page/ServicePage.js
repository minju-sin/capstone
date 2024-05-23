// ./ServicePage.js

import React from "react";
import { StyledBody, StyledH1, StyledHeader } from "../styles/HeaderCSS";
import ServiceLeft from "../ui/ServiceLeft";
import { StyledMainContent, StyledServiceContainer } from "../styles/ServiceLeftCSS";
import ServiceRight from "../ui/ServiceRight";

function ServicePage() {

    return (
      <StyledBody>
        <StyledHeader class="header">
          <StyledH1>영수증 조회</StyledH1>
        </StyledHeader>

        <StyledServiceContainer>
            <StyledMainContent>
                <ServiceLeft/>
                <ServiceRight/>
            </StyledMainContent>
        </StyledServiceContainer>

        
      </StyledBody>
    );
}

export default ServicePage;
