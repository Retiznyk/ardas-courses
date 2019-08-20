import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import SidebarItem from "./SidebarItem";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

const options = [
  {
    title: "Welcome",
    path: "/welcome"
  },
  {
    title: "Users",
    path: "/users"
  },
  {
    title: "About",
    path: "/about"
  }
];

export default () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {options.map((option, index) => (
          <SidebarItem data={option} key={index} />
        ))}
      </List>
    </Drawer>
  );
};
