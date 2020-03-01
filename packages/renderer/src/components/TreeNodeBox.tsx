import React from 'react'
import styled from 'styled-components'
import { layoutTextColor } from '../styles/variables'

const Box = styled.div`
  display: block;
  color: ${layoutTextColor};
`

type Props = {
  node: any
}
export const TreeNodeBox: React.FC<Props> = ({ node }) => {
  return (
    <Box>
      <div className="node">{node.value}</div>
      <div className="children">children</div>
    </Box>
  )
}
