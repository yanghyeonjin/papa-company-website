import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

import { AppColor } from "../styles/theme";

const Root = styled.header`
  height: 56px;

  background-color: ${AppColor.main};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;
const NavbarItem = styled.li`
  list-style: none;
  :first-child {
    margin-right: 16px;
  }
`;
const NavItem = styled.a``;

const Header = () => {
  return (
    <Root>
      <NextLink href="/" passHref>
        <div>로고</div>
      </NextLink>

      <Navbar>
        <NavbarItem>
          <NextLink href="/product" passHref>
            <NavItem>PRODUCT</NavItem>
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/contact" passHref>
            <NavItem>CONTACT</NavItem>
          </NextLink>
        </NavbarItem>
      </Navbar>
    </Root>
  );
};

export default React.memo(Header);
