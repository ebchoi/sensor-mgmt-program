import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  GET_GRAPH_RECENT_DATA_API,
  GET_GRAPH_SELECTED_DATE_DATA_API,
} from '../config';

function LineGraph() {
  const [recentFeeds, setRecentFeeds] = useState([]);
  const [requestedFeeds, setRequestedFeeds] = useState([]);

  const getRecentData = async () => {
    let url = `${GET_GRAPH_RECENT_DATA_API}`;
    let response = await fetch(url);
    let data = await response.json();
    setRecentFeeds(data.feeds);
  };

  useEffect(() => {
    getRecentData();
  }, []);

  const getSelectedDateData = async (startDate, endDate) => {
    let url = `${GET_GRAPH_SELECTED_DATE_DATA_API}&start=${startDate}%2000:00:00&end=${endDate}%2000:00:00`;
    let response = await fetch(url);
    let data = await response.json();
    setRequestedFeeds(data.feeds);
  };

  return (
    <Wrapper>
      <button
        onClick={() => {
          getSelectedDateData('2022-07-01', '2022-07-02');
        }}
      >
        get data for 2022-07-01
      </button>
      <FlexRow>
        <Feeds>
          <h1>최근 100개 데이터피드</h1>
          {recentFeeds.map(feed => {
            return (
              <div key={feed.entry_id}>
                <Field>{feed.field1}</Field>
                <Field>{feed.field2}</Field>
                <Field>{feed.field3}</Field>
              </div>
            );
          })}
        </Feeds>
        <Feeds>
          <h1>2022-07-01</h1>
          {requestedFeeds &&
            requestedFeeds.map(feed => {
              return (
                <div key={feed.entry_id}>
                  <Field>{feed.field1}</Field>
                  <Field>{feed.field2}</Field>
                  <Field>{feed.field3}</Field>
                </div>
              );
            })}
        </Feeds>
      </FlexRow>
    </Wrapper>
  );
}

export default LineGraph;

const Wrapper = styled.div``;
const FlexRow = styled.div`
  display: flex;
`;

const Feeds = styled.div`
  border: 1px solid blue;
  padding: 10px;
  margin: 25px;
`;

const Field = styled.span`
  padding: 5px;
  margin: 0 5px;
`;
