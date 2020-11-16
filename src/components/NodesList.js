import React from 'react';

const NodesList = ({nodes}) => {
    return nodes.map(nod => {
        return (
            <div key={nod.id}>
              <span><h4>Block: {nod.block}</h4></span>
              <p>Hash: {nod.hash}</p>
              
              <span>Gas Price <strong>{nod.gas}</strong></span>
              <p>Validator: {nod.validator}</p>
              <h4>Transactions</h4>
              <p>Type: {nod.transactions.type}</p>
              <p>fee: {nod.transactions.fee}</p>
              <p>time: {nod.transactions.time}</p>
              <br/><br/>
            </div>
          );
        }); 
}

export default NodesList;

  

// const NodesList = ({nodes}) => {
//     return nodes.map(nod => {
//         return (
//             <div key={nod.id}>
//                 <span><h3>{nod.name}</h3></span>
//                 <span><p>{nod.transactions}</p></span>
//             </div>
//         );
//     });
// }