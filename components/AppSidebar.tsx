import React from 'react';
import {
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CNavItem,
    CNavGroup,
    CBadge,
} from '@coreui/react';
import Link from 'next/link';

function AppSidebar() {
    return (
        <>
            <CSidebar>
                <CSidebarBrand>관리자</CSidebarBrand>
                <CSidebarNav>
                    <Link href="/" passHref>
                        <CNavItem href="#">홈</CNavItem>
                    </Link>
                    <CNavItem href="#">
                        대시보드
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>
                    <CNavGroup toggler="유저 관리">
                        <CNavItem href="#">유저 리스트</CNavItem>
                        <CNavItem href="#">유저 수정</CNavItem>
                        <CNavItem href="#">유저 활성/비활성</CNavItem>
                    </CNavGroup>
                    <CNavGroup toggler="상품 관리">
                        <Link href="/items" passHref>
                            <CNavItem href="#">상품 리스트</CNavItem>
                        </Link>
                        <CNavItem href="#">상품 등록</CNavItem>
                        <CNavItem href="#">상품 수정/삭제</CNavItem>
                    </CNavGroup>
                    <CNavGroup toggler="주문 관리">
                        <Link href="/orderlist" passHref>
                            <CNavItem href="#">주문 리스트</CNavItem>
                        </Link>
                        <CNavItem href="#">주문 수정</CNavItem>
                    </CNavGroup>
                    <CNavGroup toggler="계정 관리">
                        <CNavItem href="#">계정 리스트</CNavItem>
                        <CNavItem href="#">권한 관리</CNavItem>
                    </CNavGroup>
                    <CNavGroup toggler="카테고리 관리">
                        <CNavItem href="#">카테고리 리스트</CNavItem>
                        <CNavItem href="#">카테고리 등록</CNavItem>
                        <CNavItem href="#">카테고리 수정/삭제</CNavItem>
                    </CNavGroup>
                </CSidebarNav>
            </CSidebar>
        </>
    );
}

export default AppSidebar;
