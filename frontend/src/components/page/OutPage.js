import React from "react";

import { StyledButtonIncoming, StyledNavigationBar } from "../styles/InPageCSS";
import Header from "../ui/Header";
import Footer from "../ui/Footer";


function OutPage() {

    return (
    <>

      {/* 헤더  */}
      <StyledNavigationBar className="navigation-bar">물류 출고</StyledNavigationBar>
      <Header/>

       

      <StyledButtonIncoming href="/" className="button-incoming">
        출고하기
      </StyledButtonIncoming>

      <Footer/>

    </>
    );
}

export default OutPage;