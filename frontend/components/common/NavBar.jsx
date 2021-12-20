import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, MenuList, MenuItem, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { WithButtonStyles } from "../index";
import { useStyles } from "./navBar";
import { useDispatch, useSelector } from "react-redux";
import { changeNavButton } from "../../Redux/Actions/Buttons";

const btns = [
  { name: "home", url: "" },
  { name: "treatments", url: "treatments" },
  { name: "technicians", url: "technicians" },
  { name: "the lab", url: "lab" },
  { name: "contact us", url: "contact" },
];

function MainMenuList({ activeMenu, setActiveMenu, navigationButton }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();

  const handleCloseMenu = (e, name) => {
    let newName =
      e.target.textContent.split(" ").join("") === name.split(" ").join("")
        ? name.split(" ").join("")
        : "home";
    setActiveMenu(false);
    dispatch(changeNavButton(newName));
  };

  return (
    <MenuList className={activeMenu ? classes.menuListSided : classes.menuList}>
      {btns &&
        btns.map((item, index) => {
          let newUrl = router.pathname.slice(1);

          return (
            <Link href={`/${item.url}`} key={`${item.name}_${index}`}>
              <MenuItem
                disableGutters={true}
                className={`${
                  activeMenu ? classes.menuItemSided : classes.menuItem
                } ${
                  item.name.includes(newUrl) && newUrl !== ""
                    ? classes.activeMenuItem
                    : ""
                } fs13px`}
                onClick={(e) => handleCloseMenu(e, item.name)}
                name={item.name}
                disableRipple
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
      style={{ zIndex: activeMenu ? 51 : 1 }}
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
  const navigationButton = useSelector((state) => state.navigationButton);

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
        <div className={classes.root_inner}>
          <MainMenuList
            setActiveMenu={setActiveMenu}
            navigationButton={navigationButton}
          />

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
        </div>
      </AppBar>
    </>
  );
}
