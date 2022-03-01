import React from 'react';
import { useState } from 'react';
import {
    CNavbar,
    // CNavItem,
    CContainer,
    CNavbarBrand,
    CCollapse,
    CNavbarToggler,
    CNavbarNav,
    // CNavLink,
    CDropdown,
    // CDropdownMenu,
    // CDropdownToggle,
    // CDropdownItem,
    // CDropdownDivider,
    CFormSelect,
    CFormInput,
    CButton,
    CInputGroup,
    CNavItem,
} from '@coreui/react';

export default function OrderHeader() {
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
    const [visible, setVisible] = useState(false);

    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
                <CContainer fluid>
                    <CNavbarBrand href="#">주문리스트</CNavbarBrand>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav>
                            <CNavItem>
                                <CDropdown variant="nav-item" popper={false}>
                                    <OrderChange />
                                </CDropdown>
                            </CNavItem>
                            <CFormSelect aria-label="Default select example">
                                <option>검색항목</option>
                                <option value="1">주문검색</option>
                                <option value="2">상품검색</option>
                            </CFormSelect>
                        </CNavbarNav>
                        <CInputGroup>
                            <CFormInput
                                type="search"
                                placeholder="검색"
                                aria-label="주문검색 with two button addons"
                            />
                            <CButton type="submit" color="secondary">
                                조회
                            </CButton>
                            <CButton type="submit" color="primary">
                                초기화
                            </CButton>
                        </CInputGroup>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    );
}
