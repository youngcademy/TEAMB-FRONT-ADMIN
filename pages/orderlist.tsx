import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CFormCheck,
} from '@coreui/react';
import type { NextPage } from 'next';
import OrderHeader from '../components/OrderHeader';
import { DetailButton } from '../components/DetailButton';
import Link from 'next/link';

const OrderList: NextPage = () => {
    return (
        <>
            <OrderHeader />
            <CTable hover>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">
                            <CFormCheck />
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문일시
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문상품
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문자/수령인
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            주문금액/배송비
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            결제방식
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            상세보기
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormCheck />
                        </CTableHeaderCell>
                        <CTableDataCell>주문번호</CTableDataCell>
                        <CTableDataCell>줄무늬 티셔츠 외 3건</CTableDataCell>
                        <CTableDataCell>이서우</CTableDataCell>
                        <CTableDataCell>123,456원/무료</CTableDataCell>
                        <CTableDataCell>신용카드</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormCheck />
                        </CTableHeaderCell>
                        <CTableDataCell>주문번호</CTableDataCell>
                        <CTableDataCell>줄무늬 티셔츠 외 3건</CTableDataCell>
                        <CTableDataCell>이서우</CTableDataCell>
                        <CTableDataCell>123,456원/무료</CTableDataCell>
                        <CTableDataCell>신용카드</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormCheck />
                        </CTableHeaderCell>
                        <CTableDataCell>
                            주문일시
                            <div>
                                <Link href="/orderdetail">
                                    <a>주문번호</a>
                                </Link>
                            </div>
                        </CTableDataCell>
                        <CTableDataCell>줄무늬 티셔츠 외 3건</CTableDataCell>
                        <CTableDataCell>이서우</CTableDataCell>
                        <CTableDataCell>123,456원/무료</CTableDataCell>
                        <CTableDataCell>신용카드</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormCheck />
                        </CTableHeaderCell>
                        <CTableDataCell>주문번호</CTableDataCell>
                        <CTableDataCell>줄무늬 티셔츠 외 3건</CTableDataCell>
                        <CTableDataCell>이서우</CTableDataCell>
                        <CTableDataCell>123,456원/무료</CTableDataCell>
                        <CTableDataCell>신용카드</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormCheck />
                        </CTableHeaderCell>
                        <CTableDataCell>주문번호</CTableDataCell>
                        <CTableDataCell>줄무늬 티셔츠 외 3건</CTableDataCell>
                        <CTableDataCell>이서우</CTableDataCell>
                        <CTableDataCell>123,456원/무료</CTableDataCell>
                        <CTableDataCell>신용카드</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    );
};

export default OrderList;
