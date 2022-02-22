import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { CCard, CButton } from '@coreui/react';
import Link from 'next/link';
// import SortIcon from '@material-ui/icons/ArrowDownward';

const DetailButton = function () {
    return (
        <Link href="/orders/details" passHref>
            <CButton>상세보기</CButton>
        </Link>
    );
};

type DataRow = {
    ordernumber: string;
    items: string;
    name: string;
    total: string;
    purchase: string;
};

const columns: TableColumn<DataRow>[] = [
    {
        name: '주문일시',
        selector: (row) => row.ordernumber,
        sortable: true,
    },
    {
        name: '주문상품',
        selector: (row) => row.items,
        sortable: true,
    },
    {
        name: '주문자/수령인',
        selector: (row) => row.name,
        sortable: true,
        // right: true,
    },
    {
        name: '주문금액/배송비',
        selector: (row) => row.total,
        sortable: true,
    },
    {
        name: '결제방식',
        selector: (row) => row.purchase,
        sortable: true,
    },
    {
        name: '상세보기',
        button: true,
        cell: () => <DetailButton />,
    },
];

const data = [
    {
        id: 1,
        ordernumber: '주문번호',
        items: '티셔츠',
        name: '이서우',
        total: '10000',
        purchase: '신용카드',
    },
    {
        id: 2,
        ordernumber: '주문번호',
        items: '시계',
        name: '이서우',
        total: '100000',
        purchase: '신용카드',
    },
    {
        id: 3,
        ordernumber: '주문번호',
        items: '바지',
        name: '이서우',
        total: '20000',
        purchase: '신용카드',
    },
    {
        id: 4,
        ordernumber: '주문번호',
        items: '모자',
        name: '이서우',
        total: '5000',
        purchase: '현금',
    },
];

export default function Table1(): JSX.Element {
    return (
        <div className="Table1">
            <CCard>
                <DataTable
                    title="Movies"
                    columns={columns}
                    data={data}
                    defaultSortFieldId="title"
                    // sortIcon={<SortIcon />}
                    pagination
                    selectableRows
                />
            </CCard>
        </div>
    );
}
