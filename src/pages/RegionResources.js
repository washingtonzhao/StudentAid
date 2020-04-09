import React from "react";
import styled from "styled-components";
import useRequest from "../hooks/useRequest";
import { getRegionResources } from "../usecases/regions";
import { ReactComponent as Close } from "../assets/svg/close.svg";
import _ from "lodash";

const formatResource = (resource) =>
  resource[resource.length - 1] === ":"
    ? resource.slice(0, resource.length - 1)
    : resource;

export const RegionResources = ({ region, regionId, history }) => {
  const [resources, Loading, error] = useRequest(() =>
    getRegionResources(regionId)
  );

  if (Loading) return <Loading />;
  if (error) return <div></div>;

  const formattedData = _.toPairs(resources);

  return (
    <RegionResourcesContainer>
      <CloseButton onClick={() => history.goBack()} />
      <SelectedHeader>
        YOU SELECTED
        <SelectedRegionBox>{region}</SelectedRegionBox>
      </SelectedHeader>
      <SelectedSubHeader>
        To add a resource to our database, fill out our contributors form.
      </SelectedSubHeader>
      {formattedData.map(([subRegion, resources], i) => (
        <>
          <RegionBoxHeader>{_.startCase(_.toLower(subRegion))}</RegionBoxHeader>
          <RegionSection>
            {resources.map(({ name, url }) => (
              <div style={{ marginTop: 16 }}>
                <ResourceLink href={url} target="_blank">
                  {formatResource(name)}
                </ResourceLink>
              </div>
            ))}
          </RegionSection>
        </>
      ))}
      {/* <RegionCardsContainer>
          {formattedData.map(([subRegion], i) => (
            <RegionCardWrapper
              key={i}
              onClick={() => setSelectedResource(subRegion)}
            >
              <RegionText>{subRegion}</RegionText>
            </RegionCardWrapper>
          ))}
          {formattedData.length % 2 !== 0 && (
            <RegionCardWrapper style={{ border: 0, boxShadow: "none" }} />
          )}
        </RegionCardsContainer> */}
    </RegionResourcesContainer>
  );
};

export default RegionResources;

export const DesktopRegionResources = ({ regionId }) => {
  const [resources, Loading, error] = useRequest(() =>
    getRegionResources(regionId)
  );

  if (Loading) return <div style={{ height: 3000 }} />;
  if (error) return <div></div>;

  const formattedData = _.toPairs(resources);

  return (
    <RegionSection>
      <Header>You're not alone.</Header>
      {formattedData.map(([subRegion, resources], i) => (
        <ResourceCard>
          <ResourceCardHeader>
            {_.startCase(_.toLower(subRegion))}
          </ResourceCardHeader>
          {resources.map(({ name, url }) => (
            <div style={{ marginTop: 16 }}>
              <ResourceLink href={url} target="_blank">
                {formatResource(name)}
              </ResourceLink>
            </div>
          ))}
        </ResourceCard>
      ))}
    </RegionSection>
  );
};

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
  postion: relative;
`;

const CloseButton = styled(Close)`
  margin-left: -4px;
`;

const SelectedHeader = styled.div`
  font-size: 16px;
  font-family: Bau-Bold;
  display: flex;
  align-items: center;
  padding-top: 24px;
`;

const SelectedSubHeader = styled.div`
  font-family: TiemposText;
  font-size: 16px;
  line-height: 20px;
  margin-top: 16px;
`;

const SelectedRegionBox = styled.div`
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  font-family: Bau-Medium;
  text-transform: uppercase;
  background-color: #f7d193;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

const RegionSection = styled.div`
  border-left: 2px solid #000000;
  border-style: dotted;
  padding-left: 12px;
`;
const RegionBoxHeader = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  font-family: Bau-Medium;
  margin-top: 32px;
  text-transform: uppercase;
`;
const ResourceLink = styled.a`
  font-family: TiemposText;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #231f20;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Header = styled.div`
  font-family: Bau-Medium;
  font-size: 14px;
  text-transform: uppercase;
`;

const ResourceCard = styled.div`
  background: #f8fff6;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
const ResourceCardHeader = styled.div`
  font-family: TiemposHeadline-Medium;
  font=size: 24px;
`;

/*
const RegionCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 16px;
`;

const RegionCardWrapper = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 4px;
  min-width: 132px;
  min-height: 168px;
  max-width: 132px;
  max-height: 168px;
  flex-basis: 100%;
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 4px;
  margin-top: 16px;
`;

const RegionBoxContent = styled.div`
  border-left: 2px solid #000000;
  border-style: dotted;
  padding-left: 12px;
  margin-top: 32px;
`;

const RegionText = styled.div`
  font-family: TiemposHeadline-Medium;
  text-align: center;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: center;
`;

const RegionBoxSubHeader = styled.div`
  margin-top: 8px;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  font-family: TiemposText-Italic;
`;

*/
