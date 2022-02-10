import {
    CHeader,
    CContainer,
    CHeaderBrand,
    CCard,
    CCardHeader,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CForm,
    CFormLabel,
    CFormInput,
    CFormText,
    CRow,
    CCol,
    CFormSelect,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
} from '@coreui/react';
import type { NextPage } from 'next';

const List: NextPage = () => {
    return (
        <>
            <CCard>
                <CCardHeader>상품 리스트</CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                상품명
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                브랜드
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                상품 분류
                            </CFormLabel>
                            <CCol>
                                <CFormSelect aria-label="Default select example">
                                    <option>선택하세요</option>
                                    <option value="1">상의</option>
                                    <option value="2">하의</option>
                                    <option value="3">아우터</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                판매 가격
                            </CFormLabel>
                            <CCol>
                                <CFormSelect aria-label="Default select example">
                                    <option>선택하세요</option>
                                    <option value="1">만원 이하</option>
                                    <option value="2">만원 이상</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                    </CForm>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <CButton color="primary">검색</CButton>
                        <CButton color="primary">초기화</CButton>
                    </div>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">
                                    #
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    상품명
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    컬러
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    브랜드
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    사이즈
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    상품 분류
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    판매 가격
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    1
                                </CTableHeaderCell>
                                <CTableDataCell>
                                    핫한 세미와이드 슬랙스
                                </CTableDataCell>
                                <CTableDataCell>베이지</CTableDataCell>
                                <CTableDataCell>귀여운 마녀</CTableDataCell>
                                <CTableDataCell>26</CTableDataCell>
                                <CTableDataCell>슬랙스</CTableDataCell>
                                <CTableDataCell>22,000</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    2
                                </CTableHeaderCell>
                                <CTableDataCell>
                                    멋진 테이퍼드 슬랙스
                                </CTableDataCell>
                                <CTableDataCell>블랙</CTableDataCell>
                                <CTableDataCell>멋진 남자</CTableDataCell>
                                <CTableDataCell>29</CTableDataCell>
                                <CTableDataCell>슬랙스</CTableDataCell>
                                <CTableDataCell>28,000</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    3
                                </CTableHeaderCell>
                                <CTableDataCell>
                                    핫한 세미와이드 슬랙스
                                </CTableDataCell>
                                <CTableDataCell>베이지</CTableDataCell>
                                <CTableDataCell>귀여운 마녀</CTableDataCell>
                                <CTableDataCell>26</CTableDataCell>
                                <CTableDataCell>슬랙스</CTableDataCell>
                                <CTableDataCell>22,000</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">
                                    4
                                </CTableHeaderCell>
                                <CTableDataCell>
                                    멋진 테이퍼드 슬랙스
                                </CTableDataCell>
                                <CTableDataCell>블랙</CTableDataCell>
                                <CTableDataCell>멋진 남자</CTableDataCell>
                                <CTableDataCell>29</CTableDataCell>
                                <CTableDataCell>슬랙스</CTableDataCell>
                                <CTableDataCell>28,000</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    );
};

export default List;
