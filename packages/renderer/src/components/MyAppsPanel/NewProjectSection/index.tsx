import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {AppSourcesBtn, NewProjectBox, SyncBtn, Text} from "./style";

export const NewProjectSection: React.FC = () => {
  return (
    <NewProjectBox className="NewProjectBox">
      <AppSourcesBtn>
        <FontAwesomeIcon icon={faPlus} fixedWidth />
        <Text>Open a Project</Text>
      </AppSourcesBtn>
      <SyncBtn>
        <FontAwesomeIcon icon={faSyncAlt} />
      </SyncBtn>
    </NewProjectBox>
  );
}
