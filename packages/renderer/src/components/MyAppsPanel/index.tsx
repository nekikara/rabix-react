import React from 'react'
import { SearchField } from '../SearchField'
import { NewProjectSection } from './NewProjectSection'
import { ScrollBox } from '../ScrollBox'
import { LineLoaderBox } from '../LineLoaderBox'
import { NoSearchResultBox } from '../NoSearchResultBox'
import { NavSearchResultBox } from '../NavSearchResultBox'
import { TreeViewBox } from '../TreeViewBox'

export const MyAppsPanel: React.FC = () => {
  return (
    <>
      <SearchField />
      <NewProjectSection />
      <ScrollBox>
        <NavSearchResultBox />
        <LineLoaderBox />
        <NoSearchResultBox />
        <TreeViewBox />
      </ScrollBox>
    </>
  )
}
