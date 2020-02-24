import React from 'react';
import styled from "styled-components";
import {black, layoutSectionFontColor, layoutTitleBarHeight, p1, sidebarPanelBg} from "../../styles/variables";

const LogoBox = styled.div`
  background-color: ${black};
  height: ${layoutTitleBarHeight};
  width: 100%;
  line-height: ${layoutTitleBarHeight};
  padding: ${p1};
`

const AppsPanelBox = styled.div`
  color: ${layoutSectionFontColor};
  background: ${sidebarPanelBg}
`

export const Panel: React.FC = () => {
  return (
    <>
      <LogoBox>
        <span>Logo</span>
      </LogoBox>
      <AppsPanelBox>
        <span>container</span>
      </AppsPanelBox>
    </>
  );
}
