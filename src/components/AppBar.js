import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Nav = () => {
    return (
        <AppBar title="My App">
            <Tabs>
                <Tab label="Item 1" />
                <Tab label="Item 2" />
                <Tab label="Item 3" />
                <Tab label="Item 4" />
            </Tabs>
        </AppBar>
    )
}

export default Nav;