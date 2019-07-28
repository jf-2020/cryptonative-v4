import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import BaseTemplate from './components/BaseTemplate';
import CssBaseline from '@material-ui/core/CssBaseline';

const MyApp = () => {
    return (
        <>
            <CssBaseline>
                <BaseTemplate />
            </CssBaseline>
        </>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
