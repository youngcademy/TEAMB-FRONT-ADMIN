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
} from '@coreui/react';
import type { NextPage } from 'next';

const List: NextPage = () => {
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
                        <CButton color="primary">초기화</CButton>
                    </div>
                </CCardBody>
            </CCard>
        </>
    );
};

export default List;
