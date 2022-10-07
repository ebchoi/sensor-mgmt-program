import { useEffect, useState } from 'react';
import { GET_GRAPH_RECENT_DATA_API } from '../config';
import styled from 'styled-components';

function LineGraph() {
  const [recentFeeds, setRecentFeeds] = useState([]);

  const getRecentData = async () => {
    let url = `${GET_GRAPH_RECENT_DATA_API}`;
    let response = await fetch(url);
    let data = await response.json();
    setRecentFeeds(data.feeds);
  };

  useEffect(() => {
    getRecentData();
  }, []);

  return (
    <Wrapper>
      {recentFeeds.map(feed => {
        return (
          <div key={feed.entry_id}>
            {feed.field1}, {feed.field2},{feed.field3}
          </div>
        );
      })}
    </Wrapper>
  );
}

export default LineGraph;

const Wrapper = styled.div``;
