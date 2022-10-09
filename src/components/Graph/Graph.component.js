import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { device } from '../../styles/Theme';

export const Graph = ({ field, channelData, feedData }) => {
  const [graphData, setGraphData] = useState();
  const [options, setOptions] = useState();
  const chartRef = useRef();

  useEffect(() => {
    if (feedData) {
      setGraphData({
        labels: feedData.map(feed => {
          return feed.created_at;
        }),
        datasets: [
          {
            label: channelData[`field${field}`],
            data: feedData.map(feed => feed[`field${field}`]),
            fill: false,
          },
        ],
      });
    }

    if (channelData) {
      setOptions({
        responsive: true,
        aspectRatio: 1,
        maintainAspectRatio: true,
        interactions: { axis: 'x' },
        plugins: {
          title: {
            display: true,
            text: channelData[`field${field}`],
            padding: {
              top: 30,
              bottom: 20,
            },
          },
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
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time',
            },
          },
          y: {
            title: {
              display: true,
              text: channelData[`field${field}`],
            },
          },
        },
      });
    }
  }, [channelData, feedData, field]);

  if (graphData) {
    return (
      <Wrapper>
        <Line
          key={channelData.id}
          ref={chartRef}
          data={graphData}
          options={options}
        />
        <ButtonWrapper>
          <StyledButton onClick={() => chartRef.current.zoom(1.1)}>
            +{' '}
          </StyledButton>
          <StyledButton onClick={() => chartRef.current.zoom(0.9)}>
            -
          </StyledButton>
          <StyledButton onClick={() => chartRef.current.resetZoom()}>
            초기화
          </StyledButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 95vw;
  height: fit-content;

  ${device.tablet} {
    width: 50%;
  }

  ${device.desktop} {
    width: 33%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 15%;
  min-width: 60px;
  margin: 50px 10px 5px 10px;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #216ba5;
  border: 1px solid #216ba5;
  color: #ffffff;
`;
