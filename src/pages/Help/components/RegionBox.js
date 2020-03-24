import React from 'react';
import { ReactComponent as Fine } from '../../../assets/svg/fine.svg';
import Grid from '../../../components/Grid';
import styled from 'styled-components';

const RegionCard = () => <RegionCardWrapper>Stuff</RegionCardWrapper>;

const RegionBox = ({ region, survivalBoxIsOpen }) => {
  return (
    <RegionBoxWrapper survivalBoxIsOpen={survivalBoxIsOpen}>
      <RegionBoxContentWrapper survivalBoxIsOpen={survivalBoxIsOpen}>
        <Fine style={{ position: 'absolute', bottom: -83 / 2, left: 0 }} />
        <RegionBoxContent>
          <RegionBoxHeader>
            CLICK ON A REGION TO SEE LOCAL RESOURCES
          </RegionBoxHeader>
          <RegionBoxSubHeader>
            More resources are coming soon.
          </RegionBoxSubHeader>
          <Grid cols={2} style={{ marginTop: 32 }}>
            {Array(3)
              .fill(null)
              .map(() => (
                <RegionCard />
              ))}
          </Grid>
        </RegionBoxContent>
      </RegionBoxContentWrapper>
    </RegionBoxWrapper>
  );
};

export default RegionBox;

const RegionBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ survivalBoxIsOpen }) =>
    survivalBoxIsOpen ? '-32px' : '0px'};
`;
const RegionBoxContentWrapper = styled.div`
  position: relative;
  background-color: #f8fff6;
  width: ${({ survivalBoxIsOpen }) => (survivalBoxIsOpen ? '95%' : '100%')};
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  box-sizing: border-box;
  padding: 16px;
  padding-top: ${({ survivalBoxIsOpen }) =>
    survivalBoxIsOpen ? '64px' : '16px'};
  padding-bottom: 32px;
`;
const RegionBoxContent = styled.div`
  border-left: 2px solid #000000;
  border-style: dotted;
  padding-left: 12px;
`;
const RegionBoxHeader = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  font-family: Bau-Medium;
`;
const RegionBoxSubHeader = styled.div`
  margin-top: 8px;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  font-family: TiemposText-Italic;
`;

const RegionCardWrapper = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 4px;
  width: 132px;
  height: 168px;
  flex-basis: 100%;
  flex: 1;
`;
