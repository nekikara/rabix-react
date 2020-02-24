import styled from 'styled-components'
import {
  black,
  layoutSectionBorderLight,
  panelResizeHandleWidth,
  sidebarPanelBg,
  layoutTitleBarHeight,
  p1
} from "../../styles/variables";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  border-bottom: ${layoutSectionBorderLight};
`;

type PanelColumnProps = {
  treeSize: number;
  hidden: boolean;
}
export const PanelColumn = styled.div.attrs((props: PanelColumnProps) => ({
  style: {
    flexGrow: props.treeSize
  }
}))<PanelColumnProps>`
  display: ${props => props.hidden ? 'none' : 'flex'};
  flex: 1 0 0;
  flex-direction: column;
  min-width:0; // Chromium hack, otherwise wide nodes would push the column width
`;

type EditorColumnProps = {
  tabsSize: number;
}
export const EditorColumn = styled.div.attrs((props: EditorColumnProps) => ({
  style: {
    flexGrow: props.tabsSize
  }
}))<EditorColumnProps>``;


type HandleProps = {
  hidden: boolean;
}
export const Handle = styled.div<HandleProps>`
  background-color: ${sidebarPanelBg};
  cursor: col-resize;
  display: inline-block;
  width: ${panelResizeHandleWidth};
  border-right: ${layoutSectionBorderLight};

  &:before {
    content: '';
    display: block;
    position: relative;
    background-color: ${black};
    width: ${props => props.hidden ? '1px' : panelResizeHandleWidth};
    height: ${layoutTitleBarHeight};
    padding: ${p1} 0;
  }
`

