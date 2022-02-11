/* eslint-disable @typescript-eslint/no-unused-vars */
//계정관리	권한관리
import React, { useMemo } from 'react';
import type { NextPage } from 'next';
import {
    CCallout,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
    CFormInput,
} from '@coreui/react';

const adminInfo: NextPage = () => {
    return (
        <>
            <CCallout color="primary">관리자 정보 페이지입니다.</CCallout>;
            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                        <CTableHeaderCell scope="col">직책</CTableHeaderCell>
                        <CTableHeaderCell scope="col">권한</CTableHeaderCell>
                        <CTableHeaderCell scope="col">email</CTableHeaderCell>
                        <CTableHeaderCell scope="col">추가</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                {/* 테이블헤더 [0열] */}
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="row">
                            <CFormInput
                                placeholder="이름"
                                aria-label="username"
                                aria-describedby="basic-addon1"
                                disabled
                            />
                        </CTableHeaderCell>
                        <CTableDataCell>
                            <CFormInput
                                placeholder="직책"
                                aria-label="class"
                                aria-describedby="basic-addon2"
                                disabled
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                placeholder="권한"
                                aria-label="authority"
                                aria-describedby="basic-addon3"
                                disabled
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="emailinfo"
                                placeholder="email"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                            />
                        </CTableDataCell>
                        <CButton color="dark" variant="ghost">
                            추가
                        </CButton>
                    </CTableRow>
                    {/*데이터 1열 */}

                    <CTableRow color="primary">
                        <CTableHeaderCell scope="row">
                            <CFormInput
                                placeholder="이름"
                                aria-label="username2"
                                aria-describedby="basic-addon1"
                                disabled
                            />
                        </CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>
                    {/*데이터 2열 */}
                    <CTableRow color="secondary">
                        <CTableHeaderCell scope="row">
                            Secondary
                        </CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>

                    <CTableRow color="success">
                        <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>

                    <CTableRow color="danger">
                        <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>

                    <CTableRow color="warning">
                        <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>

                    <CTableRow color="info">
                        <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>

                    <CTableRow color="light">
                        <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>

                    <CTableRow color="dark">
                        <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CButton color="dark">수정</CButton>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    );
};

export default adminInfo;
