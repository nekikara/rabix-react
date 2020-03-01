import React, { useState } from 'react'
import { TabSelector } from '../TabSelector'
import { TabSelectorEntry } from '../TabSelectorEntry'
import { PanelBox } from './style'
import { MyAppsPanel } from '../MyAppsPanel'
import { PublicAppsPanel } from '../PublicAppsPanel'

export const AppsPanel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState('first')
  const changeActive = (idx: 'first' | 'second') => {
    return () => {
      setActiveIndex(idx)
    }
  }
  return (
    <>
      <TabSelector activeIndex={activeIndex}>
        <TabSelectorEntry
          active={activeIndex === 'first'}
          disabled={false}
          onClick={changeActive('first')}
        >
          My Apps
        </TabSelectorEntry>
        <TabSelectorEntry
          active={activeIndex === 'second'}
          disabled={false}
          onClick={changeActive('second')}
        >
          Public Apps
        </TabSelectorEntry>
      </TabSelector>

      <PanelBox>
        {activeIndex === 'first' ? <MyAppsPanel /> : <PublicAppsPanel />}
      </PanelBox>
    </>
  )
}
