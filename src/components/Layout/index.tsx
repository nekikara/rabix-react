import React, {useState} from 'react';
import { Box, PanelColumn, EditorColumn, Handle } from "./style";

type Props = {
  panel: React.ReactNode,
  editor: React.ReactNode
}

export const Layout: React.FC<Props> = ({panel, editor}) => {
  const [treeSize, setTreeSize] = useState(1);
  const [tabsSize, setTabsSize] = useState(4);
  const [sidebarHidden] = useState(false)

  const calcHandlePosition = (e: MouseEvent) => {
    const x = e.clientX;
    // You can't make the left column narrower than 200px
    const leftMargin = 200;
    // And you can't make the right column narrower than 400px
    const rightMargin = document.body.clientWidth - 400;
    // So if you've reached the limit, stop updating the aspect ratio
    if (x < leftMargin) {
      return leftMargin;
    } else if (x > rightMargin) {
      return rightMargin;
    }
    // Otherwise, return how wide the left column should be
    return x;
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    const move = (e: MouseEvent) => {
      const x = calcHandlePosition(e)
      // Take the width of the window
      const docWidth = document.body.clientWidth;
      // Set tree width to the given x
      setTreeSize(x);
      // And fill document area with the rest
      setTabsSize(docWidth - x);
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }

  return (
    <Box className="Layout">
      <PanelColumn hidden={sidebarHidden} treeSize={treeSize}>{ panel }</PanelColumn>
      <Handle hidden={sidebarHidden} onMouseDown={handleMouseDown} />
      <EditorColumn tabsSize={tabsSize}>{ editor }</EditorColumn>
    </Box>
  );
}
