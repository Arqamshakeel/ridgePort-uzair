import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fullWidth: {
    width: "100%",
  },
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerBanner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#B2D6FC",
    padding: "10px",
    flexFlow: "row wrap",
  },
  headerLink: {
    margin: "0px 40px",
    textDecoration: "none",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Grid container>
            <Toolbar className={classes.fullWidth}>
              <Grid item lg={4}>
                <img src="./logo192.png" alt="" width="15%" />
              </Grid>
              <Grid item lg={4}>
                <Typography variant="h6" color="primary" align="center">
                  RidgePort Options Trader
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Grid container justify="flex-end">
                  <Button variant="outlined" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
      <div className={classes.headerBanner}>
        <Link to="/alerts" className={classes.headerLink}>
          Alerts
        </Link>
        <Link to="/market_movers" className={classes.headerLink}>
          Market Movers
        </Link>
        <Link to="/traders" className={classes.headerLink}>
          Traders
        </Link>
        <Link to="/join_discard" className={classes.headerLink}>
          Join Discord
        </Link>
      </div>
    </>
  );
};

export default Header;
