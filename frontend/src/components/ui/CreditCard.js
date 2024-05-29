import React, { useEffect } from "react";
import { StyledCancelButton, StyledH1, StyledP, StyledPopUp, StyledPopUpInner } from "../styles/InvenRightCSS";

function CreditCard({ onClose }) {

    // 현재 카드 단말기를 이용할 수는 없기 때문에 카드 결제가 성공했다고 생각하고 진행
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // 3초 후에 onClose 함수 호출
        }, 3000); // 3000 밀리초 = 3초

        // 컴포넌트가 언마운트되거나 onClose 함수가 변경될 때 타이머를 정리
        return () => clearTimeout(timer);
    }, [onClose]); // onClose가 변경될 때마다 useEffect 재실행

    return (
        <StyledPopUp className="popup">
            <StyledPopUpInner className="popup-inner">
                <StyledP>카드 결제</StyledP>
                <StyledH1 style={{color: "#f44336"}}>결제 진행 중...</StyledH1>
                <StyledP>잠시만 기다려 주세요</StyledP>
                <StyledCancelButton onClick={onClose}>취소</StyledCancelButton>
            </StyledPopUpInner>
        </StyledPopUp>
    );
}

export default CreditCard;
