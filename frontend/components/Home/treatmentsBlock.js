import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "700px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "50px",
    },
  },
  header: {
    margin: "115px auto 115px",
    fontWeight: "normal",
    color: "#333",
    fontSize: "24px",
  },
  allTreatments: {
    width: "70%",
    display: "flex",
    gap: "5%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexFlow: "row nowrap",
    margin: "0 0 80px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      margin: "0",
    },
  },
}));
