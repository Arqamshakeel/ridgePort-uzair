import {
  Box,
  Button,
  Container,
  Divider,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  tblContainer: {
    marginTop: theme.spacing(1.5),
  },
  table: {
    minWidth: 650,
  },
  tableBtn: {
    margin: theme.spacing(0.3),
    textTransform: "none",
  },
  myBtn: {
    margin: theme.spacing(0.5),
    textTransform: "none",

    "&:hover": {
      backgroundColor: "#1976d2",
      color: "#FFF",
    },
  },
  searchBox: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: "5px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  greenButton: {
    backgroundColor: green[500],
    color: "#FFF",
    "&:hover": {
      backgroundColor: green[400],
      color: "#FFF",
    },
  },
}));

const Alerts = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h3" align="center">
        Alerts
      </Typography>
      <Box component="form" className={classes.searchBox}>
        <SearchIcon />
        <InputBase
          placeholder="Search for a Company"
          className={classes.searchInput}
        />
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Recent
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Directional Whales
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Hide Expiry
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Free Alerts
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Premium Alerts
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Volume
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Alerted At
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          Expiry
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.myBtn}
          size="small"
        >
          OI
        </Button>
      </Box>
      <Divider />
      <TableContainer component={Paper} className={classes.tblContainer}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Option</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Expiry</TableCell>
              <TableCell>OI</TableCell>
              <TableCell>Volume</TableCell>
              <TableCell>Max Gain</TableCell>
              <TableCell>Max Loss</TableCell>
              <TableCell>IV</TableCell>
              <TableCell>Sector</TableCell>
              <TableCell>OG ask</TableCell>
              <TableCell>Daily $ Vol</TableCell>
              <TableCell>@</TableCell>
              <TableCell>Tier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                RKT
                <br />
                $20.50 P
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Entry
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Strats
                </Button>
              </TableCell>
              <TableCell>2021-02-26</TableCell>
              <TableCell>25</TableCell>
              <TableCell>2534</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>98.54</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$1.77</TableCell>
              <TableCell>$438,382.00</TableCell>
              <TableCell>2/2/2021, 01:44</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                RKT
                <br />
                $20.50 P
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Entry
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Strats
                </Button>
              </TableCell>
              <TableCell>2021-02-26</TableCell>
              <TableCell>25</TableCell>
              <TableCell>2534</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>98.54</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$1.77</TableCell>
              <TableCell>$438,382.00</TableCell>
              <TableCell>2/2/2021, 01:44</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                RKT
                <br />
                $20.50 P
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Entry
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Strats
                </Button>
              </TableCell>
              <TableCell>2021-02-26</TableCell>
              <TableCell>25</TableCell>
              <TableCell>2534</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>98.54</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$1.77</TableCell>
              <TableCell>$438,382.00</TableCell>
              <TableCell>2/2/2021, 01:44</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                RKT
                <br />
                $20.50 P
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Entry
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Strats
                </Button>
              </TableCell>
              <TableCell>2021-02-26</TableCell>
              <TableCell>25</TableCell>
              <TableCell>2534</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>98.54</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$1.77</TableCell>
              <TableCell>$438,382.00</TableCell>
              <TableCell>2/2/2021, 01:44</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                RKT
                <br />
                $20.50 P
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Entry
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tableBtn}
                  size="small"
                >
                  Strats
                </Button>
              </TableCell>
              <TableCell>2021-02-26</TableCell>
              <TableCell>25</TableCell>
              <TableCell>2534</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>0%</TableCell>
              <TableCell>98.54</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$1.77</TableCell>
              <TableCell>$438,382.00</TableCell>
              <TableCell>2/2/2021, 01:44</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Alerts;
