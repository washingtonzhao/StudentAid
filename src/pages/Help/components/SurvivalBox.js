import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Outdoors } from '../../../assets/svg/outdoors.svg';
import { ReactComponent as Close } from '../../../assets/svg/close.svg';
import { ReactComponent as Smile } from '../../../assets/svg/smile.svg';

const defaultSurvivalBox = {
  header: 'WELCOME TO THE COVID-19 STUDENT SURVIVAL GUIDE',
  body:
    'This website is maintained by students for students whose lives, studies, and jobs have been affected by the 2020 COVID-19 outbreak. All students are welcome to use the regional or even university-specific resources on this website, even if they don’t attend the school associated with a specific resource.'
};

const SurvivalBox = ({ region, survivalBoxIsOpen, setSurvivalBoxIsOpen }) => {
  return (
    <SurvivalBoxWrapper className={!survivalBoxIsOpen ? 'hidden' : ''}>
      <Outdoors
        style={{ position: 'absolute', top: -99 / 2, right: -99 / 2 }}
      />
      <Smile
        style={{ position: 'absolute', bottom: -54 / 2, right: -54 / 2 }}
      />
      <CloseButton onClick={() => setSurvivalBoxIsOpen(false)} />
      <SurvivalBoxHeader>
        {!region && defaultSurvivalBox.header}
      </SurvivalBoxHeader>
      <SurvivalBoxContent>
        {!region && defaultSurvivalBox.body}
      </SurvivalBoxContent>
    </SurvivalBoxWrapper>
  );
};

export default SurvivalBox;

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
const SurvivalBoxContent = styled.div`
  position: relative;
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
  font-family: TiemposText-Regular;
`;
