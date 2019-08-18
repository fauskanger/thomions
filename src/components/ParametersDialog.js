import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import Parameters from "./Parameters";

const defaultParameters = {
    value: 'old',
    otherValue: false
};

const ParametersDialog = ({ dialogOpen=false, handleClose }) => {

    const [ parameters, updateParameters ] = useState(defaultParameters);

    const saveParams = () => {
        updateParameters({
            ...parameters,
            value: 'new'
        });
        handleClose();
    };

    console.log('params:', parameters);

    return (
        <Dialog
            open={dialogOpen}
            onClose={handleClose}
        >
            <DialogTitle>Parameters</DialogTitle>
            <DialogContent>
                <Parameters />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={saveParams} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default ParametersDialog;