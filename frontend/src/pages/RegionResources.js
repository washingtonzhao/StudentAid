import React from "react";
import styled from "styled-components";
import useRequest from "../hooks/useRequest";
import { getRegionResources } from "../usecases/regions";
import _ from "lodash";

export const RegionResources = ({ region, regionId }) => {
  const [resources, Loading, error] = useRequest(() =>
    getRegionResources(regionId)
  );
  if (Loading) return <Loading />;
  if (error) return <div>WHOOPS SOMETHING BBAD HAPENED</div>;

  const formattedData = _.toPairs(resources[0].associations);
  return (
    <div style={{ paddingLeft: 16, paddingRight: 16 }}>
      <RegionResourcesContainer>
        INFO HERE for regionID: {regionId} and region: {region}
        {formattedData.map(([association]) => (
          <RegionCard>{association}</RegionCard>
        ))}
      </RegionResourcesContainer>
    </div>
  );
};

export default RegionResources;

const RegionResourcesContainer = styled.div`
  margin-top: 32px;
  background-color: #f8fff6;
  width: 100%;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  box-sizing: border-box;
  padding: 16px;
  padding-top: 16px;
  padding-bottom: 32px;
`;

const RegionCard = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 4px;
  width: 132px;
  height: 168px;
  flex-basis: 100%;
  flex: 1;
`;
