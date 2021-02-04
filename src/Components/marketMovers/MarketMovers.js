import { Typography } from "@material-ui/core";
import { Gradient } from "@material-ui/icons";
import React from "react";
import GradientBtn from "../gradientButton/GradientBtn";
const MarketMovers = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom align="center">
        Hey!
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        You are trying to access a page that is only available to paying users.
        Join to see other updates!
      </Typography>
      <Typography component="" variant="h6" gutterBottom align="center">
        <GradientBtn />
      </Typography>
    </div>
  );
};

export default MarketMovers;
