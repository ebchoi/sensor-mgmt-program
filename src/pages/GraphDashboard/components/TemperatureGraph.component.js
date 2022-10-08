import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';
// Chart.register(CategoryScale);

export const TemperatureGraph = ({
  channelData,
  feedData,
  zoomInOut,
  zoomHandler,
}) => {
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    if (feedData)
      setGraphData({
        labels: feedData.map(feed => {
          return feed.created_at;
        }),
        datasets: [
          {
            label: channelData.field1,
            data: feedData.map(feed => feed.field1),
          },
        ],
      });
  }, [channelData, feedData]);

  if (graphData) {
    return <Line data={graphData} options={zoomInOut} />;
  }
};
