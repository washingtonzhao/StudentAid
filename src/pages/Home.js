import React from "react";
import styled from "styled-components";

export const Home = () => (
  <ContentWrapper>
    <Message>
      hey, coronavirus stinks. but we got you. we’re currently working with
      schools across the nation to compile{" "}
      <span style={{ color: "#B2C0F3" }}>student resources for relocation</span>
      ,{" "}
      <span style={{ color: "#E27047" }}>
        up-to-date information about COVID-19
      </span>
      , and{" "}
      <span style={{ color: "#CFF4C9" }}>
        strategies for thriving at home.{" "}
      </span>
      we hope it helps.
      <div style={{ marginTop: 32, color: "#231F20", textAlign: "right" }}>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}– with love,
        your fellow students <span role="img">❤️</span>
      </div>
    </Message>
  </ContentWrapper>
);

export default Home;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;
const Message = styled.div`
  margin-top: 16px;
  padding: 16px;
  background: #f8fff6;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-family: Bau-Medium;
  line-height: 32px;
  font-size: 24px;
  color: #189ffa;
`;
