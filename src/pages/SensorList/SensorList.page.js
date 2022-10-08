import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SensorTable } from '.';

export const SensorList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const request = async () => {
    try {
      const res = await fetch(
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1db46b3-41b2-4a81-b7c6-5f85e7842cca/sensor-info-list.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221008T084346Z&X-Amz-Expires=86400&X-Amz-Signature=2eacc7000f64268879d2e0429bd64d8bdaad634180bd96e7e523d067ec2d127b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22sensor-info-list.json%22&x-id=GetObject'
      );
      const result = await res.json();
      if (result.message === 'Value_Error') {
        throw Error('Value_Error');
      } else {
        setData(result);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

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
