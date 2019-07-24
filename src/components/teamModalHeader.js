import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconBasketball, IconShirt, IconScoreboard } from "./icons";
import { ModalTeamTab } from "./index";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

// Tabs test
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "5rem"
  },
  clearIcon: {
    fontSize: "2rem"
  }
}));

const TeamModalHeader = ({ handleClose, team }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Team" icon={<IconBasketball />} {...a11yProps(0)} />
            <Tab label="Players" icon={<IconShirt />} {...a11yProps(1)} />
            <Tab
              label="Standings"
              icon={<IconScoreboard />}
              {...a11yProps(2)}
            />
            <Tab
              onClick={handleClose}
              label="Close"
              icon={
                <ClearIcon
                  classsName={classes.clearIcon}
                  onClick={handleClose}
                />
              }
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ModalTeamTab team={team} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          players
        </TabPanel>
        <TabPanel value={value} index={2}>
          Standings
        </TabPanel>
      </div>
    </div>
  );
};

export default TeamModalHeader;
