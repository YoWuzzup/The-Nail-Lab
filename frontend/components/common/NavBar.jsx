import { useState } from "react";
import Link from "next/link";
import { AppBar, MenuList, MenuItem, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { WithButtonStyles } from "../index";

const useStyles = makeStyles((theme) => ({
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
      margin: "0 0 10px 25px",
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
    // webkitTra: "rotate(-45deg) translate(-9px, 6px)",
    transform: "rotate(-45deg) translate(-9px, 6px)",
    backgroundColor: "#fff",
  },
  bar2_animated: {
    opacity: 0,
  },
  bar3_animated: {
    // -webkit-transform: rotate(45deg) translate(-8px, -8px);
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

const btns = [
  { name: "home", url: "" },
  { name: "treatments", url: "treatments" },
  { name: "technicians", url: "technicians" },
  { name: "the lab", url: "lab" },
  { name: "contact us", url: "contact" },
];

function MainMenuList({ activeMenu, setActiveMenu }) {
  const classes = useStyles();

  const handleCloseMenu = (e) => {
    setActiveMenu(false);
  };

  return (
    <MenuList className={activeMenu ? classes.menuListSided : classes.menuList}>
      {btns &&
        btns.map((item, index) => {
          return (
            <Link href={`/${item.url}`} key={`${item.name}_${index}`}>
              <MenuItem
                disableGutters={true}
                className={`${
                  activeMenu ? classes.menuItemSided : classes.menuItem
                } fs13px`}
                onClick={handleCloseMenu}
              >
                {item.name}
              </MenuItem>
            </Link>
          );
        })}
    </MenuList>
  );
}

function ToggleMenuButton({ activeMenu, handleMenuClick }) {
  const classes = useStyles();

  return (
    <div
      className={classes.menuBtn}
      onClick={handleMenuClick}
      style={{ zIndex: activeMenu ? 10 : 1 }}
    >
      <div
        className={`${classes.bars} ${activeMenu ? classes.bar1_animated : ""}`}
      ></div>
      <div
        className={`${classes.bars} ${activeMenu ? classes.bar2_animated : ""}`}
      ></div>
      <div
        className={`${classes.bars} ${activeMenu ? classes.bar3_animated : ""}`}
      ></div>
    </div>
  );
}

function ActiveMenu({ activeMenu, setActiveMenu }) {
  const classes = useStyles();

  return (
    <div className={classes.activeMenu_container}>
      <div className={classes.activeMenu_main}>
        <LogInButton activeMenu={activeMenu} />
        <MainMenuList activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className={classes.activeMenu_uselessSide} />
    </div>
  );
}

function LogInButton({ activeMenu }) {
  const classes = useStyles();

  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      disableRipple
      size="medium"
      className={activeMenu ? classes.loginBtnSide : classes.loginBtn}
    >
      <AccountCircle fontSize="large" />
      <div className={activeMenu ? classes.loginSide : classes.login}>
        Log In
      </div>
    </IconButton>
  );
}

export default function NavBar() {
  const classes = useStyles();
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <AppBar
        className={classes.root}
        elevation={0}
        color="primary"
        position="static"
      >
        <MainMenuList />

        <div className={classes.buttons}>
          <a href="tel:555-555-5555" className={classes.phone}>
            CALL US: 555-555-5555
          </a>

          <WithButtonStyles
            name={"book now"}
            url="treatments"
            classes={classes.booknow}
          />

          <ToggleMenuButton
            activeMenu={activeMenu}
            handleMenuClick={handleMenuClick}
          />

          {!activeMenu && <LogInButton activeMenu={activeMenu} />}
        </div>

        {activeMenu && (
          <ActiveMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}
      </AppBar>
    </>
  );
}
