import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({ setSelectedDate, setEndDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setSelectedDate(date.toISOString().replace('T', ' ').substring(0, 10));
        setEndDate(
          new Date(+date + 24 * 60 * 60 * 1000)
            .toISOString()
            .replace('T', ' ')
            .substring(0, 10)
        );
      }}
    />
  );
};
