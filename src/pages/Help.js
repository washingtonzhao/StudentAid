import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Outdoors } from "../assets/svg/outdoors.svg";
import { ReactComponent as Close } from "../assets/svg/close.svg";
import { ReactComponent as Smile } from "../assets/svg/smile.svg";
import { ReactComponent as Fine } from "../assets/svg/fine.svg";
import { ReactComponent as FineDesktop } from "../assets/svg/fine_desktop.svg";
import { getRegions } from "../usecases/regions";
import useRequest from "../hooks/useRequest";
import { getRegionSVG } from "../utils/getRegionSVG";
import getRegionId from "../utils/getRegionId";
import { useMediaQuery } from "react-responsive";
import Map from "../components/Map";
import { DesktopRegionResources } from "./RegionResources";

export const Help = ({ history }) => {
  const [region, setRegion] = useState("default");
  const [survivalBoxIsOpen, setSurvivalBoxIsOpen] = useState(true);
  const [regions, Loading, error] = useRequest(getRegions);

  if (error) return <div>WHOOPS SOMETHING BBAD HAPENED</div>;

  return (
    <ContentWrapper>
      <SurvivalBox
        region={region}
        setRegion={setRegion}
        survivalBoxIsOpen={survivalBoxIsOpen}
        setSurvivalBoxIsOpen={setSurvivalBoxIsOpen}
      />
      <RegionBox
        loading={Loading}
        history={history}
        survivalBoxIsOpen={survivalBoxIsOpen}
        regions={regions}
        region={region}
        setRegion={setRegion}
      />
    </ContentWrapper>
  );
};

