import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90vh",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "#ffe4d4",
    backgroundImage: "none",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
  //   first image
  handImage: {
    flexBasis: "50%",
    height: "98%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "right",
    margin: "0 0 20px",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      width: "100%",
      minHeight: "200px",
      margin: "0",
      order: "2",
    },
  },
  //   info block
  info: {
    flexBasis: "50%",
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#fff",
    [theme.breakpoints.down("xl")]: {
      padding: "0 0 20px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 0 80px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 30px",
    },
  },
  info_common: {
    width: "70%",
    textAlign: "left",
    margin: "0 0 10px 5%",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto 25px",
      width: "90%",
    },
  },
  welcome: {
    fontSize: "24px",
    textTransform: "uppercase",
    marginTop: "5%",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  header: {
    fontSize: "76px",
    fontWeight: "400",
    [theme.breakpoints.down("md")]: {
      fontSize: "42px",
    },
  },
  para: {
    fontSize: "16px",
    marginBottom: "3%",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  //   marshmellow image
  marshmellowImage: {
    width: "100%",
    height: "455px",
    position: "absolute",
    bottom: 0,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "right",
    zIndex: "0",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      minHeight: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      flexBasis: "100%",
      width: "100%",
      minHeight: "200px",
      margin: "0",
      order: "1",
    },
  },
}));
