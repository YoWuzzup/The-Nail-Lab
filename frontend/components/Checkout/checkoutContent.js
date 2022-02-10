import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "0 auto 0",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  backButton: {
    fontSize: "16px",
    color: "#aac2c5",
    position: "relative",
    margin: "0 0 75px 20px",
    cursor: "pointer",
    alignSelf: "flex-start",
    "&::before": {
      content: '""',
      width: "10px",
      height: "10px",
      position: "absolute",
      borderBottom: "3px solid #aac2c5",
      borderLeft: "3px solid #aac2c5",
      transform: "rotate(45deg) translateX(-15px) translateY(15px)",
      top: "0",
      left: "0",
    },
  },
  header: {
    fontSize: "26px",
    flexBasis: "100%",
    textAlign: "left",
    alignSelf: "flex-start",
    margin: "0 0 75px 0",
  },
  calendar_block: {
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    gap: "5%",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
}));
