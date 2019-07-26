import React from 'react';
import '../styles/RowBadge.css';



const RowBadge = (props) => {
    let logo = require('../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
    try {
        logo = require(`../../node_modules/cryptocurrency-icons/svg/color/${props.ticker.toLowerCase()}.svg`);
    } catch (e) {
        console.log("error: ", e.message);
    }

    return (
        <div className="flex-row-container">
            <img src={logo} alt={props.ticker + "-logo"} />
            <div className="flex-col-container">
                <h1>{props.name}</h1>
                <h1>{props.ticker}</h1>
            </div>
        </div>
    )
}

export default RowBadge;