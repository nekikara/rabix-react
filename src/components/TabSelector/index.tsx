import React from 'react';
import styled from "styled-components";
import {actionBarHeight, brandPrimary} from "../../styles/variables";

const DeepUnselectable = styled.div`
  &, * {
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -ms-user-select: none; /* IE10+ */
    user-select: none;
  }
`;
const TabsBox = styled(DeepUnselectable)`
  width: 100%;
  display: flex;
  height: ${actionBarHeight};
  flex-direction: row;
  border-bottom: 1px solid #292929;
`;

type HighLightProps = {
  activeIndex: string,
}
const Highlight = styled.div<HighLightProps>`
  transition: .2s all;
  height: 1px;
  width: 50%;
  margin-left: ${props => props.activeIndex === 'second' ? '50%' : '0%'};
  background-color: ${brandPrimary};
`;

type Props = HighLightProps
export const TabSelector: React.FC<Props> = ({activeIndex, children}) => {
  return (
    <>
      <TabsBox>
        {children}
      </TabsBox>
      <Highlight activeIndex={activeIndex}/>
    </>
  );
}