const SurvivalBox = ({
  region,
  survivalBoxIsOpen,
  setSurvivalBoxIsOpen,
  setRegion,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallLaptop = useMediaQuery({ maxWidth: 1183 });

  return (
    <SurvivalBoxWrapper
      isSmallLaptop={isSmallLaptop}
      className={!survivalBoxIsOpen ? "hidden" : ""}
      isMobile={isMobile}
      style={{ background: region === "default" ? "#e5a698" : "#F8FFF6" }}
    >
      {isMobile && (
        <Outdoors
          style={{ position: "absolute", top: -99 / 2, right: -99 / 2 }}
        />
      )}
      <SpinningSmile
        style={{ position: "absolute", bottom: -54 / 2, right: -54 / 2 }}
      />
      <CloseButton onClick={() => setSurvivalBoxIsOpen(false)} />
      {region === "default" && (
        <>
          <SurvivalBoxHeader>
            WELCOME TO THE COVID-19 STUDENT SURVIVAL GUIDE
          </SurvivalBoxHeader>
          <SurvivalBoxContent>
            This website is maintained by students for students whose lives,
            studies, and jobs have been affected by the 2020 COVID-19 outbreak.
            All students are welcome to use the regional or even
            university-specific resources on this website, even if they don’t
            attend the school associated with a specific resource.
          </SurvivalBoxContent>
        </>
      )}
      {region !== "default" && (
        <>
          <SurvivalBoxHeader
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            YOU SELECTED <SelectedRegionBox>{region}</SelectedRegionBox>
          </SurvivalBoxHeader>
          <SurvivalBoxContent>
            This website is maintained by students for students whose lives,
            studies, and jobs have been affected by the 2020 COVID-19 outbreak.
            All students are welcome to use the regional or even
            university-specific resources on this website, even if they don’t
            attend the school associated with a specific resource.
          </SurvivalBoxContent>
        </>
      )}
    </SurvivalBoxWrapper>
  );
};

const RegionBox = ({
  loading,
  region,
  setRegion,
  survivalBoxIsOpen,
  regions,
  history,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallLaptop = useMediaQuery({ maxWidth: 1183 });

  if (loading) {
    if (isMobile) return <HelpMobileLoadingState />;
    return <HelpLoadingState />;
  }

  if (region !== "default" && !isMobile)
    return (
      <RegionBoxWrapper>
        <RegionBoxContentWrapper
          isSmallLaptop={isSmallLaptop}
          isMobile={isMobile}
          style={{ padding: 84, paddingTop: 120 }}
        >
          <Outdoors
            style={{
              position: "absolute",
              zIndex: 3,
              top: -48,
              left: -32,
            }}
          />
          <FineDesktop
            style={{ position: "absolute", bottom: 54, right: -56, width: 154 }}
          />

          <DesktopRegionResources
            regionId={getRegionId(region)}
            setRegion={setRegion}
          />
        </RegionBoxContentWrapper>
      </RegionBoxWrapper>
    );

  return (
    <RegionBoxWrapper survivalBoxIsOpen={survivalBoxIsOpen}>
      {!isMobile && (
        <Outdoors
          style={{
            position: "absolute",
            zIndex: 3,
            top: -48,
            left: -32,
          }}
        />
      )}
      <RegionBoxContentWrapper
        isSmallLaptop={isSmallLaptop}
        survivalBoxIsOpen={survivalBoxIsOpen}
        isMobile={isMobile}
      >
        {isMobile && (
          <Fine style={{ position: "absolute", bottom: -83 / 2, left: 0 }} />
        )}
        {!isMobile && (
          <FineDesktop
            style={{ position: "absolute", bottom: 54, right: -56, width: 154 }}
          />
        )}
        <div
          style={isMobile ? {} : { display: "flex", justifyContent: "center" }}
        >
          <RegionBoxContent isSmallLaptop={isSmallLaptop}>
            <RegionBoxHeader>
              CLICK ON A REGION TO SEE LOCAL RESOURCES
            </RegionBoxHeader>
            <RegionBoxSubHeader>
              More resources are coming soon.
            </RegionBoxSubHeader>
            {isMobile && (
              <RegionCardsContainer>
                {regions.map(({ region, _id }, i) => (
                  <RegionCardWrapper
                    key={i}
                    onClick={() =>
                      history.push({
                        pathname: "/resources",
                        state: { regionId: _id, region: region },
                      })
                    }
                    style={!region ? { border: 0, boxShadow: "none" } : {}}
                  >
                    {getRegionSVG(region)}
                    <RegionText>{region}</RegionText>
                  </RegionCardWrapper>
                ))}
              </RegionCardsContainer>
            )}
            {!isMobile && (
              <MapContainer isSmallLaptop={isSmallLaptop}>
                <Map setRegion={setRegion} isSmallLaptop={isSmallLaptop} />
              </MapContainer>
            )}
          </RegionBoxContent>
        </div>
      </RegionBoxContentWrapper>
    </RegionBoxWrapper>
  );
};

const SpinningSmile = styled(Smile)`
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  position: relative;
`;
const SurvivalBoxWrapper = styled.div`
  position: relative;
  margin-top: ${({ isMobile }) => (isMobile ? "48px" : "0px")};
  background-color: #e5a698;
  max-width: ${({ isMobile, isSmallLaptop }) =>
    isMobile ? "70%" : isSmallLaptop ? "50%" : "580px"};
  z-index: 2;
  padding: ${({ isMobile }) => (isMobile ? "24px" : "32px")};
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  top: ${({ isMobile }) => (isMobile ? "0px" : "-32px")};
  left: ${({ isMobile }) => (isMobile ? "0px" : "284px")};
`;
const CloseButton = styled(Close)`
  position: absolute;
  top: 12px;
  left: 12px;
`;
const SurvivalBoxHeader = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  max-width: 80%;
  margin-top: 16px;
  font-family: Bau-Bold;
`;
const SurvivalBoxContent = styled.div`
  position: relative;
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
  font-family: TiemposText-Regular;
`;
const RegionBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ survivalBoxIsOpen, isMobile }) =>
    isMobile ? (survivalBoxIsOpen ? "-32px" : "0px") : "-84px"};
`;
const RegionBoxContentWrapper = styled.div`
  position: relative;
  background-color: #f8fff6;
  width: ${({ survivalBoxIsOpen, isMobile }) =>
    isMobile ? (survivalBoxIsOpen ? "95%" : "100%") : "100%"};
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  box-sizing: border-box;
  padding: 16px;
  padding-top: ${({ survivalBoxIsOpen, isSmallLaptop, isMobile }) =>
    isSmallLaptop && !isMobile ? "10%" : survivalBoxIsOpen ? "120px" : "16px"};
  padding-bottom: 64px;
`;
const RegionBoxContent = styled.div`
  border-left: 2px solid #000000;
  border-style: dotted;
  padding-left: 12px;
  width: ${({ isSmallLaptop }) => (isSmallLaptop ? "100%" : "auto")};
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

const RegionCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

const RegionText = styled.div`
  font-family: TiemposHeadline-Medium;
  text-align: center;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  margin-top: ${({ isSmallLaptop }) => (isSmallLaptop ? "5%" : "48px")};
  margin-left: ${({ isSmallLaptop }) => (isSmallLaptop ? "5%" : "24px")};
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

export default Help;

/* LOADING STATES */

const HelpMobileLoadingState = () => (
  <RegionBoxWrapper>
    <RegionBoxContentWrapper style={{ height: 1000 }}>
      <Fine style={{ position: "absolute", bottom: -83 / 2, left: 0 }} />
      <RegionBoxContent>
        <RegionBoxHeader>
          CLICK ON A REGION TO SEE LOCAL RESOURCES
        </RegionBoxHeader>
        <RegionBoxSubHeader>More resources are coming soon.</RegionBoxSubHeader>

        <RegionCardsContainer>
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <RegionCardWrapper key={i} />
            ))}
        </RegionCardsContainer>
      </RegionBoxContent>
    </RegionBoxContentWrapper>
  </RegionBoxWrapper>
);

const HelpLoadingState = () => (
  <RegionBoxWrapper>
    <Outdoors
      style={{
        position: "absolute",
        zIndex: 3,
        top: -48,
        left: -32,
      }}
    />

    <RegionBoxContentWrapper style={{ paddingTop: 120 }}>
      <FineDesktop
        style={{ position: "absolute", bottom: 54, right: -56, width: 154 }}
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <RegionBoxContent>
          <RegionBoxHeader>
            CLICK ON A REGION TO SEE LOCAL RESOURCES
          </RegionBoxHeader>
          <RegionBoxSubHeader>
            More resources are coming soon.
          </RegionBoxSubHeader>
          <MapContainer>
            <Map />
          </MapContainer>
        </RegionBoxContent>
      </div>
    </RegionBoxContentWrapper>
  </RegionBoxWrapper>
);
