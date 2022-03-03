import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import {
    CCard,
    CCardHeader,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CCardBody,
    CCardFooter,
    CContainer,
    CRow,
    CCol,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
    CFormSelect,
} from '@coreui/react';

const Cancel: NextPage = () => {
    const OrderChange = () => {
        return (
            <CFormSelect aria-label="Default select example">
                <option>상태</option>
                <option value="1">입금</option>
                <option value="2">결제완료</option>
                <option value="3">상품준비중</option>
                <option value="4">배송</option>
                <option value="5">구매확정</option>
                <option value="6">취소요청</option>
                <option value="7">반품요청</option>
                <option value="8">교환요청</option>
                <option value="9">환불완료</option>
                <option value="10">교환완료</option>
            </CFormSelect>
        );
    };

    const [activeKey, setActiveKey] = useState(1);
    return (
        <>
            <CNav variant="tabs" role="tablist">
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 1}
                        onClick={() => setActiveKey(1)}
                    >
                        취소
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 2}
                        onClick={() => setActiveKey(2)}
                    >
                        교환
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 3}
                        onClick={() => setActiveKey(3)}
                    >
                        반품
                    </CNavLink>
                </CNavItem>
            </CNav>
            <CTabContent>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="주문정보-tab"
                    visible={activeKey === 1}
                >
                    <CCard>
                        <CCardHeader component="h5">취소상품</CCardHeader>
                        <CCardBody className="text-center">
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            상품번호
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            상품명
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            취소수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            판매가
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            합계금액
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            취소사유
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CButton>수정</CButton>
                        </CCardBody>
                    </CCard>
                </CTabPane>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="결제정보-tab"
                    visible={activeKey === 2}
                >
                    <CCard>
                        <CCardHeader component="h5">교환취소상품</CCardHeader>
                        <CCardBody className="text-center">
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            상품번호
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            상품명
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            취소수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            판매가
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            합계금액
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            교환사유
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CButton>수정</CButton>
                        </CCardBody>
                    </CCard>
                </CTabPane>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="배송정보-tab"
                    visible={activeKey === 3}
                >
                    <CCard>
                        <CCardHeader component="h5">반품상품</CCardHeader>
                        <CCardBody className="text-center">
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            상품번호
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            상품명
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            취소수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            판매가
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            합계금액
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            반품사유
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            123456
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            트위드자켓
                                        </CTableDataCell>
                                        <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CButton>수정</CButton>
                        </CCardBody>
                    </CCard>
                </CTabPane>
            </CTabContent>
        </>
    );
};

export default Cancel;
