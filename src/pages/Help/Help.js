import React, { useState } from 'react';
import styled from 'styled-components';
import RegionBox from './components/RegionBox';
import SurvivalBox from './components/SurvivalBox';
import AgreementModal from './components/AgreementModal';

const defaultSurvivalBox = {
  header: 'WELCOME TO THE COVID-19 STUDENT SURVIVAL GUIDE',
  body:
    'This website is maintained by students for students whose lives, studies, and jobs have been affected by the 2020 COVID-19 outbreak. All students are welcome to use the regional or even university-specific resources on this website, even if they don’t attend the school associated with a specific resource.'
};

const Help = () => {
  const [region, setRegion] = useState('');
  const [survivalBoxIsOpen, setSurvivalBoxIsOpen] = useState(true);

  return (
    <ContentWrapper>
      <AgreementModal />
      <SurvivalBox
        region={region}
        survivalBoxIsOpen={survivalBoxIsOpen}
        setSurvivalBoxIsOpen={setSurvivalBoxIsOpen}
      />
      <RegionBox
        region={region}
        setRegion={setRegion}
        survivalBoxIsOpen={survivalBoxIsOpen}
      />
    </ContentWrapper>
  );
};

export default Help;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;
