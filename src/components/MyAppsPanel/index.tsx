import React, {useState} from 'react';
import {SearchField} from "../SearchField";
import { NewProjectSection } from "./NewProjectSection";
import {ScrollBox} from "../ScrollBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {layoutTextColorFaded} from "../../styles/variables";
import styled from "styled-components";
import {NavSearchResult} from "../NavSearchResult";

const NoSearchResultBox = styled.div`
  text-align: center;
  color: ${layoutTextColorFaded};
`

export const MyAppsPanel: React.FC = () => {
  const [searchContent] = useState({value: false})
  const [searchResults] = useState([{title: 'test1', label: 'label1'}])
  return (
    <>
      <SearchField />
      <NewProjectSection />
      <ScrollBox>
        <div>
          { searchResults.length > 0 ?
            searchResults.map(r => {
              return (
                <NavSearchResult title={r.title} label={r.label}/>
              )
            })
            : "empty"
          }
        </div>
        <div>
          { searchContent.value && searchResults.entries.length < 1 ? 'ct-line-loader' : 'empty'}
        </div>
        <NoSearchResultBox>
          <p>No search results for "{`hogeohge`}"</p>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </NoSearchResultBox>

        MyApps
      </ScrollBox>
    </>
  );
}
