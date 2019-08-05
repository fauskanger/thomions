import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
// import { Helmet } from 'react-helmet';
// import * as M from 'mathjs';

// import { demoSketch } from './p5';
import { simpleReplicas } from './p5/simplereplicas';
import githubLogo from './images/GitHub-Mark-Light-64px.png';
// import ogImage from './images/thumbnailMandelbrot.png';

import './App.css';

const repoUrl = 'https://www.github.com/fauskanger/thomions';


const startSketchState = {
};


class App extends Component {
    p5Element = null;
    // headerSection = null;
    // footerSection = null;
    state = {
        sketch: startSketchState,
        loading: true,
        headerHeight: 0,
        footerHeight: 0
    };

    componentDidMount() {
        this.setState({
            headerHeight: this.headerSection.clientHeight,
            footerHeight: this.footerSection.clientHeight
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    setLoadingComplete = () => {
        this.setState({ loading: false })
    };
    setLoadingStart = () => {
        this.setState({ loading: true })
    };

    render = () => {
        const { sketch: sketchState } = this.state;
        return (
            <div className="App">
                {/*<Helmet>*/}
                {/*    <meta property="og:image" content={ogImage} />*/}
                {/*</Helmet>*/}
                <header className="App-header" ref={(e => this.headerSection = e)}>
                    <div className="title">
                        The evolution of Thomions
                    </div>
                    <div className="github-logo">
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                            <span className="github-link-text">See code</span>
                            <img src={githubLogo} alt="Visit repo on GitHub" />
                        </a>
                    </div>
                </header>
                <main ref={e => this.p5Element = e} className="sketch_wrapper">
                    <P5Wrapper
                        sketch={simpleReplicas}
                        { ...sketchState }
                        headerHeight={this.state.headerHeight}
                        footerHeight={this.state.footerHeight}
                    />
                </main>
                <footer ref={(e => this.footerSection = e)}>
                    Footer
                </footer>
            </div>
        );
    }
}

export default App;
