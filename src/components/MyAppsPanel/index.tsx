import React from 'react';

export const MyAppsPanel: React.FC = () => {
  return (
    <>
      <div>search field</div>
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
