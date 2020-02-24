import React, {useState} from 'react';
import { TabSelector } from "../TabSelector";
import {TabSelectorEntry} from "../TabSelectorEntry";

export const AppsPanel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState('first')
  const changeActive = (idx: 'first' | 'second') => {
    return (e: React.MouseEvent) => {
      setActiveIndex(idx)
    }
  }
  return (
    <>
      <TabSelector activeIndex={activeIndex}>
        <TabSelectorEntry active={activeIndex === 'first'}
                          disabled={false}
                          onClick={changeActive('first')}
        >
          My Apps
        </TabSelectorEntry>
        <TabSelectorEntry active={activeIndex === 'second'}
                          disabled={false}
                          onClick={changeActive('second')}
        >
          Public Apps
        </TabSelectorEntry>
      </TabSelector>

      <div className="panelContainer">
        My Apps PanelContainer
      </div>

      <div className="PanelContainer">
        Public Apps PanelContainer
      </div>
    </>
  );
}
