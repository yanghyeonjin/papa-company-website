import React from "react";
import styled from "styled-components";
import { AppColor } from "../config/theme";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  height: 56px;

  background-color: ${AppColor.main};
`;
const Main = styled.main`
  flex-grow: 1;
`;

const PageLayout = ({ children }) => {
  return (
    <Root>
      <Header></Header>
      <Main>{children}</Main>
    </Root>
  );
};

export default React.memo(PageLayout);
