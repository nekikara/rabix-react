import React from 'react'
import styled from 'styled-components'
import {
  black,
  layoutSectionFontColor,
  layoutTitleBarHeight,
  p1,
  sidebarPanelBg
} from '../../styles/variables'
import { AppsPanel } from '../AppsPanel'

const LogoBox = styled.div`
  background-color: ${black};
  height: ${layoutTitleBarHeight};
  width: 100%;
  line-height: ${layoutTitleBarHeight};
  padding: ${p1};
`

const AppsPanelSuperBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${layoutSectionFontColor};
  background-color: ${sidebarPanelBg};
`
const AppsPanelBox = styled.section`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${sidebarPanelBg};
`

export const Panel: React.FC = () => {
  return (
    <>
      <LogoBox>
        <span>Logo</span>
      </LogoBox>
      <AppsPanelSuperBox>
        <AppsPanelBox>
          <AppsPanel />
        </AppsPanelBox>
      </AppsPanelSuperBox>
    </>
  )
}
