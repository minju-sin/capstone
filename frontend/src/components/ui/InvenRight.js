import React, { useState } from "react";
import { StyledRightSection, StyledInvenButtonContainer, StyledPopUp, StyledPopUpInner, StyledB, StyledH1, StyledP, StyledCancelButton, StyledConfirmButton  } from "../styles/InvenRightCSS.js";
import { StyledRightButton } from "../styles/PosRightCSS.js";

function InvenRight() {

    const [popup, setPopup] = useState({ visible: false, item: '', quantity: 1 });

    // 팝업창 보여주는 함수 
    const showPopup = (item) => {
        setPopup({ visible: true, item, quantity: 1 });
    };

    // 취소 버튼 
    const hidePopup = () => {
        setPopup({ visible: false, item: '', quantity: 1 });
    };

    // 재고 수량 증가 함수 
    const increaseQuantity = () => {
        setPopup((prevPopup) => ({ ...prevPopup, quantity: prevPopup.quantity + 1 }));
    };

    // 재고 수량 감소 함수 
    const decreaseQuantity = () => {
        setPopup((prevPopup) => ({ ...prevPopup, quantity: Math.max(1, prevPopup.quantity - 1) }));
    };

    return (

        <StyledRightSection class="right-section">
            <StyledInvenButtonContainer class="button-container">

                <StyledRightButton class="rightbutton">종류</StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                <StyledRightButton class="rightbutton"> </StyledRightButton>
                
                <StyledRightButton class="button" onClick={() => showPopup('원두')}>원두</StyledRightButton>
                <StyledRightButton class="button" onClick={() => showPopup('바닐라')}>바닐라</StyledRightButton>
                <StyledRightButton class="button" onClick={() => showPopup('연유')}>연유</StyledRightButton>
                <StyledRightButton class="button" onClick={() => showPopup('초코시럽')}>초코시럽</StyledRightButton>
                <StyledRightButton class="button" onClick={() => showPopup('우유')}>우유</StyledRightButton>

                <StyledRightButton class="button">녹차</StyledRightButton>
                <StyledRightButton class="button">딸기</StyledRightButton>
                <StyledRightButton class="button">헤이즐넛</StyledRightButton>
                <StyledRightButton class="button">아이스크림</StyledRightButton>
                <StyledRightButton class="button">콜드브루</StyledRightButton>

                <StyledRightButton class="button">유자</StyledRightButton>
                <StyledRightButton class="button">설탕시럽</StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>
                <StyledRightButton class="button"> </StyledRightButton>

            </StyledInvenButtonContainer>

            {popup.visible && (
                <StyledPopUp className="popup">
                    <StyledPopUpInner className="popup-inner">
                        <StyledH1>{popup.item}</StyledH1>
                        
                        <StyledP>
                            <StyledB onClick={decreaseQuantity}>{"<"}</StyledB>
                            &nbsp;{popup.quantity}&nbsp;
                            <StyledB onClick={increaseQuantity}>{">"}</StyledB>
                        </StyledP>

                        <StyledCancelButton onClick={hidePopup}>취소</StyledCancelButton>
                        <StyledConfirmButton onClick={hidePopup}>확인</StyledConfirmButton>
                    </StyledPopUpInner>
                </StyledPopUp>
            )}
        </StyledRightSection>
    );
}

export default InvenRight;