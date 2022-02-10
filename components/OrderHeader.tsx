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
    CDropdownMenu,
    CDropdownToggle,
    CDropdownItem,
    CDropdownDivider,
    // CForm,
    CFormInput,
    CButton,
    CInputGroup,
} from '@coreui/react';

export default function OrderHeader() {
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
                            <CDropdown variant="nav-item" popper={false}>
                                <CDropdownToggle color="secondary">
                                    상품상태
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">입금</CDropdownItem>
                                    <CDropdownItem href="#">
                                        결제완료
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        상품준비중
                                    </CDropdownItem>
                                    <CDropdownItem href="#">배송</CDropdownItem>
                                    <CDropdownItem href="#">
                                        구매확정
                                    </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CDropdown variant="nav-item" popper={false}>
                                <CDropdownToggle color="secondary">
                                    검색항목
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">주문</CDropdownItem>
                                    <CDropdownItem href="#">상품</CDropdownItem>
                                    <CDropdownDivider />
                                    <CDropdownItem href="#">선택</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
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
