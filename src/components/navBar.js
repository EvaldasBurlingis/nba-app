import React from "react";
import { Btn, SearchInput } from "./index";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#333333"
  }
}));

const NavBar = ({
  searchChange,
  eastButtonClick,
  westButtonClick,
  conference,
  searchState,
  clearSearch
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <SearchInput searchChange={searchChange} searchState={searchState} clearSearch={clearSearch}/>
          <div>
            <Btn
              color={"secondary"}
              variant={"contained"}
              click={westButtonClick}
              text="Western Conference"
              checked={conference === "west" ? true : false}
            />
            <Btn
              color={"primary"}
              variant={"contained"}
              click={eastButtonClick}
              text="Eastern Conference"
              checked={conference === "east" ? true : false}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
