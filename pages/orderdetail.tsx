import type { NextPage } from 'next';
import {
    CCard,
    CCardHeader,
    CNav,
    CNavItem,
    CNavLink,
    CCardBody,
    CCardText,
    CCardTitle,
    CButton,
} from '@coreui/react';
import Link from 'next/link';

const OrderDetail: NextPage = () => {
    return (
        <CCard className="text-center">
            <CCardHeader>
                <CNav variant="pills" className="card-header-pills">
                    <CNavItem>
                        <CNavLink href="#" active>
                            주문정보
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" active>
                            결제정보
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#" active>
                            배송지정보
                        </CNavLink>
                    </CNavItem>
                </CNav>
            </CCardHeader>
            <CCardBody>
                <CCardTitle>주문 상세페이지</CCardTitle>
                <CCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                </CCardText>
                <Link href="/orderlist">
                    <CButton href="#">주문리스트</CButton>
                </Link>
            </CCardBody>
        </CCard>
    );
};

export default OrderDetail;
