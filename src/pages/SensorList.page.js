import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SensorListData from '../data/data.json';
import { SensorTable } from '../components/List/SensorTable.component';

export const SensorList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const request = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_SENSOR_LIST);
      const result = await res.json();
      if (result.message === 'Value_Error') {
        throw Error('Value_Error');
      } else {
        setData(result);
      }
    } catch (error) {
      setData(SensorListData);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <SensorListWrapper>
      <SensorListTitle className="pt-12 text-2xl font-semibold">
        조회 데이터 ({filteredData.length ? filteredData.length : data.length}
        개)
      </SensorListTitle>
      <SensorTable sensorList={filteredData.length ? filteredData : data} />
    </SensorListWrapper>
  );
};

const SensorListWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 3px 10px 0;
  gap: 5px;
`;

const SensorListTitle = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 0 12px;
  font-weight: bold;
  font-size: 28px;
`;
