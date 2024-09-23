// ./Header.js

import React from "react";
import { StyledH1, StyledHeader } from "../styles/HeaderCSS";


function Header() {
    return (
        
        <StyledHeader class="header">
          <StyledH1>아신 POS 재고 관리</StyledH1>
        </StyledHeader>
        
    );
};

export default Header;