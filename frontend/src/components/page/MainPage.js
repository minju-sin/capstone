import React from "react";

import { StyledBox, StyledBoxDetails, StyledBoxImg, StyledButtonIncoming, StyledContainer, StyledNavigationBar } from "../styles/MainPageCSS";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

import Abalone from '../images/전복.jpg';
import Calamari from '../images/오징어.jpg';
import Webfoot from '../images/쭈꾸미.jpg';


function MainPage() {

    return (
    <>

      {/* 헤더  */}
      <StyledNavigationBar className="navigation-bar">물류 입고</StyledNavigationBar>
      <Header/>

        {/* 내용  */}
      <StyledContainer className="container">
        <StyledBox className="box">
          <StyledBoxImg src={Abalone} alt="물류 상품 사진" />
          <StyledBoxDetails className="box-details">
            <h2>전복 (10KG)</h2>
            <p>갯수: 34</p>
          </StyledBoxDetails>
          <button>X</button>
        </StyledBox>

        <StyledBox className="box">
          <StyledBoxImg src={Calamari} alt="물류 상품 사진" />
          <StyledBoxDetails className="box-details">
            <h2>오징어 (20KG)</h2>
            <p>갯수: 50</p>
          </StyledBoxDetails>
          <button>X</button>
        </StyledBox>

        <StyledBox className="box">
          <StyledBoxImg src={Webfoot} alt="물류 상품 사진" />
          <StyledBoxDetails className="box-details">
            <h2>쭈꾸미 (20KG)</h2>
            <p>갯수: 100</p>
          </StyledBoxDetails>
          <button>X</button>
        </StyledBox>
      </StyledContainer>

      <StyledButtonIncoming href="#" className="button-incoming">
        입고하기
      </StyledButtonIncoming>

      <Footer/>

    </>
    );
}

export default MainPage;