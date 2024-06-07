// ./Receipt.js

import React from "react";
import Barcode from "../images/barcode.png";
import { Hr, ReceiptContent, ReceiptSection, ReceiptTitle, StyledPopUpImg } from "../styles/ServiceLeftCSS";

function Receipt({ receiptData }) {
  const { idorder, date, total, items } = receiptData;

  return (
    <ReceiptContent style={{maxHeight: '500px', maxWidth: '500px'}}>
        <ReceiptSection>
            <ReceiptTitle>말하는 감쟈</ReceiptTitle>
            <div>주소: 엄광로 176</div>
            <div>사업자 번호: 202-13-****</div>
            <div>홈페이지: http://www.talkingpotato.com</div>
        </ReceiptSection>

        <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>주문번호: {idorder}</span>
            <span>{new Date(date).toLocaleString()}</span>
        </ReceiptSection>
        <Hr/>
        <Hr/>

        <ReceiptSection style={{display: 'flex'}}>
            <span style={{flex: '2'}}>상품</span>
            <span style={{flex: '1', textAlign: 'center'}}>수량</span>
            <span style={{flex: '1', textAlign: 'center'}}>할인</span>
            <span style={{flex: '1', textAlign: 'right'}}>금액</span>
        </ReceiptSection>
        <Hr/>
      
        {items.map((item, index) => (
            <ReceiptSection style={{display: 'flex'}}>
                <span style={{flex: '2'}}>{item.name}</span>
                <span style={{flex: '1', textAlign: 'center'}}>{item.quantity}</span>
                <span style={{flex: '1', textAlign: 'center'}}>0</span>
                <span style={{flex: '1', textAlign: 'right'}}>{item.price.toLocaleString()} 원</span>
            </ReceiptSection>
        ))}

        <ReceiptSection>
                <span>● 신용카드 매출전표(고객용)</span>
        </ReceiptSection>

        <ReceiptSection>
            <span>[카드사] 국민카드</span><br/>
            <span>[카드번호] 1234-5678-****-****</span><br/>
            <span>[승인금액] {total.toLocaleString()} 원</span><br/>
            <span>[승인번호] 75513401</span><br/>
            <span>[할부] 일시불</span><br/>
            <span>[승인일자] 20240524</span>
        </ReceiptSection>
        <Hr/>
        <Hr/>
        <ReceiptSection style={{textAlign: 'center'}}>
            <StyledPopUpImg src={Barcode}/>
        </ReceiptSection>

    </ReceiptContent>
  );
}

export default Receipt;
