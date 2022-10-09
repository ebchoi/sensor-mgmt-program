import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GET_GRAPH_DATA_API } from '../config';
import { Calendar, ExportButton } from '../components/index.components';
import { Graphs } from '../containers/index.containers';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

export const GraphDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().replace('T', ' ').substring(0, 10)
  );
  const [endDate, setEndDate] = useState(
    new Date(+new Date() + 24 * 60 * 60 * 1000)
      .toISOString()
      .replace('T', ' ')
      .substring(0, 10)
  );
  const [channelData, setChannelData] = useState();
  const [feedData, setFeedData] = useState();

  const request = async () => {
    const res = await fetch(
      `${GET_GRAPH_DATA_API}&start=${selectedDate}&end=${endDate}`
    );
    const json = await res.json();
    setChannelData(json.channel);
    setFeedData(json.feeds);
  };

  useEffect(() => {
    request();
  }, [selectedDate]);

  return (
    <Container>
      <Wrapper>
        <Calendar setSelectedDate={setSelectedDate} setEndDate={setEndDate} />
        <ExportButton selectedDate={selectedDate} endDate={endDate} />
      </Wrapper>
      <Wrapper>
        <Graphs
          channelData={channelData}
          feedData={feedData}
          selectedDate={selectedDate}
          endDate={endDate}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
