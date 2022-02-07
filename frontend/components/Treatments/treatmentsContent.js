import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "100px auto 0",
    display: "flex",
    flexFlow: "column",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  sorting: {
    width: "100%",
    margin: "0 0 60px",
    display: "flex",
    flexFlow: "row nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row wrap",
    },
  },
  sorting_button: {
    padding: "10px",
    fontSize: "16px",
    textTransform: "uppercase",
    flexBasis: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #c4b4ac",
    cursor: "pointer",
    transition: "all .4s ease-in-out",
    [theme.breakpoints.down("lg")]: {
      flexBasis: "20%",
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "50%",
    },
  },
  sorting_button_active: {
    borderBottom: "3px solid #a48c74",
  },
  service_block: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignContent: "center",
    gap: "2%",
    margin: "0 auto 120px",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      margin: "0 auto 30px",
    },
  },
}));
