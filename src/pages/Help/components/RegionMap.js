import React from 'react';
import rd3 from 'react-d3-library';
import Grid from '../../../components/Grid';
import styled from 'styled-components';

const RegionMap = () => {
  return (
    <Grid cols={2} style={{ marginTop: 32 }}>
      {Array(3)
        .fill(null)
        .map(() => (
          <RegionCardWrapper>Stuff</RegionCardWrapper>
        ))}
    </Grid>
    //   https://towardsdatascience.com/react-d3-the-macaroni-and-cheese-of-the-data-visualization-world-12bafde1f922
  );
};

export default RegionMap;

const RegionCardWrapper = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 4px;
  width: 132px;
  height: 168px;
  flex-basis: 100%;
  flex: 1;
`;
