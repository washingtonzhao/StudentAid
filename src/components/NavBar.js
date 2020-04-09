import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Close } from "../assets/svg/close.svg";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();

  return (
    <NavBarWrapper isMobile={isMobile}>
      {isMobile && (
        <>
          <NavOption to={"/"} isActive={(_, { pathname }) => pathname === "/"}>
            <Logo>CORONAVIRUS STINKS</Logo>
          </NavOption>
          <MenuWrapper>
            <MenuButton
              className={isMenuOpen ? "hidden" : ""}
              onClick={() => setIsMenuOpen(true)}
            >
              MENU
            </MenuButton>
            <MenuContainer className={!isMenuOpen ? "hidden" : ""}>
              <CloseButton onClick={() => setIsMenuOpen(false)} />
              <NavOption
                to={"/"}
                isActive={(_, { pathname }) => pathname === "/"}
                activeStyle={{ borderBottom: "1px dotted black" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavOption>
              <NavOption
                to={"/help"}
                isActive={(_, { pathname }) => pathname === "/help"}
                activeStyle={{ borderBottom: "1px dotted black" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Help
              </NavOption>
              <NavOption
                to={"/contribute"}
                isActive={(_, { pathname }) => pathname === "/contribute"}
                onClick={() => setIsMenuOpen(false)}
                activeStyle={{ borderBottom: "1px dotted black" }}
              >
                Contribute
              </NavOption>
              <NavOption
                to={"/about"}
                isActive={(_, { pathname }) => pathname === "/about"}
                activeStyle={{ borderBottom: "1px dotted black" }}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavOption>
            </MenuContainer>
          </MenuWrapper>
        </>
      )}
      {!isMobile && (
        <>
          <NavOption to={"/"} isActive={(_, { pathname }) => pathname === "/"}>
            <Logo
              style={{
                fontSize: 24,
                padding: 24,
              }}
            >
              CORONAVIRUS STINKS
              <div
                style={{
                  fontFamily: "TiemposText-Italic",
                  fontSize: 14,
                  marginTop: 8,
                }}
              >
                – but it doesn't have to get the best of us.
              </div>
            </Logo>
          </NavOption>
          <NavOptionsContainer>
            <NavOption to={"/"}>
              <NavOptionWrapper active={location.pathname === "/"}>
                Home
              </NavOptionWrapper>
            </NavOption>
            <NavOption to={"/help"}>
              <NavOptionWrapper active={location.pathname === "/help"}>
                Get Help
              </NavOptionWrapper>
            </NavOption>
            <NavOption to={"/contribute"}>
              <NavOptionWrapper active={location.pathname === "/contribute"}>
                Contribute
              </NavOptionWrapper>
            </NavOption>
            <NavOption to={"/about"}>
              <NavOptionWrapper active={location.pathname === "/about"}>
                About
              </NavOptionWrapper>
            </NavOption>
          </NavOptionsContainer>
        </>
      )}
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 4;
  align-items: center;
`;

const Logo = styled.div`
  width: auto;
  height: auto;
  padding: 12px;
  background-color: #cff4c9;
  font-size: 14px;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  font-family: Bau-Bold;
`;
const MenuWrapper = styled.div`
  position: relative;
`;
const MenuButton = styled.div`
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
`;

const MenuContainer = styled.div`
  background: #e5a698;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
`;

const CloseButton = styled(Close)`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 4px;
  margin-top: 4px;
`;

const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${({ isMobile }) => (isMobile ? "0px" : "32px")};
`;

const NavOptionWrapper = styled.div`
  background: ${(props) => (props.active ? "#E27047" : "#f8fff6")};
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  margin-left: 12px;
  font-family: Bau-Medium;
  text-transform: uppercase;
  font-size: 14px;
  color: #231f20;
  &:hover {
    opacity: 0.7;
  }
`;

const NavOption = styled(NavLink)`
  margin-top: 14px;
  text-decoration: none;
  font-family: Bau-Bold;
  font-style: normal;
  font-size: 14px;
  padding-bottom: 4px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #231f20;
  }
`;
