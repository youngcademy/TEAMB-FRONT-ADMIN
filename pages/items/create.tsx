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
    CFormTextarea,
} from '@coreui/react';
import type { NextPage } from 'next';

const Create: NextPage = () => {
    return (
        <>
            <CCard className="mb-1">
                <CCardHeader>상품 등록</CCardHeader>
                <CCardBody>
                    <CForm>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                이미지 선택
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="file" id="formFile" />
                            </CCol>
                        </CRow>
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
                                컬러
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                            <CCol>
                                <CButton color="primary" variant="outline">
                                    추가
                                </CButton>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel
                                htmlFor="inputEmail3"
                                className="col-sm-1 col-form-label"
                            >
                                사이즈
                            </CFormLabel>
                            <CCol>
                                <CFormInput type="text" />
                            </CCol>
                            <CCol>
                                <CButton color="primary" variant="outline">
                                    추가
                                </CButton>
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
                                <CFormInput type="text" />
                            </CCol>
                        </CRow>
                    </CForm>
                </CCardBody>
            </CCard>
            <CCard className="mb-1">
                <CCardBody>
                    <CForm>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">
                                상품 상세설명
                            </CFormLabel>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></CFormTextarea>
                        </div>
                        <CButton color="primary">등록</CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    );
};

export default Create;
