import React, {useContext, useEffect, useRef, useState} from 'react';

import TuneIcon from '@material-ui/icons/Tune';
import TimelineIcon from '@material-ui/icons/Timeline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Typography} from '@material-ui/core';

import ParametersDialog from "./ParametersDialog";
import DialogContext from "../contexts/dialogContext";



const useStyles = makeStyles({
    footerButtonLabel: {
        paddingLeft: '0.5rem'
    }
});


const ExpandButton = ({ open }) => open? <ExpandLessIcon />: <ExpandMoreIcon />;


const Footer = props => {
    const classes = useStyles();

    const footerBottomRef = useRef(null);

    const [ footerExpanded, setFooterExpanded ] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const openParams = () => setDialogOpen(true);
    const handleClose = () => setDialogOpen(false);

    useEffect(() => {
        footerBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, [footerExpanded]);

    const dialogContext = useContext(DialogContext);

    console.log(dialogContext);

    return <>
        <div className="footer-toggle" onClick={() => setFooterExpanded(!footerExpanded)}>
            <ExpandButton open={footerExpanded}/>
            <div>Menu</div>
            <ExpandButton open={footerExpanded}/>
        </div>
        {
            footerExpanded &&
            <div className={"controls"}>
                <div>
                    <TimelineIcon />
                    <Typography className={classes.footerButtonLabel}>
                        Timeline
                    </Typography>
                </div>
                <div onClick={openParams}>
                    <TuneIcon />
                    <Typography className={classes.footerButtonLabel}>
                        Parameters
                    </Typography>
                </div>
            </div>
        }
        <div ref={footerBottomRef}> </div>
        <ParametersDialog dialogOpen={dialogOpen} handleClose={handleClose} />
    </>
};

export default Footer;