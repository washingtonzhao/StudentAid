import React, { useState } from "react";
import styled from "styled-components";
import { createContributorRequest } from "../usecases/contributor";
import { useMediaQuery } from "react-responsive";

export const Contribute = () => {
  const [resourceForm, setResourceForm] = useState({
    type: "resource",
    link: "",
    note: "",
  });
  const [reportForm, setReportForm] = useState({
    type: "report",
    nameOfResource: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ContentWrapper>
      <Header>Help us keep this database comprehensive and up-to-date!</Header>
      {!submitted && (
        <>
          <FormContainer style={{ marginTop: 32 }}>
            <FormHeader>SUGGEST A RESOURCE</FormHeader>
            <FormInput
              placeholder="Link"
              type="text"
              isMobile={isMobile}
              value={resourceForm.link}
              onChange={({ currentTarget }) =>
                setResourceForm((p) => ({ ...p, link: currentTarget.value }))
              }
            />
            <FormTextarea
              placeholder="Note (optional)"
              type="text"
              isMobile={isMobile}
              value={resourceForm.note}
              onChange={({ currentTarget }) =>
                setResourceForm((p) => ({ ...p, note: currentTarget.value }))
              }
            />
            <SubmitButton
              onClick={() => {
                if (!resourceForm.link) return;
                setSubmitted(true);
                createContributorRequest(resourceForm).catch((e) =>
                  console.log(e)
                );
              }}
              disabled={!resourceForm.link}
            >
              SUBMIT
            </SubmitButton>
          </FormContainer>
          <FormContainer>
            <FormHeader>REPORT A RESOURCE</FormHeader>
            <FormInput
              placeholder="Name of resource"
              type="text"
              isMobile={isMobile}
              value={reportForm.nameOfResource}
              onChange={({ currentTarget }) =>
                setReportForm((p) => ({
                  ...p,
                  nameOfResource: currentTarget.value,
                }))
              }
            />
            <FormTextarea
              placeholder="Note (optional)"
              type="text"
              isMobile={isMobile}
              value={reportForm.note}
              onChange={({ currentTarget }) =>
                setReportForm((p) => ({ ...p, note: currentTarget.value }))
              }
            />
            <SubmitButton
              onClick={() => {
                if (!reportForm.nameOfResource) return;
                setSubmitted(true);
                createContributorRequest(reportForm).catch((e) =>
                  console.log(e)
                );
              }}
              disabled={!reportForm.nameOfResource}
            >
              SUBMIT
            </SubmitButton>
          </FormContainer>
        </>
      )}
      {submitted && (
        <div style={{ fontFamily: "TiemposText", marginTop: 32, fontSize: 20 }}>
          🙏 Thank you for contributing! Our team will review your submission
          and promptly update the database. Stay safe out there.
        </div>
      )}
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
const Header = styled.div`
  margin-top: 32px;
  font-family: TiemposHeadline-Semibold;
  font-size: 32px;
`;

const FormContainer = styled.div`
  background: #f8fff6;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-top: 16px;
`;

const FormHeader = styled.div`
  font-family: Bau-Medium;
  font-size: 18px;
  color: #231f20;
`;

const FormInput = styled.input`
  background: #f4f8f3;
  border: 1px solid #000000;
  margin-top: 16px;
  height: 40px;
  width: ${({ isMobile }) => (isMobile ? "100%" : "60%")};
  font-family: TiemposText;
  padding-left: 16px;
  font-size: 16px;
  box-sizing: border-box;
`;
const FormTextarea = styled.textarea`
  background: #f4f8f3;
  border: 1px solid #000000;
  margin-top: 16px;
  height: ${({ isMobile }) => (isMobile ? "120px" : "80px")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "60%")};
  font-family: TiemposText;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
`;

const SubmitButton = styled.div`
  background: #e27047;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  font-family: Bau-Medium;
  padding: 8px;
  margin-top: 24px;
  width: 100px;
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  &:hover {
    opacity: 0.8;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Contribute;
