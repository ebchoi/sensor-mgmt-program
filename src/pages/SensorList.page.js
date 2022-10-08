import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SensorTable } from '../components/SensorTable.components';

export const SensorList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  /**
   * 구역 리스트 데이터 요청 함수
   * @param {*} search
   */
  const request = async () => {
    try {
      const res = await fetch(
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1db46b3-41b2-4a81-b7c6-5f85e7842cca/sensor-info-list.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221007T040734Z&X-Amz-Expires=86400&X-Amz-Signature=5d8d689076f4c1d13a47d320684e2283c6bc753097d62bf9c81653508ab39dd5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22sensor-info-list.json%22&x-id=GetObject'
      );
      const result = await res.json();
      if (result.message === 'Value_Error') {
        throw Error('Value_Error');
      } else {
        setData(result);
      }
    } catch (error) {
      console.log(error);
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
  padding: 12px 0 0;
  font-weight: bold;
  font-size: 28px;
`;
