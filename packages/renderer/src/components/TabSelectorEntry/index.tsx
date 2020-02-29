import React from 'react';
import styled from "styled-components";
import {actionBarHeight, layoutTextColor, layoutTextColorFaded} from "../../styles/variables";

type TabBoxProps = {
  active: boolean,
  disabled: boolean,
}
const TabBox = styled.div<TabBoxProps>`
  display: inline-block;
  flex: 1;
  text-align: center;
  line-height: ${actionBarHeight};
  background: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.active ? layoutTextColor : layoutTextColorFaded};
  position: relative;
`;

type Props = {
  active: boolean,
  disabled: boolean,
  onClick: (e: React.MouseEvent) => void
}
export const TabSelectorEntry: React.FC<Props> = ({active, disabled , onClick, children}) => {
  return (
    <>
      <TabBox active={active} disabled={disabled} onClick={onClick}>
        {children}
      </TabBox>
    </>
  );
}
