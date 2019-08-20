import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import auth from "../services/auth";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexDirection: "row",
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: "flex"
  },
  logout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    cursor: "pointer"
  }
}));

const MainHeader = ({ history }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Lecture6
        </Typography>
      </Toolbar>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <Typography
          variant="button"
          className={classes.logout}
          onClick={() => auth.signOut().then(() => history.replace("/login"))}
          noWrap
        >
          Logout
        </Typography>
      </div>
    </AppBar>
  );
};

export default withRouter(MainHeader);
