import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { AppSourcesBtn, NewProjectBox, SyncBtn, Text } from './style'
import { AddSourceModal } from '../../AddSourceModal'

export const NewProjectSection: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <NewProjectBox className="NewProjectBox">
      <AppSourcesBtn
        onClick={() => {
          setShowModal(true)
        }}
      >
        <FontAwesomeIcon icon={faPlus} fixedWidth />
        <Text>Open a Project</Text>
      </AppSourcesBtn>
      {showModal ? <AddSourceModal /> : <></>}
      <SyncBtn>
        <FontAwesomeIcon icon={faSyncAlt} />
      </SyncBtn>
    </NewProjectBox>
  )
}
