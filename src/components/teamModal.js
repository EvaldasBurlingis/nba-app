import React from "react";
// UI IMPORTS
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255,255,255, 0.9)",
      [theme.breakpoints.down('sm')]: {
        padding: "1rem"
      },
      [theme.breakpoints.up('md')]: {
        padding: "4rem"
      },
    },
  }));

const TeamModal = ({ isOpen, handleClose }) => {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isOpen}
            onClose={handleClose}
        >
            <div className={classes.paper}>
                <button onClick={handleClose}>X</button>
            <h2>MODAL OPEN</h2>
            </div>
        </Modal>
    )
}

export default TeamModal