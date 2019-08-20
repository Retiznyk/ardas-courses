import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import ArrowLeft from "@material-ui/icons/ArrowLeft";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default ({ history, match }) => {
  const classes = useStyles();
  const { userId } = match.params;

  function onBack() {
    history.goBack();
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="back"
          onClick={onBack}
        >
          <ArrowLeft />
        </IconButton>
        <Typography variant="h6" noWrap>
          User {userId}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
