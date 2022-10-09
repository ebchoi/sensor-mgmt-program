import { Fragment } from 'react';
import styled from 'styled-components';
import { Graph } from '../../components/index.components';

export const Graphs = ({ channelData, feedData }) => {
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
      <TemperatureGraph
        field={1}
        channelData={channelData}
        feedData={feedData}
        options={options}
      />
      <HumidityGraph
        field={2}
        channelData={channelData}
        feedData={feedData}
        options={options}
      />
      <PressureGraph
        field={3}
        channelData={channelData}
        s
        feedData={feedData}
        options={options}
      />
    </Fragment>
  );
};

const TemperatureGraph = styled(Graph)``;

const HumidityGraph = styled(Graph)``;

const PressureGraph = styled(Graph)``;
