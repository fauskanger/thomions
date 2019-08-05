import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Page from "./components/Page";

const App = () =>
    <div className="App">
        {/*<Helmet>*/}
        {/*    <meta property="og:image" content={ogImage} />*/}
        {/*</Helmet>*/}
        {/*<CssBaseline />*/}
        <Page/>
    </div>;

export default App;
