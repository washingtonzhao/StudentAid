import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../assets/svg/close.svg";
import { ReactComponent as Smile } from "../assets/svg/smile.svg";
import { useMediaQuery } from "react-responsive";

const defaultSurvivalBox = {
  header: "WHAT IS THIS?",
  body:
    "After USC made classes remote for March, a few members of Spark SC spun up an emergency committee to centralize resources for students who have been displaced by the fallout from COVID-19. This hybrid committee included members of other student organizations and even members of other colleges.",
};

export const About = () => {
  const [survivalBoxIsOpen, setSurvivalBoxIsOpen] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ContentWrapper isMobile={isMobile}>
      {isMobile && (
        <SurvivalBox
          survivalBoxIsOpen={survivalBoxIsOpen}
          setSurvivalBoxIsOpen={setSurvivalBoxIsOpen}
        />
      )}
      {!isMobile && <DesktopHeader>About Coronavirus Stinks</DesktopHeader>}
      <SectionsWrapper isMobile={isMobile}>
        {!isMobile && (
          <>
            <SectionHeader isFirst={!isMobile}>What is this?</SectionHeader>
            <SectionBody>
              After USC made classes remote for March, a few members of Spark SC
              spun up an emergency committee to centralize resources for
              students who have been displaced by the fallout from COVID-19.
              This hybrid committee included members of other student
              organizations and even members of other colleges.
            </SectionBody>
          </>
        )}
        <SectionHeader isFirst={isMobile}>Credits</SectionHeader>
        <SectionBody>
          Neither Spark SC nor USC take credit for the incredible work done by
          the university students who made original Mutual Aid spreadsheets and
          shared them as templates with other schools (Wesleyan, University of
          Michigan, and Tufts, to name a few).
        </SectionBody>
        <SectionHeader>Creative Contributors</SectionHeader>
        <ContributorsBox>
          <ContributorText>
            <ContributorName>Gitika Pahwa</ContributorName> – Project Lead
          </ContributorText>
          <ContributorText>
            <ContributorName>Washington Zhao</ContributorName> – Lead Developer
          </ContributorText>
          <ContributorText>
            <ContributorName>Abigail Africa</ContributorName> – Web Design Lead
          </ContributorText>
          <ContributorText>
            <ContributorName>Jerry Wang</ContributorName> – Web Developer
          </ContributorText>
          <ContributorText>
            <ContributorName>Young Kyung Kim</ContributorName> – Content Lead
          </ContributorText>
          <ContributorText>
            <ContributorName>Alyssa Goldberg</ContributorName> – Web Design and
            Content
          </ContributorText>
          <ContributorText>
            <ContributorName>Ada Toydemir</ContributorName> – Web Developer
          </ContributorText>
          <ContributorText>
            <ContributorName>Joel Yoon</ContributorName> – Motion Graphics
          </ContributorText>
          <ContributorText>
            <ContributorName>Andrew Hulin</ContributorName> – Social Strategy
          </ContributorText>
        </ContributorsBox>
        <SectionHeader>Tech Stack</SectionHeader>
        <SectionBody>
          Coronavirus Stinks is a website developed in a JavaScript library
          called React. Our server is built with Node. We use a NoSQL database
          called MongoDB.
          <br />
          <br />
          Our team uses Slack and Notion — shoutout to the Notion Community Team
          for their help and support!
        </SectionBody>
        <SectionHeader>Design System</SectionHeader>
        <SectionBody>
          Fonts in use are Tiempos Headline, Tiempos Text, and Bau.
        </SectionBody>
      </SectionsWrapper>
    </ContentWrapper>
  );
};

const SurvivalBox = ({ survivalBoxIsOpen, setSurvivalBoxIsOpen }) => {
  return (
    <SurvivalBoxWrapper className={!survivalBoxIsOpen ? "hidden" : ""}>
      <Smile style={{ position: "absolute", top: 54 / 2, right: -54 / 2 }} />
      <CloseButton onClick={() => setSurvivalBoxIsOpen(false)} />
      <SurvivalBoxHeader>{defaultSurvivalBox.header}</SurvivalBoxHeader>
      <SectionBody>{defaultSurvivalBox.body}</SectionBody>
    </SurvivalBoxWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-left: ${({ isMobile }) => (isMobile ? "16px" : "0px")};
  padding-bottom: 32px;
  position: relative;
`;
const DesktopHeader = styled.div`
  margin-top: 32px;
  font-family: TiemposHeadline-Semibold;
  font-size: 32px;
`;
const SurvivalBoxWrapper = styled.div`
  position: relative;
  margin-top: 32px;
  background-color: #e5a698;
  max-width: 70%;
  z-index: 2;
  padding: 24px;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
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
const SectionsWrapper = styled.div`
  padding: ${({ isMobile }) => (isMobile ? "16px" : "0px")};
  padding-left: 16px;
  width: ${({ isMobile }) => (isMobile ? "auto" : "70%")};
  border-left: 2px solid #000000;
  border-style: dotted;
  margin-top: 32px;
`;
const SectionBody = styled.div`
  position: relative;
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
  font-family: TiemposText-Regular;
`;
const SectionHeader = styled.div`
  margin-top: ${({ isFirst }) => (isFirst ? "0px" : "32px")};
  font-family: Bau-Medium;
  font-size: 14px;
  text-transform: uppercase;
  color: #231f20;
`;
const ContributorsBox = styled.div`
  margin-top: 16px;
  background: #f8fff6;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  padding: 16px;
`;
const ContributorText = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-family: TiemposText-Regular;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const ContributorName = styled.div`
  font-family: TiemposText-Bold;
  display: inline-block;
`;

export default About;
