import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";
import {black, layoutTextColorFaded} from "../../styles/variables";

const NavSearchResultBox = styled.div`
  display: block;
  padding: .5em 0;
  font-size: .95rem;
  &:hover {
    background-color: ${black};
    cursor: pointer;
  }
`;
const Title = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const Label = styled(Title)`
  color: ${layoutTextColorFaded};
  font-size: .85rem;
`;

type Props = {
  title: string,
  label: string,
}
export const NavSearchResult: React.FC<Props> = ({title, label}) => {
  return (
    <NavSearchResultBox>
      <Title>
        <FontAwesomeIcon icon={faFolder} fixedWidth />
        { title }
      </Title>
      <Label>
        { label }
      </Label>
    </NavSearchResultBox>
  )
}
