import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1)
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

const Btn = ({ variant, click, text, checked }) => {
  const classes = useStyles();
  return (
    <Button
      color={checked ? "primary" : ""}
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
