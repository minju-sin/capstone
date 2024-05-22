// ./ServicePage.js

import React from "react";
import { StyledBody, StyledH1, StyledHeader } from "../styles/HeaderCSS";
import ServiceLeft from "../ui/ServiceLeft";

function ServicePage() {

    return (
      <StyledBody>
        <StyledHeader class="header">
          <StyledH1>영수증 조회</StyledH1>
        </StyledHeader>

        <ServiceLeft/>

        
      </StyledBody>
    );
}

export default ServicePage;
