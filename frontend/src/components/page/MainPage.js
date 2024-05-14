import React from "react";

import { StyledButtonIncoming, StyledNavigationBar } from "../styles/InPageCSS";
import Header from "../ui/Header";
import Footer from "../ui/Footer";


function MainPage() {

    return (
    <>

      {/* 헤더  */}
      <StyledNavigationBar className="navigation-bar">재고 관리</StyledNavigationBar>
      <Header/>

       

      <StyledButtonIncoming href="/scan" className="button-incoming">
        입고하기
      </StyledButtonIncoming>

      <Footer/>

    </>
    );
}

export default MainPage;