import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({ setSelectedDate, setEndDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledDatePicker
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

const StyledDatePicker = styled(DatePicker)`
  padding: 10px 20px;
  border: 2px solid #216ba5;
  border-radius: 50px;
  background-color: #216ba5;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
