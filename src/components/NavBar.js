import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBarWrapper>
      <NavOption to={"/"} isActive={(_, { pathname }) => pathname === "/"}>
        <Logo>CORONAVIRUS STINKS</Logo>
      </NavOption>

      <div key={"right"}>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>Menu</MenuButton>
        <Drawer anchor={"right"} open={isOpen} onClose={() => setIsOpen(false)}>
          <DrawerContent>
            <NavOption
              to={"/"}
              isActive={(_, { pathname }) => pathname === "/"}
              activeStyle={{ color: "red" }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavOption>
            <NavOption
              to={"/help"}
              isActive={(_, { pathname }) => pathname === "/help"}
              activeStyle={{ color: "red" }}
              onClick={() => setIsOpen(false)}
            >
              Help
            </NavOption>
          </DrawerContent>
        </Drawer>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 16px;
`;

const Logo = styled.div`
  width: auto;
  height: auto;
  padding: 12px;
  background-color: #cff4c9;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  font-family: BauBold;
`;

const MenuButton = styled.div`
  background: #f8fff6;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const DrawerContent = styled.div`
  width: 150px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const NavOption = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #231f20;
  }
`;
