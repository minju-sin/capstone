// ./ServiceRight.js

import React from "react";
import { Div, StyledArrowButton, StyledArrowButtons, StyledDoubleArrowButton, StyledRSection, StyledRhButton, StyledRightButton, StyledRightButtons, StyledRightHeader, StyledTable, StyledTd, StyledTh, Tr } from "../styles/ServiceRightCSS";
import { StyledBottomButtons, StyledFormGroup, StyledInput, StyledLabel } from "../styles/ServiceLeftCSS";
import { StyledConditionInput, StyledPopUp, StyledPopUpClose, StyledPopUpHeader } from "../styles/ServiceLeftCSS";
import Receipt from "./Receipt";

function ServiceRight() {

    return (
    <>
      <StyledRSection class="right-section">
        <Div>
            <StyledRightHeader class="right-header">
                <StyledRhButton>등록 취소 조회</StyledRhButton>
            </StyledRightHeader>

            <StyledFormGroup class="form-group">
                    <StyledLabel for="search-number">조회 번호</StyledLabel>
                    <StyledInput type="text" id="search-number"/>
            </StyledFormGroup>

            <Div class="table-container">
                <StyledTable>
                    <Tr>
                        <StyledTh>NO</StyledTh>
                        <StyledTh>POS</StyledTh>
                        <StyledTh>거래 시간</StyledTh>
                        <StyledTh>거래 형태</StyledTh>
                        <StyledTh>금액</StyledTh>
                    </Tr>
                    <Tr>
                        <StyledTd>1</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>12:00</StyledTd>
                        <StyledTd>현금</StyledTd>
                        <StyledTd>10,000</StyledTd>
                    </Tr>
                    <Tr>
                        <StyledTd>2</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>12:30</StyledTd>
                        <StyledTd>현금</StyledTd>
                        <StyledTd>5,000</StyledTd>
                    </Tr>
                    <Tr>
                        <StyledTd>3</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>13:00</StyledTd>
                        <StyledTd>현금</StyledTd>
                        <StyledTd>20,000</StyledTd>
                    </Tr>
                    <Tr>
                        <StyledTd>4</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>13:30</StyledTd>
                        <StyledTd>카드</StyledTd>
                        <StyledTd>15,000</StyledTd>
                    </Tr>
                    <Tr>
                        <StyledTd>5</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>14:00</StyledTd>
                        <StyledTd>카드</StyledTd>
                        <StyledTd>25,000</StyledTd>
                    </Tr>
                    <Tr>
                        <StyledTd>6</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>14:30</StyledTd>
                        <StyledTd>카드</StyledTd>
                        <StyledTd>30,000</StyledTd>
                    </Tr>
                    <Tr>
                        <StyledTd>7</StyledTd>
                        <StyledTd>01</StyledTd>
                        <StyledTd>15:00</StyledTd>
                        <StyledTd>현금</StyledTd>
                        <StyledTd>35,000</StyledTd>
                    </Tr>
                </StyledTable>

                <StyledArrowButtons class="arrow-buttons">
                    <StyledDoubleArrowButton class="double">≪</StyledDoubleArrowButton>
                    <StyledArrowButton>{'<'}</StyledArrowButton>
                    <StyledArrowButton>{'>'}</StyledArrowButton>
                    <StyledDoubleArrowButton class="double">≫</StyledDoubleArrowButton>
                </StyledArrowButtons>
            </Div>
            <p>※조회번호에 해당 라인을 입력 후 [반복/입력]키를 누르거나 화면에서 해당 항목을 선택하시면 왼쪽에 선택된 영수증 팝업이 보여집니다.</p>
        </Div>

        <StyledBottomButtons class="bottom-buttons" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <StyledRightButtons class="right-buttons">
                <StyledRightButton style={{background: 'red'}}>환불</StyledRightButton>
                <StyledRightButton>인쇄</StyledRightButton>
            </StyledRightButtons>
        </StyledBottomButtons>

      </StyledRSection>

      <StyledPopUp id="popup" class="popup">
        <StyledPopUpHeader class="popup-header">
            <span>영수증</span>
            <StyledPopUpClose class="popup-close">×</StyledPopUpClose>
        </StyledPopUpHeader>
        <iframe src={Receipt} style={{width: '500px', height: '500px', border: 'none'}}></iframe>
        <Div style={{ textAlign: 'right', marginTop: '20px'}}>
            <StyledConditionInput id="condition-input">조건 입력</StyledConditionInput>
        </Div>
      </StyledPopUp>
    </>
    );
}

export default ServiceRight;
