import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CssBaseline, AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(15),
    "&hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          BlogNews
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/authors" className={classes.link}>
            Authors
          </Link>
          <Link to="/coments" className={classes.link}>
            Coments
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
