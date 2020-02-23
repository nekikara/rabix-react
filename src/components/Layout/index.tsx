import React from 'react';

type Props = {
  panel: React.ReactNode,
  editor: React.ReactNode
}

export const Layout: React.FC<Props> = ({panel, editor}) => {
  return (
    <div className="Layout">
      { panel }
      <div className="handle-vertical hidden" />
      { editor }
    </div>
  );
}

