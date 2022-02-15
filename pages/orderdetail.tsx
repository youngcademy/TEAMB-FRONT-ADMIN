import type { NextPage } from 'next';
import { useState } from 'react';
import {
    CCard,
    CCardHeader,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CCardBody,
    // CCardText,
    // CCardTitle,
    // CButton,
    CContainer,
    CRow,
    CCol,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
} from '@coreui/react';
import { OrderChange } from '../components/OrderChageButton';
// import Link from 'next/link';

const OrderDetail: NextPage = () => {
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
                        주문정보
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 2}
                        onClick={() => setActiveKey(2)}
                    >
                        결제정보
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                        href="javascript:void(0);"
                        active={activeKey === 3}
                        onClick={() => setActiveKey(3)}
                    >
                        배송정보
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
                        <CCardHeader component="h5">
                            <CContainer>
                                <CRow>
                                    <CCol sm="auto">주문번호 123123123</CCol>
                                    <CCol sm="auto">
                                        주문일시 2022.01.01 시간
                                    </CCol>
                                </CRow>
                            </CContainer>
                        </CCardHeader>
                        <CCardBody>
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            주문상품
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문금액
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문상태
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            송장번호
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            <OrderChange />
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CTabPane>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="결제정보-tab"
                    visible={activeKey === 2}
                >
                    <CCard>
                        <CCardHeader component="h5">
                            <CContainer>
                                <CRow>
                                    <CCol sm="auto">주문번호 123123123</CCol>
                                    <CCol sm="auto">
                                        주문일시 2022.01.01 시간
                                    </CCol>
                                </CRow>
                            </CContainer>
                        </CCardHeader>
                        <CCardBody>
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            주문상품
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문금액
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문상태
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            주문상태
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            송장번호
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            상태변경
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            상태변경
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            의류 사진 상품 이름 옵션: 선택/수량
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                        <CTableDataCell>
                                            상태변경
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CTabPane>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="배송정보-tab"
                    visible={activeKey === 3}
                ></CTabPane>
            </CTabContent>
        </>
    );
};

export default OrderDetail;
