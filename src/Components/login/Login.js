import React from "react";
// import { useRouter } from "next/router";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import SnackBar from "../snackBar/SnackBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Layout from "../../components/layout/Layout";
// import userService from "../../services/UserService";
import BackdropCustom from "../backdrop/BackdropCustom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.instagram.com/arqamshakeel/">
        RidgePort
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2017/07/04/23/12/bridge-2472983_960_720.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  //   const isLoggedInRedux = useSelector((state) => state.login.isloggedin);
  // console.log("redux is loggedin: " + isLoggedInRedux);
  //   const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);
  // const router = useRouter();
  const classes = useStyles();
  const [email, setEmail] = React.useState("usman.akram@gmail.com");
  const [password, setPassword] = React.useState("YOfqBPtzFs");
  const [error, setError] = React.useState(false);
  const [snackData, setSnackData] = React.useState({
    type: null,
    message: null,
  });
  const [openSnack, setOpenSnack] = React.useState(false);
  React.useEffect(() => {
    // handleLogin();
    //for testing only
  }, []);
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

  const handleLogin = async (e) => {
    if (ValidateEmail(email)) {
      if (password.length < 4) {
        setSnackData({
          type: "error",
          message: "Password length must be greater than 4.",
        });
        setOpenSnack(true);
        return;
      }

      // e.preventDefault();
      setLoginProgress(true);
    }
  };
  // console.log(router.query.booking);
  return (
    // <Layout>
    <div>
      <Grid container component="main" justify="center">
        <CssBaseline />

        {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <SnackBar
              open={openSnack}
              setOpen={setOpenSnack}
              data={snackData}
            />
            <form className={classes.form}>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
              {error && (
                <Typography color="error" component="p" variant="body1">
                  Unable to Login
                </Typography>
              )}

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              {/* <CircularProgress color="secondary" />; */}
              <BackdropCustom open={loginProgress} setOpen={setLoginProgress} />
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item xs={6}>
                  <Link
                    variant="body2"
                    onClick={() => {
                      window.location.href = "/signup";
                      // props.history.push("/signup");
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link
                    style={{ float: "right" }}
                    variant="body2"
                    onClick={() => {
                      window.location.href = "/forgotPassword";
                      // props.history.push("/forgotpassword");
                    }}
                  >
                    {/* {"Forgot password? Recover"} */}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
    // </Layout>
  );
};
export default Login;
