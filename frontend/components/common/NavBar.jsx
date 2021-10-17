import { useState } from "react";
import Link from "next/link";
import { AppBar, MenuList, MenuItem, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { WithButtonStyles } from "../index";
import { useStyles } from "./navBar";

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
        <MainMenuList setActiveMenu={setActiveMenu} />

        <div className={classes.buttons}>
          <a href="tel:555-555-5555" className={classes.phone}>
            CALL US: 555-555-5555
          </a>
          
          <div style={{ width: "130px", height: "35px" }}>
            <WithButtonStyles
              name={"book now"}
              url="treatments"
              classes={classes.booknow}
            />
          </div>

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
