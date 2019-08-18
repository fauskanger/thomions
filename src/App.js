import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';

import DialogContext from './contexts/dialogContext'
import './style/App.css';
import Page from "./components/Page";

const App = () =>
    <div className="App">
        {/*<Helmet>*/}
        {/*    <meta property="og:image" content={ogImage} />*/}
        {/*</Helmet>*/}
        {/*<CssBaseline />*/}
        <DialogContext.Provider value={{
            contextValue2: 42
        }}>
            <Page/>
        </DialogContext.Provider>
    </div>;

export default App;
