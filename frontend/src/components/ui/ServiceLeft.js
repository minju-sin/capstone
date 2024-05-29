// ./ServiceLeft.js

import React from "react";
import {
     StyledFormGroup, 
     StyledInlineGroup, 
     StyledLSection, 
     StyledLabel,
     StyledSelect,
     StyledInput,
     StyledServiceButton,
     StyledBottomButtons,
     StyledLeftButtons,
     StyledLeftButton
} from "../styles/ServiceLeftCSS";
import { Div } from "../styles/ServiceRightCSS";
import { StyledA } from "../styles/PosRightCSS";

function ServiceLeft() {

    return (
      <StyledLSection class="left-section">
        <Div>
            <StyledInlineGroup class="inline-group">
                <StyledFormGroup class="form-group">
                    <StyledLabel for="pos-number">POS No</StyledLabel>
                    <StyledSelect id="pos-number">
                        <option value="">선택</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        {/* <!-- 추가 옵션들 --> */}
                    </StyledSelect>
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel for="transaction-type">거래 종류</StyledLabel>
                    <StyledSelect id="transaction-type">
                        <option value="">선택</option>
                        <option value="sale">전체</option>
                        <option value="card">카드</option>
                        <option value="cash">현금</option>
                         {/* <!-- 추가 옵션들 --> */}
                    </StyledSelect>
                </StyledFormGroup>
            </StyledInlineGroup>

            <StyledInlineGroup>
                <StyledFormGroup class="form-group">
                    <StyledLabel for="business-date-start">영업 일자</StyledLabel>
                    <StyledInput type="date" id="business-date-start"/>
                </StyledFormGroup>

                <StyledFormGroup class="form-group">
                    <StyledLabel for="business-date-end">영업 일자 종료</StyledLabel>
                    <StyledInput type="date" id="business-date-end"/>
                </StyledFormGroup>
            </StyledInlineGroup>

            <StyledInlineGroup>
                <StyledFormGroup class="form-group">
                    <StyledLabel for="time-period-start">시간대별 시작</StyledLabel>
                    <StyledInput type="time" id="time-period-start"/>
                </StyledFormGroup>

                <StyledFormGroup class="form-group">
                    <StyledLabel for="time-period-end">시간대별 종료</StyledLabel>
                    <StyledInput type="time" id="time-period-end"/>
                </StyledFormGroup>
            </StyledInlineGroup>

            <StyledInlineGroup>
                <StyledFormGroup class="form-group">
                    <StyledLabel for="amount-range-min">금액별 최소</StyledLabel>
                    <StyledInput type="number" id="amount-range-min" value={0}/>
                </StyledFormGroup>

                <StyledFormGroup class="form-group">
                    <StyledLabel for="amount-range-max">금액별 최대</StyledLabel>
                    <StyledInput type="number" id="amount-range-max" value={999999}/>
                </StyledFormGroup>
            </StyledInlineGroup>

            <StyledFormGroup class="form-group">
                    <StyledLabel for="product-barcode1">상품 바코드1</StyledLabel>
                    <StyledInlineGroup>
                        <StyledInput type="text" id="product-barcode1"/>
                        <StyledServiceButton>상품명으로 조회</StyledServiceButton>
                    </StyledInlineGroup>
            </StyledFormGroup>

            <StyledFormGroup class="form-group">
                    <StyledLabel for="product-barcode2">상품 바코드2</StyledLabel>
                    <StyledInlineGroup>
                        <StyledInput type="text" id="product-barcode2"/>
                        <StyledServiceButton>상품명으로 조회</StyledServiceButton>
                    </StyledInlineGroup>
            </StyledFormGroup>

            <StyledFormGroup>
                <StyledServiceButton>조회</StyledServiceButton>
            </StyledFormGroup>
        </Div>

        <StyledBottomButtons class="bottom-buttons">
                    <StyledLeftButtons class="left-buttons">
                        <StyledLeftButton><StyledA href="/">이전[CLEAR]</StyledA></StyledLeftButton>
                        <StyledLeftButton>간이영수증 출력</StyledLeftButton>
                    </StyledLeftButtons>
        </StyledBottomButtons>

      </StyledLSection>
    );
}

export default ServiceLeft;
