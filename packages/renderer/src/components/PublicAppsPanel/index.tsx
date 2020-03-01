import React from 'react'

export const PublicAppsPanel: React.FC = () => {
  return (
    <>
      <div>Search Public Apps</div>
      <div>
        <span>Group by:</span>
        <button type="button">Open a Project</button>
        <ul>
          <li>
            <span>caption</span>
          </li>
        </ul>
      </div>
      <div className="scroll-container">Public Apps Panel</div>
    </>
  )
}
