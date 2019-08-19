import React from "react";
import { withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Link from "./StyledLink";

const SidebarItem = ({ data, location }) => {
  const { path, title } = data;
  const selected = location.pathname === path;

  return (
    <Link to={path}>
      <ListItem button selected={selected}>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};

export default withRouter(SidebarItem);
