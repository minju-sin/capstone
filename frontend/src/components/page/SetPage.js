import React from "react";

import { StyledButtonIncoming, StyledNavigationBar } from "../styles/InPageCSS";
import Header from "../ui/Header";
import Footer from "../ui/Footer";


function SetPage() {

    return (
    <>

      {/* 헤더  */}
      <StyledNavigationBar className="navigation-bar">설정</StyledNavigationBar>
      <Header/>

       

      <StyledButtonIncoming href="/" className="button-incoming">
        설정
      </StyledButtonIncoming>

      <Footer/>

    </>
    );
}

export default SetPage;