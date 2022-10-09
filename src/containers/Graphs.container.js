import React, { Fragment, useState, useEffect } from 'react';
import { GET_GRAPH_DATA_API } from '../../config';
import { Calendar, HumidityGraph, PressureGraph, TemperatureGraph } from '.';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

export const Graphs = () => {
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

  const options = {
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          threshold: 10,
        },
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.1,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
      },
    },
  };

  return (
    <Fragment>
      <Calendar setSelectedDate={setSelectedDate} setEndDate={setEndDate} />
      <TemperatureGraph
        channelData={channelData}
        feedData={feedData}
        options={options}
      />
      <HumidityGraph
        channelData={channelData}
        feedData={feedData}
        options={options}
      />
      <PressureGraph
        channelData={channelData}
        feedData={feedData}
        options={options}
      />
    </Fragment>
  );
};
