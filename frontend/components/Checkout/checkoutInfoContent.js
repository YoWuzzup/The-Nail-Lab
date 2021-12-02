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
    margin: "0 0 20px 0",
  },
  sub_header: {
    fontSize: "16px",
    flexBasis: "100%",
    textAlign: "left",
    alignSelf: "flex-start",
    margin: "0 0 60px 0",
  },
  form_block: {
    width: "80%",
    display: "flex",
    flexFlow: "column nowrap",
    gap: "5%",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      alignSelf: "center",
      width: "100%",
    },
  },
  labels: {
    fontSize: "16px",
    textTransform: "capitalize",
    color: "#000",
    margin: "0 0 20px 0",
  },
  textarea: {
    all: "unset",
    width: "100%",
    minHeight: "75px",
    backgroundColor: "#fff4ec",
    border: "none",
    margin: "0 auto 32px",
    padding: "10px 0 10px 5px",
    "&:focus-within": {
      border: "2px solid #48a0ec",
    },
  },
  input: {
    width: "100%",
    height: "36px",
    backgroundColor: "#fff4ec",
    border: "none",
    margin: "0 auto 22px",
    padding: "10px 10px 10px 15px",
    "&:focus-within": {
      border: "2px solid #48a0ec",
    },
  },
  extra: {
    color: "grey",
    margin: "0 0 70px",
    fontSize: "16px",
  },
}));
