import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Calendar, HumidityGraph, PressureGraph, TemperatureGraph } from '.';
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom';
import Chart from 'chart.js/auto';
Chart.register(zoomPlugin);

export const GraphDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().replace('T', ' ').substring(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [channelData, setChannelData] = useState();
  const [feedData, setFeedData] = useState();
  const CHANNEL_ID = '1348864';
  const API_KEY = '6SKW0U97IPV2QQV9';

  const request = async () => {
    const res = await fetch(
      `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${API_KEY}&start=${selectedDate}`
    );
    const json = await res.json();
    setChannelData(json.channel);
    setFeedData(json.feeds);
  };

  useEffect(() => {
    request();
  }, [selectedDate]);

  const zoom = {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
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
      <Calendar setSelectedDate={setSelectedDate} />
      <TemperatureGraph
        channelData={channelData}
        feedData={feedData}
        zoom={zoom}
      />
      <HumidityGraph
        channelData={channelData}
        feedData={feedData}
        zoom={zoom}
      />
      <PressureGraph
        channelData={channelData}
        feedData={feedData}
        zoom={zoom}
      />
    </Fragment>
  );
};
