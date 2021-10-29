import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "0 auto",
    backgroundColor: "#fff",
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  info: {
    display: "flex",
    alignItems: "flex-start",
    alignContent: "center",
    justifyContent: "flex-end",
    flexFlow: "row nowrap",
    flexBasis: "50%",
    margin: "0 0 100px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "55%",
    },
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
      flexBasis: "90%",
    },
  },
  blocks: {
    flexBasis: "25%",
    display: "flex",
    flexFlow: "column",
    minHeight: "90px",
    color: '#333',
    "& > *": {
      fontSize: "16px",
      color: "inherit",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 0 0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 0 20px",
    },
  },
  headers: {
    fontSize: "18px",
    textDecoration: "upper-case",
    fontWeight: "400",
    margin: "0 0 20px",
  },
  imageDiv: {
    width: "100%",
    height: "auto",
    minHeight: "400px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      minHeight: "210px",
    },
  },
}));

// [theme.breakpoints.down("lg")]: {},
// [theme.breakpoints.down("md")]: {},
// [theme.breakpoints.down("xs")]: {},
// [theme.breakpoints.down("sm")]: {},
