import React from 'react';
import Link from 'next/link';
import { CButton } from '@coreui/react';

export function DetailButton() {
    return (
        <Link href="/orderdetail" passHref>
            <CButton>상세보기</CButton>
        </Link>
    );
}
