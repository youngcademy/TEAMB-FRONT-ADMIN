import type { NextPage } from 'next';
import React, { useRef } from 'react';
import { CButton, CForm, CFormLabel, CFormInput, CCol } from '@coreui/react';

import axios from 'axios';

const Login: NextPage = () => {
    const inputID = useRef<HTMLInputElement>(null);
    const inputPW = useRef<HTMLInputElement>(null);
    function handleClick() {
        axios
            .post('http://localhost:1234/login', {
                userID: inputID?.current?.value,
                userPW: inputPW?.current?.value,
            })
            .then(function (response) {
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
                console.log('에러에러');
            });
    }
    return (
        <>
            <CForm className="row g-3">
                <CCol md={6}>
                    <CFormLabel>ID</CFormLabel>
                    <CFormInput type="text" id="inputID" ref={inputID} />
                </CCol>
                <CCol md={6}>
                    <CFormLabel>Password</CFormLabel>
                    <CFormInput
                        type="password"
                        id="inputPassword"
                        ref={inputPW}
                    />
                </CCol>
            </CForm>
            <CButton onClick={handleClick}>제출</CButton>
        </>
    );
};

export default Login;
