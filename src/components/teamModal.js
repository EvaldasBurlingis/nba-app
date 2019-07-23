import React from "react";
import { TeamModalHeader } from "./index";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255, 0.5)",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "0rem"
    }
  }
}));

const TeamModal = ({ isOpen, handleClose, team }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <TeamModalHeader handleClose={handleClose} team={team} />
      </div>
    </Modal>
  );
};

export default TeamModal;
