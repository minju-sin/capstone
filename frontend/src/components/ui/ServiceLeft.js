// ./ServicePage.js

import React from "react";
import {
     StyledFormGroup, 
     StyledInlineGroup, 
     StyledLSection, 
     StyledLabel,
     StyledSelect
} from "../styles/ServiceLeft";

function ServiceLeft() {

    return (
      <StyledLSection class="left-section">
        <div>
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
        </div>
      </StyledLSection>
    );
}

export default ServiceLeft;
