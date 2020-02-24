import React from 'react';
import './App.css';
import { Layout } from "./components/Layout";

const Panel: React.FC = () => {
  return (
    <div>
      Panel
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

function App() {
  return (
    <div className="App">
      <Layout width={document.body.clientWidth}
              panel={<Panel />}
              editor={ <Editor /> }
      />
    </div>
  );
}

export default App;
