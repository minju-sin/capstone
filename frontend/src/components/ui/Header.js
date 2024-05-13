// ./Footer.js

import React from "react";
import { StyledNavigaionBarAfter, StyledStatusBar } from "../styles/HeaderCSS";


function Header() {
    return (
        <>
            <StyledStatusBar className="status-bar"></StyledStatusBar>
            <StyledNavigaionBarAfter className="navigation-bar_after"></StyledNavigaionBarAfter>
        </>
    );
};

export default Header;