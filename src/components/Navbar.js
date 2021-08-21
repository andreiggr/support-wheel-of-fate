import React from "react";
import styled from "styled-components";
import { View } from "./blocks";

const Navbar = () => {
  return (
    <View display="flex">
      <NavLink href="/">Engineers List </NavLink>
      <NavLink href="/shifts">Shifts </NavLink>
    </View>
  );
};

export default Navbar;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 10px;
  border: 2px solid #00519d;
  color: #00519d;
  margin-right: 10px;

  :hover {
    background-color: #00519d;
    color: white;
  }
`;
