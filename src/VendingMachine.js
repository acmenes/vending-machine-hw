import React from 'react';

import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return(
        <div className="VendingMachine">
             <p>This is a vending machine. Please make a selection.</p>
             <p><Link to="/soda">Soda</Link></p>
             <p><Link to="/candy">Candy</Link></p>
             <p><Link to="/chips">Chips</Link></p>
        </div>
    )
};

export default VendingMachine;