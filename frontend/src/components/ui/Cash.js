import React from 'react';
import { StyledCancelButton, StyledConfirmButton, StyledH1, StyledP, StyledPopUp, StyledPopUpInner } from '../styles/InvenRightCSS';

const Cash = ({ orders = [], onClose }) => (
  <>
    <StyledPopUp onClick={onClose}>
        <StyledPopUpInner>
            <StyledH1>현금결제</StyledH1>

            <StyledP style={{color: "#ff6600"}}>받을금액</StyledP>
            <StyledP>원</StyledP>

            <StyledCancelButton onClick={onClose}>취소</StyledCancelButton>
            <StyledConfirmButton>완료</StyledConfirmButton>
        </StyledPopUpInner>
    </StyledPopUp>
  </>
);

export default Cash;
