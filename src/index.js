import React from 'react';
import ReactDOM from 'react-dom';
import BaseTemplate from './components/BaseTemplate';
import CssBaseline from '@material-ui/core/CssBaseline';

/* import lorem for testing */
import HeaderData from './components/lorem/HeaderData';
import ParagraphData from './components/lorem/ParagraphData';

/* multiple child components -- all lorem */
const App = () => {
    return (
        <>
            <CssBaseline>
                <BaseTemplate>
                    <HeaderData />
                    <ParagraphData />
                    <HeaderData />
                    <ParagraphData />
                </BaseTemplate>
            </CssBaseline>
        </>
    )
}

// /* header lorem */
// const App = () => {
//     return (
//         <>
//             <CssBaseline>
//                 <BaseTemplate>
//                     <HeaderData />
//                 </BaseTemplate>
//             </CssBaseline>
//         </>
//     )
// }

// /* paragraph lorem */
// const App = () => {
//     return (
//         <>
//             <CssBaseline>
//                 <BaseTemplate>
//                     <ParagraphData />
//                 </BaseTemplate>
//             </CssBaseline>
//         </>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'));
