// ./Close.js

import React from "react";
import { DLreceiptContent, DLreceiptSection, DLreceiptSectionFlex, DLreceiptTitle, DoubleLine, Flex05, Sign, SpanCenter, SpanFlex2, SpanRight } from "../styles/CloseCSS";

function Close() {

    return (
      <DLreceiptContent>
        <DoubleLine/>
        <DLreceiptTitle>
            <span>■ 영 업 마 감 내 역 ■</span>
        </DLreceiptTitle>

        <DoubleLine/>
        <DLreceiptSection>
            <span class="label">영업 일자 :</span>
            <span class="value">2024년 06월 14일</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">매 장 명 :</span>
            <span class="value">말하는 감쟈(동의대점)</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">POS 번호 :</span>
            <span class="value">01</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">담 당 자 :</span>
            <span class="value">감자들</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">개점 일시 :</span>
            <span class="value">2024/06/14 10:00:30</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">마감 일시 :</span>
            <span class="value">2024/06/14 20:00:30</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">출력 일시 :</span>
            <span class="value">2024/06/14 20:00:30</span>
        </DLreceiptSection>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>마 감 요 약 내 역</span>
        </DLreceiptTitle>
        <DoubleLine/>

        <DLreceiptSectionFlex>
            <SpanFlex2>총 매 출 액 : </SpanFlex2>
            <SpanCenter>78건</SpanCenter>
            <SpanRight>489,200</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>할 인 금 액 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>27,500</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>순 매 출 액 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>461,700</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>부 가 세 액 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>41,978</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>NET매 출 액 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>419,722</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>봉 사 료 액 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>반 품 금 액 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>영 수 단 가 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>5,919</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>총 고 객 수 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>78</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>객 단 가 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>5,919</SpanRight>
        </DLreceiptSectionFlex>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>영 업 매 출 내 역</span>
        </DLreceiptTitle>
        <DoubleLine/>
        <DLreceiptSectionFlex>
            <SpanFlex2>현 금 : </SpanFlex2>
            <Flex05>4 건</Flex05>
            <SpanRight>131,300</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>-현금영수증 : </SpanFlex2>
            <Flex05>0 건</Flex05>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>-임의 등록 : </SpanFlex2>
            <Flex05>0 건</Flex05>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>-단순 현금 : </SpanFlex2>
            <Flex05>4 건</Flex05>
            <SpanRight>131,300</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>신 용 카 드 : </SpanFlex2>
            <Flex05>70 건</Flex05>
            <SpanRight>330,400</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>-임의 등록 : </SpanFlex2>
            <Flex05>0 건</Flex05>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>반 품 금 액 : </SpanFlex2>
            <Flex05>0건</Flex05>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>영 수 단 가 : </SpanFlex2>
            <Flex05></Flex05>
            <SpanRight>5,919</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>총 고 객 수 : </SpanFlex2>
            <Flex05></Flex05>
            <SpanRight>78</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>객 단 가 : </SpanFlex2>
            <Flex05></Flex05>
            <SpanRight>5,919</SpanRight>
        </DLreceiptSectionFlex>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>현 금 비 매 출 내 역 (참조용)</span>
        </DLreceiptTitle>
        <DoubleLine/>
        <DLreceiptSectionFlex>
            <SpanFlex2>-현금비매출 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>-사후 발행 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>할 인 내 역</span>
        </DLreceiptTitle>
        <DoubleLine/>
        <DLreceiptSectionFlex>
            <SpanFlex2>일 반 : </SpanFlex2>
            <SpanCenter>3건</SpanCenter>
            <SpanRight>13,500</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>고 객 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>제 휴 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>쿠 폰 : </SpanFlex2>
            <SpanCenter>7건</SpanCenter>
            <SpanRight>14,000</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>서비스 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>프로모션 : </SpanFlex2>
            <SpanCenter>0건</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DoubleLine/>


        <DoubleLine/>
        <DLreceiptTitle>
            <span>입 출 금 내 역</span>
        </DLreceiptTitle>
        <DoubleLine/>
        <DLreceiptSection>
            <span class="label">영업 준비금 : </span>
            <span class="value">107,200</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">수시 입금액 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">수시 출금액 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">현금 환불액 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">기타 환불액 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">상품권 현금 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">상품권 카드 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">선 불 현 금 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">선 불 카 드 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">선불 환불액 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">외상 입금액 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">전자화폐충전 : </span>
            <span class="value">0</span>
        </DLreceiptSection>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>시 재 내 역</span>
        </DLreceiptTitle>
        <DoubleLine/>
        <DLreceiptSectionFlex>
            <SpanFlex2>현금 및 수표 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>238,500</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 기타 수표 : </SpanFlex2>
            <SpanCenter></SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 100,000원 : </SpanFlex2>
            <SpanCenter>0 매</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 50,000원 : </SpanFlex2>
            <SpanCenter>2 매</SpanCenter>
            <SpanRight>100,000</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 10,000원 : </SpanFlex2>
            <SpanCenter>5 매</SpanCenter>
            <SpanRight>50,000</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 5,000원 : </SpanFlex2>
            <SpanCenter>7 매</SpanCenter>
            <SpanRight>35,000</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 1,000원 : </SpanFlex2>
            <SpanCenter>17 매</SpanCenter>
            <SpanRight>17,000</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 500원 : </SpanFlex2>
            <SpanCenter>52 매</SpanCenter>
            <SpanRight>26,000</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 100원 : </SpanFlex2>
            <SpanCenter>105 매</SpanCenter>
            <SpanRight>10,500</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 50원 : </SpanFlex2>
            <SpanCenter>0 매</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>- 10원 : </SpanFlex2>
            <SpanCenter>0 매</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>상 품 권 : </SpanFlex2>
            <SpanCenter>0 매</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DLreceiptSectionFlex>
            <SpanFlex2>쿠 폰 : </SpanFlex2>
            <SpanCenter>0 매</SpanCenter>
            <SpanRight>0</SpanRight>
        </DLreceiptSectionFlex>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>재 고 평 가 서</span>
        </DLreceiptTitle>
        <DoubleLine/>
        <DLreceiptSection>
            <span class="label">재고 자산 :</span>
            <span class="value"> 135,500</span>
        </DLreceiptSection>
        <DLreceiptSection>
            <span class="label">원두 :</span>
            <span class="value"> 90</span>
        </DLreceiptSection>
        <DoubleLine/>

        <DoubleLine/>
        <DLreceiptTitle>
            <span>과 부 족 내 역</span>
        </DLreceiptTitle>
        <hr/>
        <DLreceiptTitle>
            <span>과부족 내역이 없습니다.</span>
        </DLreceiptTitle>
        <DoubleLine/>
        
        <br/>

        서 명 :
        <Sign/>
        <br/><br/>
        <span style={{display: 'inline-block', verticalAlign: 'middle'}}>* 마감내역을 확인 후 서명하려 주십시오 *</span>
      </DLreceiptContent>
    );
}

export default Close;
