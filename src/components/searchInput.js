import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    pointerEvents: "none"
  },
  clearIcon: {
    width: theme.spacing(6),
    pointerEvents: "pointer",
    "&:hover": {
      color: "#333333"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 4),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

const SearchInput = ({ searchChange, searchState, clearSearch }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search Team"
        value={searchState}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "Search" }}
        onChange={searchChange}
      />
      {searchState !== "" ? (
        <ClearIcon className={classes.clearIcon} onClick={clearSearch} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchInput;
