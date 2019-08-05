import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import P5Wrapper from 'react-p5-wrapper';
// import { Helmet } from 'react-helmet';

import { simpleReplicas } from "../p5/simplereplicas";
import githubLogo from '../images/GitHub-Mark-Light-64px.png';



const repoUrl = 'https://www.github.com/fauskanger/thomions';

const startSketchState = {
};


const Page = () => {

    const headerSection = useRef(null);
    const footerSection = useRef(null);

    const [ sketchState, setSketchState ] = useState(startSketchState);
    const [ headerHeight, setHeaderHeight ] = useState(0);
    const [ footerHeight, setFooterHeight ] = useState(0);
    // const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        setHeaderHeight(headerSection.current.scrollHeight);
        setFooterHeight(footerSection.current.scrollHeight);
    }, [setHeaderHeight, setFooterHeight]);

    return (<>
            <header className="App-header" ref={headerSection}>
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
            <main className="sketch_wrapper">
                {
                    headerHeight > 0 &&
                    <P5Wrapper
                        sketch={simpleReplicas}
                        {...sketchState}
                        headerHeight={headerHeight}
                        footerHeight={footerHeight}
                    />
                }
            </main>
            <footer ref={footerSection}>
                Footer
            </footer>
        </>
    );
};


export default Page;