// this component will be a functional component that is meant to
// purely render a single piece of data as an element in a row.
// the piece of data will be passed down thru props from the row
// parent component.

import React from 'react';

const RowItem = (props) => {
    return (
        <h4>{props.datum}</h4>
    )
}

export default RowItem;