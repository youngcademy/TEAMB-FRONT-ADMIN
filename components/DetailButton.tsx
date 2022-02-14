import React from 'react';
import Link from 'next/link';
import { CButton } from '@coreui/react';

export function DetailButton() {
    return (
        <Link href="/" passHref>
            <CButton>상세보기</CButton>
        </Link>
    );
}
