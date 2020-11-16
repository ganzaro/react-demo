import React from 'react';

const Totals = () => {
    return (
        <div>
            <p>Market cap: <strong>$207,370,557</strong></p>
            <span>Price <strong>1.67</strong></span>
            <span> | Total Blocks <strong>3,589,990</strong></span>
            <span> |Total transaction : <strong>1,169,117</strong></span>
        </div>
    );
}

export default Totals;



// <span>Gas Price <strong>{nod.gas}</strong></span>
// <span>| Transactions: {nod.validator}</span>

// <span>
// <a href={nod.block}><h4>{nod.hash}</h4></a>
// </span>
// <span>Gas Price <strong>{nod.gas}</strong></span>
// <span>| Transactions: {nod.validator}</span>
// <br/><br/>