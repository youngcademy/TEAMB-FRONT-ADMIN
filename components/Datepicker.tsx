import DatePicker from 'react-datepicker';
import { useState } from 'react';

export function DaterPiceker() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <DatePicker
            dateFormat="yyyy/MM/dd"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            isClearable={true}
        />
    );
}
