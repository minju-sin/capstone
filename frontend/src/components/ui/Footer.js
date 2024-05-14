// ./Footer.js

import React from "react";
import { StyledBottomNavigation, StyledBottomNavigationA, StyledIcon} from "../styles/FooterCSS";
import home from '../images/footer/home.png';
import inn from '../images/footer/in.png';
import out from '../images/footer/out.png';
import set from '../images/footer/set.png';


function Footer() {
    return (
        <>
        <StyledBottomNavigation className="bottom-navigation">

            <StyledBottomNavigationA href="/">
            <StyledIcon src={home} className="icon" alt="home" />
            홈
            </StyledBottomNavigationA>

            <StyledBottomNavigationA href="/in">
            <StyledIcon src={inn} className="icon" alt="입고" />
            입고
            </StyledBottomNavigationA>

            <StyledBottomNavigationA href="/out">
            <StyledIcon src={out} className="icon" alt="출고" />
            출고
            </StyledBottomNavigationA>

            <StyledBottomNavigationA href="/set">
            <StyledIcon src={set} className="icon" alt="설정" />
            설정
            </StyledBottomNavigationA>

        </StyledBottomNavigation>
        </>
    );
};

export default Footer;