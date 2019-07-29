import React from "react";
import { NavLink } from "react-router-dom"
import { IconBasketball, IconShirt, IconScoreboard, IconHome } from "./icons";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "80px",
  },
  appbar: {
    background: "white",
    padding: "0.2rem 0"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  menuButton: {
    margin: "0 0.5rem"
  },
  activeLink: {
    fill: "#f12711"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/" exact={true} activeClassName={classes.activeLink}>
            <IconButton className={classes.menuButton}>
              <IconHome/>
            </IconButton>
          </NavLink>
          <NavLink to="/team" activeClassName={classes.activeLink}>
            <IconButton className={classes.menuButton}>
              <IconBasketball />
            </IconButton>
          </NavLink>
          <NavLink to="/player" activeClassName={classes.activeLink}>
            <IconButton className={classes.menuButton}>
              <IconShirt />
            </IconButton>
          </NavLink>
          <NavLink to="/standings" activeClassName={classes.activeLink}>
            <IconButton className={classes.menuButton}>
              <IconScoreboard />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
