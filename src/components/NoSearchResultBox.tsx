import React from "react";
import styled from "styled-components";
import {layoutTextColorFaded} from "../styles/variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  text-align: center;
  color: ${layoutTextColorFaded};
`

export const NoSearchResultBox: React.FC = () =>
  <Box>
    <p>No search results for "{`hogeohge`}"</p>
    <FontAwesomeIcon icon={faSearch} />
  </Box>

