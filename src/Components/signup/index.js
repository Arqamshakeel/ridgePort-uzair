import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Layout from "../../components/layout/Layout";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import productService from "../../services/ProductServices";
import userService from "../../services/UserService";
import SnackBar from "../../components/snackBar/SnackBar";
// import SnackBar from "../snackBar/SnackBar";
// import CustomBackdrop from "../backdrop/CustomBackdrop";
// import CheckLogIn from "../../auth/CheckLogIn";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        AltCabs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function index(props) {
  const classes = useStyles();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);
  const [snackData, setSnackData] = React.useState({
    type: null,
    message: null,
  });
  const [openSnack, setOpenSnack] = React.useState(false);

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    // alert("You have entered an invalid email address!");
    return false;
  }

  const handleLogin = () => {
    if (ValidateEmail(email)) {
      if (fname.length < 4) {
        setSnackData({
          type: "error",
          message: "Name length must be greater than 4.",
        });
        setOpenSnack(true);
        // console.log("name");
        return;
      } else if (password.length < 4) {
        setSnackData({
          type: "error",
          message: "Password length must be greater than 4.",
        });
        setOpenSnack(true);
        return;
      }
      setLoginProgress(true);
      userService
        .UserReg({
          email: email,
          password: password,
          fname: fname,
          lname: lname,
        })
        .then(function (res) {
          setLoginProgress(false);
          // props.history.push("/signin");
          setSnackData({
            type: "success",
            message: "Congratulations, Account created",
          });
          setOpenSnack(true);

          console.log("User Created");
          window.location.href = "/login";
        })
        .catch(function (error) {
          setLoginProgress(false);
          // setOpen(true);
          // setmsg(error.response.data);
          setSnackData({
            type: "error",
            message: error.response.data,
          });
          setOpenSnack(true);
        });
    } else {
      setSnackData({
        type: "error",
        message: "Invalid email",
      });
      setOpenSnack(true);
    }
  };

  return (
    <Layout>
      <div style={{ marginTop: "100px" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <SnackBar
              open={openSnack}
              setOpen={setOpenSnack}
              data={snackData}
            />
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              {/* <SnackBar open={open} setOpen={setOpen} msg={msg} /> */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    label="First Name"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  {/* <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    autoComplete="lname"
                  /> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Sign Up
              </Button>
              {/* <CustomBackdrop open={loginProgress} setOpen={setLoginProgress} /> */}
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    onClick={() => {
                      window.location.href = "/login";
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </Layout>
  );
}
