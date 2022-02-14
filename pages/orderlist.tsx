import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
} from '@coreui/react';
import type { NextPage } from 'next';
import OrderHeader from '../components/OrderHeader';
import { DetailButton } from '../components/DetailButton';

const OrderList: NextPage = () => {
    return (
        <>
            <OrderHeader />
            <CTable hover>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="row">기간</CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                            상세보기
                        </CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        <CTableDataCell>
                            <DetailButton />
                        </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    );
};

export default OrderList;
