import React from 'react';
import {SearchField} from "../SearchField";

export const MyAppsPanel: React.FC = () => {
  return (
    <>
      <SearchField />
      <div>
        <button>Open a Project</button>
        <button>refresh</button>
      </div>
      <div className="scroll-container">
        MyApps
      </div>
    </>
  );
}
