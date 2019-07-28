import React from "react";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import InputBase from "@material-ui/core/InputBase";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    margin: "2rem auto",
    backgroundColor: "white",
    boxShadow: "none",
    borderRadius: 0,
    border: "1px solid #ddd",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0"
    }
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  clearIcon: {
    "&:hover": {
      color: "tomato",
    },
  }
}));

const SearchInput = ({ searchChange, searchState, clearSearch }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
          <InputBase
          placeholder="Search"
          value={searchState}
          inputProps={{ "aria-label": "Search" }}
          onChange={searchChange}
          className={classes.input}
          
        />
        {searchState !== "" ? (
          <ClearIcon onClick={clearSearch} className={classes.clearIcon}/>
        ) : (
          ""
        )}
    </Paper>
  );
};

export default SearchInput;
