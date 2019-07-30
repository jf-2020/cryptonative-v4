// functional component representing the Portfolio page in which
// a given user is able to setup a set of portfolios

import React from 'react';
import BaseTemplate from '../BaseTemplate';

import LineChart from '../Charts/LineChart';

const PortfolioView = () => {
    return (
        <BaseTemplate>
            <h1>Portfolio View</h1>
            <LineChart />
        </BaseTemplate>
    )
};

export default PortfolioView;
