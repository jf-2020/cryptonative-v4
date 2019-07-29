import React from 'react';
import ReactDOM from 'react-dom';
import BaseTemplate from './components/BaseTemplate';
import CssBaseline from '@material-ui/core/CssBaseline';

/* import lorem for testing */
import HeaderData from './components/lorem/HeaderData';
import ParagraphData from './components/lorem/ParagraphData';

/* import charts */
import LineChart from './components/Charts/LineChart';
import LineGraph from './components/Charts/LineGraph';

/* testing charts & lorem */
const App = () => {
    return (
        <>
            <CssBaseline>
                <BaseTemplate>
                    <HeaderData />
                    <LineGraph />
                    <ParagraphData />
                    <LineChart />
                    <HeaderData />
                </BaseTemplate>
            </CssBaseline>
        </>
    )
}

// /* testing the graphs as child componets */
// const App = () => {
//     return (
//         <>
//             <CssBaseline>
//                 <BaseTemplate>
//                     <LineGraph />
//                     <LineChart />
//                 </BaseTemplate>
//             </CssBaseline>
//         </>
//     )
// }

// /* multiple child components -- all lorem */
// const App = () => {
//     return (
//         <>
//             <CssBaseline>
//                 <BaseTemplate>
//                     <HeaderData />
//                     <ParagraphData />
//                     <HeaderData />
//                     <ParagraphData />
//                 </BaseTemplate>
//             </CssBaseline>
//         </>
//     )
// }

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
