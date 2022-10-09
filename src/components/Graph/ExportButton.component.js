import { GET_GRAPH_CSV_EXPORT_API } from '../../config';
import styled from 'styled-components';

export const ExportButton = ({ selectedDate, endDate }) => {
  let url = `${GET_GRAPH_CSV_EXPORT_API}&start=${selectedDate}&end=${endDate}`;

  return (
    <Wrapper>
      <Button href={url}>EXPORT </Button>
    </Wrapper>
  );
};

export default ExportButton;

const Wrapper = styled.div``;

const Button = styled.a`
  width: fit-content;
  height: 50px;
  padding: 5px 20px;
  color: #ffffff;
  background-color: gray;
  border: 2px solid gray;
  text-align: center;
  border-radius: 50px;
`;
