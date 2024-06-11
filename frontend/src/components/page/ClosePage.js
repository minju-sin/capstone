// ./ClosePage.js

import React from "react";
import { StyledBody, StyledH1, StyledHeader } from "../styles/HeaderCSS";
import Close from "../ui/Close";

function ClosePage() {

    return (
      <StyledBody>
        <StyledHeader class="header">
          <StyledH1>마감영수증</StyledH1>
        </StyledHeader>

        <Close/>

        
      </StyledBody>
    );
}

export default ClosePage;
