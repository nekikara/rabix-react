import React, { useState } from 'react'
import { NavSearchResult } from './NavSearchResult'

export const NavSearchResultBox: React.FC = () => {
  const [searchResults] = useState([{ id: 1, title: 'test1', label: 'label1' }])
  return (
    <div className="NavSearchResultBox">
      {searchResults.length > 0
        ? searchResults.map(r => {
            return (
              <NavSearchResult key={r.id} title={r.title} label={r.label} />
            )
          })
        : 'empty'}
    </div>
  )
}
