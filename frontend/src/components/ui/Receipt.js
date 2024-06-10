// ./Receipt.js

import React from "react";
import Barcode from "../images/barcode.png";
import { Div, Hr, ReceiptContent, ReceiptSection, ReceiptTitle, Span, StyledPopUpImg } from "../styles/ServiceLeftCSS";

function Receipt({ receiptData }) {
    const { idorder, date, total, transactionType, items } = receiptData;

  return (
    <ReceiptContent style={{maxHeight: '500px', width: '500px'}}>
        <ReceiptSection>
            <ReceiptTitle>말하는 감쟈</ReceiptTitle>
            <Div>주소: 엄광로 176</Div>
            <Div>사업자 번호: 202-13-****</Div>
            <Div>홈페이지: http://www.talkingpotato.com</Div>
        </ReceiptSection>

        <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
            <Span>주문번호: {idorder}</Span>
            <Span>{new Date(date).toLocaleString()}</Span>
        </ReceiptSection>
        <Hr/>
        <Hr/>

        <ReceiptSection style={{display: 'flex'}}>
            <Span style={{flex: '2'}}>상품</Span>
            <Span style={{flex: '1', textAlign: 'center'}}>수량</Span>
            <Span style={{flex: '1', textAlign: 'center'}}>할인</Span>
            <Span style={{flex: '1', textAlign: 'right'}}>금액</Span>
        </ReceiptSection>
        <Hr/>

        {items.map((item, index) => (
            <ReceiptSection style={{display: 'flex'}}>
                <Span style={{flex: '2'}}>{item.name}</Span>
                <Span style={{flex: '1', textAlign: 'center'}}>{item.quantity}</Span>
                <Span style={{flex: '1', textAlign: 'center'}}>0</Span>
                <Span style={{flex: '1', textAlign: 'right'}}>{item.price.toLocaleString()} 원</Span>
            </ReceiptSection>
        ))}
        <Hr/>

        <ReceiptSection style={{display: 'flex'}}>
            <Span style={{flex: '2'}}>합계</Span>
            <Span style={{flex: '1', textAlign: 'center'}}></Span>
            <Span style={{flex: '1', textAlign: 'center'}}>0</Span>
            <Span style={{flex: '1', textAlign: 'right'}}>{total.toLocaleString()}</Span>
        </ReceiptSection>
        <Hr/>

        <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
            <Span style={{fontWeight: 'bold', fontSize: '18px'}}>결제금액</Span>
            <Span>{total.toLocaleString()}</Span>
        </ReceiptSection>
        <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
            <Span>[부가세 포함]</Span>
            <Span>(631)</Span>
        </ReceiptSection>
        <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
            <Span>[보증금 포함]</Span>
            <Span>(0)</Span>
        </ReceiptSection>
        <Hr/>

        <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
            <Span>[{transactionType}]</Span>
            <Span>{total.toLocaleString()}</Span>
        </ReceiptSection>
        <Hr/>
        <Hr/>


        <ReceiptSection>
                <Span style={{fontSize: '18px'}}>▪️ {transactionType} 매출전표(고객용)</Span>
        </ReceiptSection>

        {/* 거래 유형이 신용카드일 때 */}
        {transactionType === "신용카드" && (
                <ReceiptSection>
                    <Span>[카드사] 국민카드</Span><br />
                    <Span>[카드번호] 1234-5678-****-****</Span><br />
                    <Span>[승인금액] {total.toLocaleString()} 원</Span><br />
                    <Span>[승인번호] 75513401</Span><br />
                    <Span>[할부] 일시불</Span><br />
                    <Span>[승인일자] {new Date(date).toLocaleString()}</Span>
                </ReceiptSection>
        )}

        {/* 거래 유형이 현금일 때 */}
        {transactionType === "현금" && (
                <ReceiptSection>
                    <Span>[승인금액] {total.toLocaleString()} 원</Span><br />
                    <Span>[승인번호] 75513401</Span><br />
                    <Span>[할부] 일시불</Span><br />
                    <Span>[승인일자] {new Date(date).toLocaleString()}</Span>
                </ReceiptSection>
        )}
        <Hr/>
        <Hr/>
        <ReceiptSection style={{textAlign: 'center'}}>
            <StyledPopUpImg src={Barcode}/>
        </ReceiptSection>

    </ReceiptContent>
  );
}

export default Receipt;
