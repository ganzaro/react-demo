// import React, {useState} from 'react';
import React from 'react';

// import logo from './logo.svg';
import NodesList from './components/NodesList'
import nodes from './data/nodes';
import './App.css';

function App() {
  return(
    <div>
      <h1>Celo Nodes Info</h1>
      <hr></hr>
      <NodesList nodes={nodes} />
    </div>
  );
}

export default App;
