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
    CPaginationItem,
    CPagination,
} from '@coreui/react';
import type { NextPage } from 'next';

const userlist: NextPage = () => {
    return (
        <>
            <CCard>
                <CCardHeader>유저 리스트</CCardHeader>
                <CCardBody>
                    <CTable responsive>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">
                                    #
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
                                    1
                                </CTableHeaderCell>
                                <CTableDataCell>1</CTableDataCell>
                                <CTableDataCell>2</CTableDataCell>
                                <CTableDataCell>3</CTableDataCell>
                                <CTableDataCell>4</CTableDataCell>
                                <CTableDataCell>5</CTableDataCell>
                                <CTableDataCell>6</CTableDataCell>
                                <CTableDataCell>7</CTableDataCell>
                                <CTableDataCell>8</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    2
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
                                    3
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
                        <CButton color="primary">검색</CButton>
                        <CButton color="info" variant="outline">
                            수정
                        </CButton>
                    </div>
                </CCardBody>
                <CPagination
                    align="center"
                    aria-label="Page navigation example"
                >
                    <CPaginationItem aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </CPaginationItem>
                    <CPaginationItem>1</CPaginationItem>
                    <CPaginationItem>2</CPaginationItem>
                    <CPaginationItem>3</CPaginationItem>
                    <CPaginationItem aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                </CPagination>
            </CCard>
        </>
    );
};

export default userlist;
