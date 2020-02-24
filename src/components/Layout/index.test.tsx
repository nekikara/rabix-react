import React from 'react';
import { render } from '@testing-library/react';
import {Layout} from './index';


const Panel: React.FC = () => {
  return (
    <div>
      panel
    </div>
  )
}

const Editor: React.FC = () => {
  return (
    <div>
      Editor
    </div>
  )
}

test('renders learn react link', () => {
  const { getByText } = render(<Layout panel={<Panel />} editor={<Editor />}/>);
  const linkElement = getByText(/Editor/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = getByText(/panel/);
  expect(linkElement2).toBeInTheDocument();
});
