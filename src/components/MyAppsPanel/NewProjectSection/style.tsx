import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brandPrimary, inputBtnBorderWidth, layoutSectionBackground, layoutTextColor} from "../../../styles/variables";
import {faPlus, faSyncAlt} from "@fortawesome/free-solid-svg-icons";

export const NewProjectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LinkButton = styled.button`
  height: 24px;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  line-height: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
`;

export const AppSourcesBtn = styled(LinkButton)`
  text-decoration: none;
  color: ${brandPrimary};
  &.active, &:focus {
    color: ${brandPrimary};
    border-color: transparent;
    background: none;
    outline: none;
  }
`;
export const Text = styled.span`
  padding-left: 3px;
`

export const SyncBtn = styled(LinkButton)`
  color: ${layoutTextColor};
  box-sizing: border-box;
  margin-right: 1rem;

  &:focus {
    border-color: transparent;
    background: none;
    outline: none;
  }

  &:hover {
    color: ${layoutTextColor};
    background: ${layoutSectionBackground};
    border: ${inputBtnBorderWidth} solid #6d6d6d;
  }
`
