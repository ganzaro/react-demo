import React from 'react';

const NodesList = ({nodes}) => {
    return nodes.map(nod => {
        return (
            <div key={nod.id}>
              <span>
                <a href={nod.id}><h4>{nod.name}</h4></a>
              </span>
              <span>by <strong>{nod.name}</strong></span>
              <span>| Transactions: {nod.transactions}</span>
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