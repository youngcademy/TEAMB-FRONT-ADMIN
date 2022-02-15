import React from 'react';
// import Link from 'next/link';
import {
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
} from '@coreui/react';

export function OrderChange() {
    return (
        <CDropdown variant="nav-item" popper={false}>
            <CDropdownToggle>주문상태</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem href="#">입금</CDropdownItem>
                <CDropdownItem href="#">결제완료</CDropdownItem>
                <CDropdownItem href="#">상품준비중</CDropdownItem>
                <CDropdownItem href="#">배송</CDropdownItem>
                <CDropdownItem href="#">구매확정</CDropdownItem>
                <CDropdownItem href="#">취소요청</CDropdownItem>
                <CDropdownItem href="#">교환요청</CDropdownItem>
                <CDropdownItem href="#">환불완료</CDropdownItem>
                <CDropdownItem href="#">교환완료</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
}
