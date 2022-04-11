import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex-grow: 1;
`;

const PageLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

export default React.memo(PageLayout);
