import DataTable, { TableColumn } from 'react-data-table-component';

type DataRow = {
    title: string;
    year: string;
};

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];

export default function Table(): JSX.Element {
    return <DataTable columns={columns} data={data} />;
}
