import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({ setSelectedDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setSelectedDate(date.toISOString().replace('T', ' ').substring(0, 10));
      }}
    />
  );
};
