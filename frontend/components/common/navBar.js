import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    width: "100%",
    height: "84px",
    gap: "60px",
  },
  menuList: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "35%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuListSided: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "0 0 0 10%",
  },
  buttons: {
    display: "flex",
    flexFlow: "row nowrap",
    flexBasis: "35%",
    gap: '5%',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexBasis: "45%",
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row wrap",
      justifyContent: "space-between",
      width: "90%",
    },
  },
  menuItem: {
    margin: "0 10px",
    textTransform: "uppercase",
    fontSize: "13px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "unset",
    },
  },
  menuItemSided: {
    margin: "0 10px",
    textTransform: "uppercase",
    fontSize: "13px",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  phone: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 10px 0",
      flexBasis: "70%",
    },
  },
  loginBtn: {
    "&:hover": {
      backgroundColor: "unset",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  loginBtnSide: {
    margin: "0 0 5% 10%",
  },
  login: {
    margin: "0 5px",
  },
  loginSide: {
    display: "flex",
  },
  menuBtn: {
    display: "inline-block",
    cursor: "pointer",
    width: "35px",
    height: "35px",
    flexBasis: "5%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  //
  // styles for menu button
  bars: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
  },
  bar1_animated: {
    transform: "rotate(-45deg) translate(-9px, 6px)",
    backgroundColor: "#fff",
  },
  bar2_animated: {
    opacity: 0,
  },
  bar3_animated: {
    transform: "rotate(45deg) translate(-9px, -7px)",
    backgroundColor: "#fff",
  },

  // ActiveMenu styles
  activeMenu_container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
  },
  activeMenu_main: {
    width: "80%",
    height: "100vh",
    padding: "10% 0 0",
    backgroundColor: "#fff",
    opacity: 1,
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "flex-start",
  },
  activeMenu_uselessSide: {
    width: "20%",
    height: "100vh",
    backgroundColor: "#000",
    opacity: 0.7,
  },
}));
