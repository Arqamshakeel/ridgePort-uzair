import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    borderTop: "1px solid #ccc",
    padding: "20px 0",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography>Join Discord</Typography>
            <Typography>Social Media</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography>Performance</Typography>
            <Typography>FAQ</Typography>
            <Typography>Pricing</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
