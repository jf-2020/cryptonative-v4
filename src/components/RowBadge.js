import React from 'react';
import '../styles/RowBadge.css';
import Avatar from '@material-ui/core/Avatar';

const RowBadge = (props) => {
    let logo = require('../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
    try {
        logo = require(`../../node_modules/cryptocurrency-icons/svg/color/${props.ticker.toLowerCase()}.svg`);
    } catch (e) {
        console.log("error: ", e.message);
    }

    return (
        <div className="flex-row-container">
            <Avatar alt={props.ticker} src={logo} />
        </div>
    )
}

export default RowBadge;