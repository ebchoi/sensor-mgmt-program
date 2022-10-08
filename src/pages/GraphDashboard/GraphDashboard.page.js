import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Calendar, HumidityGraph, PressureGraph, TemperatureGraph } from '.';

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

  return (
    <Fragment>
      <Calendar setSelectedDate={setSelectedDate} />
      <TemperatureGraph channelData={channelData} feedData={feedData} />
      <HumidityGraph channelData={channelData} feedData={feedData} />
      <PressureGraph channelData={channelData} feedData={feedData} />
    </Fragment>
  );
};
