import {
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CFormCheck,
    CNavbar,
    CForm,
    CContainer,
    CFormInput,
    CNavbarBrand,
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu,
} from '@coreui/react';
import type { NextPage } from 'next';

const List: NextPage = () => {
    return (
        <>
            <CCard>
                <CCardHeader>
                    <CNavbar colorScheme="light" className="bg-light">
                        <CContainer fluid>
                            <CNavbarBrand href="#">유저리스트</CNavbarBrand>
                            <CDropdown>
                                <CDropdownToggle href="#" color="warning">
                                    회원등급
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">
                                        우수회원
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        기업회원
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        일반회원
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        운영진
                                    </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CForm className="d-flex">
                                <CFormInput
                                    type="search"
                                    className="me-2"
                                    placeholder="Search"
                                />
                                <CButton
                                    type="submit"
                                    color="success"
                                    variant="outline"
                                >
                                    Search
                                </CButton>
                            </CForm>
                        </CContainer>
                    </CNavbar>
                </CCardHeader>

                <CCardBody>
                    <CTable responsive>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">
                                    <CFormCheck />
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    이름
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    ID
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    회원유형
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    누적구매액
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    적립금
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    가입일
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    회원등급
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    1:1문의
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    <CFormCheck
                                        inline
                                        id="inlineCheckbox1"
                                        value="option1"
                                        label="1"
                                    />
                                </CTableHeaderCell>

                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    <CFormCheck
                                        inline
                                        id="inlineCheckbox1"
                                        value="option1"
                                        label="2"
                                    />
                                </CTableHeaderCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    <CFormCheck
                                        inline
                                        id="inlineCheckbox1"
                                        value="option1"
                                        label="3"
                                    />
                                </CTableHeaderCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <CButton color="primary">완료</CButton>
                        <CButton color="info" variant="outline">
                            수정
                        </CButton>
                    </div>
                </CCardBody>
            </CCard>
        </>
    );
};

export default List;
