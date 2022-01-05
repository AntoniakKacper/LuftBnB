import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker, DateRange} from 'react-date-range';
import {addDays} from 'date-fns';
import {useState} from 'react';

interface CalendarProps {
    // TODO jako propsy to startDay i endDay takie jak wybrał user i lista wyłączonych dat
}

interface pickedDateRange {
    startDate?: undefined | Date;
    endDate?: undefined | Date;
    key?: undefined | string;
}

export const Calendar: React.FC<CalendarProps> = ({}) => {
    const [state, setState] = useState<pickedDateRange[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    return (
        <DateRange
            className="calendar"
            showDateDisplay={false}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            months={1}
            ranges={state}
            direction="horizontal"
            rangeColors={['#FF385CFF']}
            disabledDates={[new Date(), addDays(new Date(), 5)]}
        />
    );
};