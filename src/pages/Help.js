import React, { useState } from "react";
import styled from "styled-components";
import { getRegions } from "../usecases/regions";
import useRequest from "../hooks/useRequest";
import { getRegionSVG } from "../utils/getRegionSVG";
import getRegionId from "../utils/getRegionId";
import { useMediaQuery } from "react-responsive";
import Map from "../components/Map";
import { DesktopRegionResources } from "./RegionResources";
import Modal from "react-modal";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";

export const Help = ({ history }) => {
  const [region, setRegion] = useState("default");
  const [regions, Loading, error] = useRequest(getRegions);
  const [isOpen, setIsOpen] = useState(true);

  if (error) return <div>WHOOPS SOMETHING BBAD HAPENED</div>;
  return (
    <ContentWrapper>
      {!localStorage.getItem("agreement") && (
        <Modal
          isOpen={isOpen}
          style={{
            overlay: { zIndex: 1000 },
          }}
        >
          <Disclaimer setIsOpen={setIsOpen} />
        </Modal>
      )}
      <RegionBox
        loading={Loading}
        history={history}
        regions={regions}
        region={region}
        setRegion={setRegion}
      />
    </ContentWrapper>
  );
};

const Disclaimer = ({ setIsOpen }) => {
  const [firstCondition, setFirstCondition] = useState(false);
  const [secondCondition, setSecondCondition] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <DisclaimerContainer isMobile={isMobile}>
      <DisclaimerHeader>Agreements</DisclaimerHeader>
      <DisclaimerText>
        I agree that I will reach out to my community’s network to provide or
        receive aid, but will not share the personal info of anyone requesting
        help beyond each document.
      </DisclaimerText>
      <div style={{ display: "flex", marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DisclaimerText style={{ marginTop: 0 }}>I agree</DisclaimerText>
          <DisclaimerCheckBox handleClick={() => setFirstCondition(true)} />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 12 }}>
          <DisclaimerText style={{ marginTop: 0 }}>
            I do not agree
          </DisclaimerText>
          <DisclaimerCheckBox handleClick={() => setFirstCondition(false)} />
        </div>
      </div>
      <DisclaimerText>
        I agree that I will not accept or provide contact-based resources if I
        am unsure of my health or level of exposure to COVID-19.
      </DisclaimerText>
      <div style={{ display: "flex", marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DisclaimerText style={{ marginTop: 0 }}>I agree</DisclaimerText>
          <DisclaimerCheckBox handleClick={() => setSecondCondition(true)} />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 12 }}>
          <DisclaimerText style={{ marginTop: 0 }}>
            I do not agree
          </DisclaimerText>
          <DisclaimerCheckBox handleClick={() => setSecondCondition(false)} />
        </div>
      </div>
      <SubmitButton
        onClick={() => {
          if (firstCondition && secondCondition) {
            setIsOpen(false);
            localStorage.setItem("agreement", JSON.stringify(true));
          }
        }}
      >
        Submit
      </SubmitButton>
    </DisclaimerContainer>
  );
};

const DisclaimerCheckBox = ({ handleClick }) => {
  const [active, setActive] = useState(false);
  return (
    <Checkbox
      onClick={() => {
        setActive(!active);
        handleClick();
      }}
      style={active ? { background: "#CFF4C9" } : {}}
    />
  );
};

const RegionBox = ({ loading, region, setRegion, regions, history }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallLaptop = useMediaQuery({ maxWidth: 1183 });

  if (loading) {
    if (isMobile) return <HelpMobileLoadingState />;
    return (
      <HelpLoadingState isMobile={isMobile} isSmallLaptop={isSmallLaptop} />
    );
  }

  if (region !== "default" && !isMobile)
    return (
      <RegionBoxWrapper>
        <RegionBoxContentWrapper
          isSmallLaptop={isSmallLaptop}
          isMobile={isMobile}
          style={{ padding: 84, paddingTop: 120 }}
        >
          <DesktopRegionResources
            regionId={getRegionId(region)}
            setRegion={setRegion}
          />
        </RegionBoxContentWrapper>
      </RegionBoxWrapper>
    );

  return (
    <RegionBoxWrapper>
      <RegionBoxContentWrapper
        isSmallLaptop={isSmallLaptop}
        isMobile={isMobile}
      >
        {!isMobile && (
          <Twitter
            style={{ position: "absolute", top: "32px", right: "-24px" }}
          />
        )}
        <div>
          <Header isMobile={isMobile}>
            Mutual Aid Resources Across the USA
          </Header>
          <SubHeader>Aggregated From Across the Internet</SubHeader>
        </div>

        <RegionBoxContent isSmallLaptop={isSmallLaptop}>
          {isMobile && (
            <RegionCardsContainer style={{ marginTop: 16 }}>
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
      </RegionBoxContentWrapper>
    </RegionBoxWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  position: relative;
`;

const RegionBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`;
const RegionBoxContentWrapper = styled.div`
  position: relative;
  background-color: #f8fff6;
  width: 100%;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  box-sizing: border-box;
  padding: 32px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  font-family: SF Pro;
  font-weight: bold;
  font-size: ${({ isMobile }) => (isMobile ? "24px" : "32px")};
`;
const SubHeader = styled.h3`
  margin-top: 16px;
  font-family: SF Pro;
  font-weight: normal;
  font-size: ${({ isMobile }) => (isMobile ? "20px" : "16px")};
`;
const RegionBoxContent = styled.div`
  width: ${({ isSmallLaptop }) => (isSmallLaptop ? "100%" : "auto")};
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

const DisclaimerContainer = styled.div`
  background: #f8fff6;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  padding: ${({ isMobile }) => (isMobile ? "16px" : "32px")};
  max-width: 700px;
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
`;
const DisclaimerHeader = styled.div`
  font-family: Bau-Medium;
  font-size: 18px;
  text-transform: uppercase;
  color: #231f20;
`;

const DisclaimerText = styled.div`
  font-family: TiemposText-Regular;
  color: #231f20;
  margin-top: 16px;
  line-height: 24px;
`;

const SubmitButton = styled.div`
  margin-top: 32px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5a698;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-family: Bau-Medium;
  font-size: 12px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 8px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default Help;

/* LOADING STATES */

const HelpMobileLoadingState = () => (
  <RegionBoxWrapper>
    <RegionBoxContentWrapper style={{ height: 1000 }}>
      <RegionBoxContent>
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

const HelpLoadingState = ({ isSmallLaptop, isMobile }) => (
  <RegionBoxWrapper>
    <RegionBoxContentWrapper isSmallLaptop={isSmallLaptop} isMobile={isMobile}>
      <div>
        <Header isMobile={isMobile}>Mutual Aid Resources Across the USA</Header>
        <SubHeader>Aggregated From Across the Internet</SubHeader>
      </div>
      <Twitter style={{ position: "absolute", top: "32px", right: "-24px" }} />
      <RegionBoxContent isSmallLaptop={isSmallLaptop}>
        <MapContainer isSmallLaptop={isSmallLaptop}>
          <Map isSmallLaptop={isSmallLaptop} />
        </MapContainer>
      </RegionBoxContent>
    </RegionBoxContentWrapper>
  </RegionBoxWrapper>
);
