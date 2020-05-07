import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ContentWrapper isMobile={isMobile}>
      {!isMobile && <DesktopHeader>About Coronavirus Stinks</DesktopHeader>}
      <SectionsWrapper isMobile={isMobile}>
        <SectionHeader isFirst={isMobile}>Credits</SectionHeader>
        <SectionBody>
          This incredible work is done by the university students who made the
          original Mutual Aid spreadsheets and shared them as templates with
          other schools (Wesleyan, University of Michigan, and Tufts, to name a
          few).
        </SectionBody>

        <SectionHeader>Tech Stack</SectionHeader>
        <SectionBody>
          Coronavirus Stinks is a website developed in a JavaScript library
          called React. Our server is built with Node. We use a NoSQL database
          called MongoDB.
          <br />
          <br />
        </SectionBody>
      </SectionsWrapper>
    </ContentWrapper>
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

export default About;
