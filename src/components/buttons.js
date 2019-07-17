import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    fontSize: "14px",
    '&:hover': {
      background: "#3f51b5",
      color: "#ffffff"
    },
    // hide buttons for now on mobile
    [theme.breakpoints.down("sm")]: {
      display: "none"

    }
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

const Btn = ({ variant, click, text, checked }) => {
  const classes = useStyles();
  return (
    <Button
      color={checked ? "primary" : "default" }
      variant={variant}
      className={classes.button}
      onClick={click}
    >
      {text}
      {checked ? (
        <CheckIcon
          className={classes.icon}
          style={{ fontSize: 20, color: "white" }}
        />
      ) : (
        ""
      )}
    </Button>
  );
};

export default Btn;
