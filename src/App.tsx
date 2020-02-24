import React from 'react';
import './App.css';
import { Layout } from "./components/Layout";
import { Panel } from "./components/Panel";

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
