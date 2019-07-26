import React from "react";
import { Link } from "react-router-dom"
import { IconBasketball, IconShirt, IconScoreboard, IconHome } from "./icons";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "100px",
  },
  appbar: {
    background: "white",
    padding: "0.2rem 0"

  },
  menuButton: {
    margin: "0 0.5rem"
  },
  toolbar: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center"
    },
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <IconButton className={classes.menuButton}>
              <IconHome/>
            </IconButton>
          </Link>
          <Link to="/team">
            <IconButton className={classes.menuButton}>
              <IconBasketball />
            </IconButton>
          </Link>
          <Link to="/player">
            <IconButton className={classes.menuButton}>
              <IconShirt />
            </IconButton>
          </Link>
          <Link to="/standings">
            <IconButton className={classes.menuButton}>
              <IconScoreboard />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
