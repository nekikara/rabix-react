import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { layoutTextColorFaded } from '../styles/variables'

const Box = styled.div`
  text-align: center;
  color: ${layoutTextColorFaded};
`

export const NoSearchResultBox: React.FC = () => {
  const placehodler = 'hogehoge'
  return (
    <Box>
      <p>
        No search results for &quot;
        {placehodler}
        &quot;
      </p>
      <FontAwesomeIcon icon={faSearch} />
    </Box>
  )
}
