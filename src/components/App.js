import React from 'react';
import SearchAppBar from './SearchAppBar';
import LabelBottomNavigation from './LabelBottomNavigation';
import Box from '@material-ui/core/Box';
import Lorem from './Lorem';

function App() {
    return (
        <div style={{ height: '100%' }}>
            <Box display="flex" flexDirection="column">
                <SearchAppBar />
                <Box flex="1"
                    overflow="auto"
                    display="flex"
                    flexDirection="column"
                    alignItems="stretch"
                >
                    <Lorem />
                </Box>
                <LabelBottomNavigation />
            </Box>
        </div>
    )
}

export default App;
