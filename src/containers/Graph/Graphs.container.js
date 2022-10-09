import styled from 'styled-components';
import { Graph } from '../../components/index.components';

export const Graphs = ({ channelData, feedData }) => {
  return (
    <Container>
      <TemperatureGraph
        field={1}
        channelData={channelData}
        feedData={feedData}
      />
      <HumidityGraph field={2} channelData={channelData} feedData={feedData} />
      <PressureGraph field={3} channelData={channelData} feedData={feedData} />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TemperatureGraph = styled(Graph)``;

const HumidityGraph = styled(Graph)``;

const PressureGraph = styled(Graph)``;
