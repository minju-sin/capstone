// ./Receipt.js

import React from "react";
import Barcode from "../images/barcode.png";
import { Hr, ReceiptContent, ReceiptSection, ReceiptTitle, StyledPopUpImg } from "../styles/ServiceLeftCSS";

function Receipt() {

    return (
        <ReceiptContent style={{maxHeight: '500px', maxWidth: '500px'}}>
            <ReceiptSection>
                <ReceiptTitle>말하는 감쟈</ReceiptTitle>
                <div>주소: 엄광로 176</div>
                <div>사업자 번호: 202-13-****</div>
                <div>홈페이지: http://www.talkingpotato.com</div>
            </ReceiptSection>

            <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>POS: 01</span>
                <span>2024-05-24 22:52:55</span>
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

            <ReceiptSection style={{display: 'flex'}}>
                <span style={{flex: '2'}}>카페라떼</span>
                <span style={{flex: '1', textAlign: 'center'}}>1</span>
                <span style={{flex: '1', textAlign: 'center'}}>0</span>
                <span style={{flex: '1', textAlign: 'right'}}>3,500</span>
            </ReceiptSection>
            <ReceiptSection style={{display: 'flex'}}>
                <span style={{flex: '2'}}>딸기라떼</span>
                <span style={{flex: '1', textAlign: 'center'}}>1</span>
                <span style={{flex: '1', textAlign: 'center'}}>0</span>
                <span style={{flex: '1', textAlign: 'right'}}>4,000</span>
            </ReceiptSection>
            <ReceiptSection style={{display: 'flex'}}>
                <span style={{flex: '2'}}>아이스아메리카노</span>
                <span style={{flex: '1', textAlign: 'center'}}>1</span>
                <span style={{flex: '1', textAlign: 'center'}}>0</span>
                <span style={{flex: '1', textAlign: 'right'}}>2,000</span>
            </ReceiptSection>
            <Hr/>

            <ReceiptSection style={{display: 'flex'}}>
                <span style={{flex: '2'}}>합계</span>
                <span style={{flex: '1', textAlign: 'center'}}></span>
                <span style={{flex: '1', textAlign: 'center'}}>0</span>
                <span style={{flex: '1', textAlign: 'right'}}>2,000</span>
            </ReceiptSection>
            <Hr/>

            <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontWeight: 'bold'}}>결제금액</span>
                <span>10,500</span>
            </ReceiptSection>
            <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>[부가세 포함]</span>
                <span>(631)</span>
            </ReceiptSection>
            <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>[보증금 포함]</span>
                <span>(0)</span>
            </ReceiptSection>
            <Hr/>
            <ReceiptSection style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>[신용카드]</span>
                <span>10,500</span>
            </ReceiptSection>
            <Hr/>
            <Hr/>


            <ReceiptSection>
                <span>● 신용카드 매출전표(고객용)</span>
            </ReceiptSection>
            <ReceiptSection>
                <span>[카드사] 국민카드</span><br/>
                <span>[카드번호] 1234-5678-****-****</span><br/>
                <span>[승인금액] 10,500</span><br/>
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
