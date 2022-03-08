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
    const CancelReason = () => {
        return (
            <CFormSelect aria-label="Default select example">
                <option>사유</option>
                <option value="1">단순변심</option>
                <option value="2">상품불량/파손</option>
                <option value="3">배송지연</option>
                <option value="4">상품품절</option>
                <option value="5">기타</option>
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
            {/* 취소 탭 */}
            <CTabContent>
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="취소-tab"
                    visible={activeKey === 1}
                >
                    <CCard>
                        <CCardHeader component="h5">
                            취소상품 - 취소번호, 주문번호
                        </CCardHeader>
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
                                            <CancelReason />
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
                                            <CancelReason />
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
                                            <CancelReason />
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CTable striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell
                                            scope="col"
                                            colSpan={8}
                                        >
                                            취소금액
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            취소상품금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>500</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            취소금액합계
                                        </CTableHeaderCell>
                                        <CTableDataCell>1000</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CTable striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell
                                            scope="col"
                                            colSpan={8}
                                        >
                                            변경금액
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell
                                            scope="row"
                                            align="center"
                                        >
                                            할인금액 변경
                                        </CTableHeaderCell>
                                        <CTableDataCell>-0</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            배송비 변경
                                        </CTableHeaderCell>
                                        <CTableDataCell>-0</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            할인금액 변경
                                        </CTableHeaderCell>
                                        <CTableDataCell>-0</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            재계산합계
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            1000
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                            </CTable>
                        </CCardBody>
                    </CCard>
                    <CCard className="text-center">
                        <CCardHeader>결제 방식 : 신용카드</CCardHeader>
                        <CCardBody>
                            <CTable bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 상품금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 할인금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>0000원</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                        <CCardFooter className="text-medium-emphasis">
                            최종 결제 금액 : 000000원
                        </CCardFooter>
                    </CCard>
                    <CButton>수정</CButton>
                    <CButton>취소철회</CButton>
                </CTabPane>
                {/* 교환 탭 */}
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="교환-tab"
                    visible={activeKey === 2}
                >
                    <CCard>
                        <CCardHeader component="h5">교환취소상품</CCardHeader>
                        <CCardBody className="text-center">
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell
                                            scope="col"
                                            colSpan={7}
                                        >
                                            주문상품
                                        </CTableHeaderCell>
                                    </CTableRow>
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
                                            <CancelReason />
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
                                            <CancelReason />
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
                                            <CancelReason />
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <CTable bordered>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell
                                            scope="col"
                                            colSpan={7}
                                        >
                                            교환상품
                                        </CTableHeaderCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">
                                            상품번호
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            상품명
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            교환수량
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            판매가
                                        </CTableHeaderCell>
                                        <CTableHeaderCell scope="col">
                                            합계금액
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
                                        <CTableDataCell>200</CTableDataCell>
                                        <CTableDataCell>500</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                    <CCard className="text-center">
                        <CCardHeader>결제 방식 : 신용카드</CCardHeader>
                        <CCardBody>
                            <CTable bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 상품금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>00000원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            배송비
                                        </CTableHeaderCell>
                                        <CTableDataCell>0원</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            총 할인금액
                                        </CTableHeaderCell>
                                        <CTableDataCell>0000원</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                        <CCardFooter className="text-medium-emphasis">
                            최종 결제 금액 : 000000원
                        </CCardFooter>
                    </CCard>
                    <CCard className="text-center">
                        <CCardBody>
                            <CTable bordered>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            수령인
                                        </CTableHeaderCell>
                                        <CTableDataCell>이서우</CTableDataCell>
                                        <CTableHeaderCell scope="row">
                                            전화번호
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            000-0000-0000
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            주소
                                        </CTableHeaderCell>
                                        <CTableDataCell colSpan={4}>
                                            주소 찾기 + 상세 주소
                                        </CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">
                                            요청사항
                                        </CTableHeaderCell>
                                        <CTableDataCell
                                            colSpan={4}
                                        ></CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CTabPane>
                {/* 반품 탭 */}
                <CTabPane
                    role="tabpanel"
                    aria-labelledby="반품-tab"
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
                                            <CancelReason />
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
                                            <CancelReason />
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
                                            <CancelReason />
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
