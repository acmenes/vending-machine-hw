import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
    return(
        <div>
            <p>Huh. In New Jersey, we call it soda. 
                In Ohio, they call it pop. 
                In Georgia, they call it coke. Wow.
                All good. Dispensing one cold refreshing soda.</p>
            <p><Link to="/">Go back to the main selection screen</Link></p>
        </div>

        )
};

export default Soda;