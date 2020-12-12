// import React, {useState} from 'react';
import React from 'react';

// import logo from './logo.svg';
import NodesList from './NodesList'
import Totals from './Totals'
import nodes from './data/nodes';
import './App.css';
import { Header, Header2 } from '../../components/Header'


function App() {
  return(
    <div>
      <Header2  ></Header2>
      
      <h1>Nodes Info</h1>
      <Totals></Totals>
      <hr></hr>
      <NodesList nodes={nodes} />
    </div>
  );
}

export default App;
