import React, { Fragment, useState, useEffect } from 'react';
import { GET_GRAPH_DATA_API } from '../config';
import { Calendar } from '../components/Graph/Calendar.component';
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
    <Fragment>
      <Calendar setSelectedDate={setSelectedDate} setEndDate={setEndDate} />
      <Graphs
        channelData={channelData}
        feedData={feedData}
        selectedDate={selectedDate}
        endDate={endDate}
      />
    </Fragment>
  );
};
