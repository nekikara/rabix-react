import React, { useState } from 'react'
import { Box, PanelColumn, EditorColumn, Handle } from './style'

type Props = {
  width: number
  panel: React.ReactNode
  editor: React.ReactNode
}

export const Layout: React.FC<Props> = ({ width, panel, editor }) => {
  const [treeSize, setTreeSize] = useState(1)
  const [tabsSize, setTabsSize] = useState(4)
  const [sidebarHidden] = useState(false)

  const calcHandlePosition = (e: React.MouseEvent) => {
    const x = e.clientX
    // You can't make the left column narrower than 200px
    const leftMargin = 200
    // And you can't make the right column narrower than 400px
    const rightMargin = width - 400
    // So if you've reached the limit, stop updating the aspect ratio
    if (x < leftMargin) {
      return leftMargin
    }
    if (x > rightMargin) {
      return rightMargin
    }
    // Otherwise, return how wide the left column should be
    return x
  }

  const handleMouseDown = () => {
    const move = (e: React.MouseEvent) => {
      const x = calcHandlePosition(e)
      // Take the width of the window
      // Set tree width to the given x
      setTreeSize(x)
      // And fill document area with the rest
      setTabsSize(width - x)
    }
    const up = () => {
      // @ts-ignore
      document.removeEventListener('mousemove', move)
      // @ts-ignore
      document.removeEventListener('mouseup', up)
    }
    // @ts-ignore
    document.addEventListener('mousemove', move)
    // @ts-ignore
    document.addEventListener('mouseup', up)
  }

  const panelRole = 'panel'
  const handleRole = 'handle'
  const editorRole = 'editor'

  return (
    <Box className="Layout">
      {/* eslint-disable-next-line jsx-a11y/aria-role */}
      <PanelColumn role={panelRole} hidden={sidebarHidden} treeSize={treeSize}>
        {panel}
      </PanelColumn>
      <Handle
        role={handleRole}
        hidden={sidebarHidden}
        onMouseDown={handleMouseDown}
      />
      <EditorColumn role={editorRole} tabsSize={tabsSize}>
        {editor}
      </EditorColumn>
    </Box>
  )
}
