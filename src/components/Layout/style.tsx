import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  border-bottom: $layout-section-border-light;
`;

type PanelColumnProps = {
  treeSize: number;
  hidden: boolean;
}
export const PanelColumn = styled.div<PanelColumnProps>`
  display: ${props => props.hidden ? 'none' : 'flex'};
  flex: 1 0 0;
  flex-direction: column;
  min-width:0; // Chromium hack, otherwise wide nodes would push the column width
  flex-grow: ${props => props.treeSize}
`;

type EditorColumnProps = {
  tabsSize: number;
}
export const EditorColumn = styled.div<EditorColumnProps>`
  flex-grow: ${props => props.tabsSize};
`;

const black = '#232323';
const handleWidth = '6px';
const sidebarPanelBg = '#3c3c3c';
const layoutSectionBorderLight = '1px solid #232323';
const layoutTitleBarHeight = '36px';


type HandleProps = {
  hidden: boolean;
}
export const Handle = styled.div<HandleProps>`
  background: ${sidebarPanelBg};
  cursor: col-resize;
  display: inline-block;
  width: ${handleWidth};
  border-right: ${layoutSectionBorderLight};

  &:before {
    content: '';
    display: block;
    position: relative;
    background-color: ${black};
    width: ${props => props.hidden ? '1px' : handleWidth};
    height: ${layoutTitleBarHeight};
  }
`

