import React from "react";

import { StyledButtonIncoming, StyledNavigationBar } from "../styles/InPageCSS";
import Header from "../ui/Header";
import Footer from "../ui/Footer";


function ScanPage() {

    return (
    <>

      {/* 헤더  */}
      <StyledNavigationBar className="navigation-bar">영수증 스캔</StyledNavigationBar>
      <Header/>

       

      <StyledButtonIncoming href="/" className="button-incoming">
        스캔하기
      </StyledButtonIncoming>

      <Footer/>

    </>
    );
}

export default ScanPage;