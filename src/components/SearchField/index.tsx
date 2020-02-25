import React from 'react';

export const SearchField: React.FC = () => {
  return (
    <>
      <div className="form-group m-0">
        <i className="icon fa fa-fw fa-search" />
        <input className="form-control"
               data-test="search-field"
               placeholder="placeholder"
               value="value"
               onChange={(e) => console.log('keyUp', e)}
        />
      </div>
    </>
  );
}
