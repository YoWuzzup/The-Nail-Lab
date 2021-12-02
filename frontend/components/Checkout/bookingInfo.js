import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: "30%",
    margin: "0 auto 0",
    width: "260px",
    minHeight: "260px",
    display: "flex",
    flexFlow: "row wrap",
    alignContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #000",
    position: "fixed",
    right: "250px",
    [theme.breakpoints.down("lg")]: {
      right: "100px",
    },
    [theme.breakpoints.down("md")]: {
      position: "static",
      margin: "0 auto 50px",
    },
  },
  name: {
    flexBasis: "80%",
    fontSize: "22px",
    margin: "25px auto 25px",
  },
  info: {
    flexBasis: "80%",
    display: "flex",
    margin: "0 auto 25px",
    padding: "0 0 25px 0",
    fontSize: "14px",
    borderBottom: "1px solid #000",
  },
  duration: {
    borderRight: "1px solid #000",
    padding: "0 15px 0 0",
  },
  cost: {
    margin: "0 0 0 15px",
  },
  chosenDate: {
    flexBasis: "80%",
    margin: "0 auto 15px",
  },
  staff: {
    flexBasis: "80%",
    margin: "0 auto 15px",
  },
  btn: {
    width: "210px",
    height: "49px",
    margin: "0 auto 20px",
  },
  singleBtn: {
    outline: "none",
    backgroundColor: "#000",
    transition: "all .3s ease-in-out",
    fontSize: "inherit",
    margin: "0 auto",
    padding: "0",
    borderRadius: "0",
    width: "100%",
    height: "100%",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
  errorLable: {
    flexBasis: "80%",
    color: "red",
    margin: "0 0 20px 0",
  },
}));
