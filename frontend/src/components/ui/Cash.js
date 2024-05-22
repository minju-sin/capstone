import React from 'react';
import { StyledCancelButton, StyledConfirmButton, StyledH1, StyledP, StyledPopUp, StyledPopUpInner } from '../styles/InvenRightCSS';

const Cash = ({ onClose }) => (
    
    <StyledPopUp onClick={onClose}>
        <StyledPopUpInner>
            <StyledH1 style={{marginTop:'65px'}}>현금결제</StyledH1>

            <StyledP style={{textAlign:'center', color:'#f44336'}}>결제를 진행하겠습니까?</StyledP>

            <StyledCancelButton onClick={onClose}>나가기</StyledCancelButton>
            <StyledConfirmButton>영수증 없이 결제</StyledConfirmButton>
        </StyledPopUpInner>
    </StyledPopUp>

);

export default Cash;
