import React, {useState} from "react";
import styled from "styled-components";
import {layoutTextColor} from "../styles/variables";
import {TreeNodeBox} from "./TreeNodeBox";

const Box = styled.div`
  display: block;
  color: ${layoutTextColor};
`

export const TreeViewBox: React.FC = () => {
  const [nodes] = useState([{id: 1, value: 'tree node'}])
  return (
    <Box>
      { nodes.map(node => {
          return <TreeNodeBox node={node} key={node.id} />
        })
      }
    </Box>
  )
}
