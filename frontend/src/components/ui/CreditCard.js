// ./CreditCard.js

import React from "react";
import { StyledCancelButton, StyledH1, StyledP, StyledPopUp, StyledPopUpInner } from "../styles/InvenRightCSS";


function CreditCard({ onClose }) {



    return (
        <StyledPopUp className="popup">
                    <StyledPopUpInner className="popup-inner">
                        <StyledH1>카드 결제</StyledH1>
                        
                        <StyledP>
                            결제를 진행하고 있습니다...
                        </StyledP>
                        <StyledP style={{color: "red"}}>
                            잠시만 기다려 주세요
                        </StyledP>
                        
                        <StyledCancelButton onClick={onClose}>취소</StyledCancelButton>
                    </StyledPopUpInner>
        </StyledPopUp>
        
        
    );
}

export default CreditCard;
