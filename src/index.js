import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';

const MyApp = () => {
    return (
        <>
            <CssBaseline>
                <App />
            </CssBaseline>
        </>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
