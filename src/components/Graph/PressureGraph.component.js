import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

export const PressureGraph = ({ channelData, feedData, options }) => {
  const [graphData, setGraphData] = useState();
  const chartRef = useRef();

  useEffect(() => {
    if (feedData)
      setGraphData({
        labels: feedData.map(feed => {
          return feed.created_at;
        }),
        datasets: [
          {
            label: channelData.field3,
            data: feedData.map(feed => feed.field3),
          },
        ],
      });
  }, [channelData, feedData]);

  if (graphData) {
    return (
      <Fragment>
        <Line ref={chartRef} data={graphData} options={options} />
        <button onClick={() => chartRef.current.zoom(1.1)}>확대지롱</button>
        <button onClick={() => chartRef.current.zoom(0.9)}>축소지롱</button>
        <button onClick={() => chartRef.current.resetZoom()}>초기화지롱</button>
      </Fragment>
    );
  }
};
