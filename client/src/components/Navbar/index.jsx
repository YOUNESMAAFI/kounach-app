import React from "react";
import "./Navbar.css";
import logo from "../../images/KounacheLogo.png";
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className="">
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src={logo} alt="Kounache logo" className="logo" />
            KOUNACHE
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
