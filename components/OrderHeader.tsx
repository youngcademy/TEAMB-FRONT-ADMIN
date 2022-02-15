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
    CNavItem,
} from '@coreui/react';
import { DaterPiceker } from './Datepicker';
import { OrderChange } from './OrderChageButton';

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
                            <CNavItem>
                                <CDropdown variant="nav-item" popper={false}>
                                    <OrderChange />
                                </CDropdown>
                            </CNavItem>
                            <CDropdown variant="nav-item" popper={false}>
                                <CDropdownToggle color="secondary">
                                    검색항목
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">
                                        주문검색
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        상품검색
                                    </CDropdownItem>
                                    <CDropdownDivider />
                                    <CDropdownItem href="#">선택</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </CNavbarNav>
                        <div className="p-3">
                            <DaterPiceker />
                        </div>
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
