import React from 'react';

import { Link } from 'react-router-dom';

const Candy = () => {
    return (
        <div>
            <p>I want candy bubblegum and taffy skippin' to the sweet shop with my sweetheart Sandy.
                DISPENSING CANDY
            </p>
            <p><Link to="/">Go back to the main selection screen</Link></p>
        </div>
    )
};

export default Candy;