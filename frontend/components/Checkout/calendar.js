import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: "70%",
    position: "relative",
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
    alignItems: "stretch",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  form: {
    all: "unset",
    position: "absolute",
    top: "36px",
    left: 0,
    width: "40%",
    height: "25px",
    fontSize: "16px",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      top: "-30px",
      width: "100%",
    },
  },
  form_select: {
    width: "100%",
    height: "100%",
    fontSize: "inherit",
    outline: "none",
    position: "relative",
  },
  form_option: {
    width: "100%",
    height: "100%",
    fontSize: "inherit",
  },

  //   calendar container
  calendar_container: {
    width: "100%",
    padding: "0 0 75px 0",
  },
}));

export const newOverrides = {
  ToolBar: {
    className: "",
    style: {
      width: "100%",
      display: "flex",
      flexFlow: "row-reverse",
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "2%",
      margin: "25px 0 50px",
    },
  },
  ToolBarButton: {
    style: {
      all: "unset",
      outline: "none",
      backgroundColor: "#fff",
      border: "1px solid #000",
      fontSize: "16px",
      padding: "2px 5px",
      cursor: "pointer",
    },
  },
  Weekday: {
    style: {
      fontWeight: "700",
      flexBasis: "50%",
    },
  },
  Availabilities: {
    style: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
    },
    className: "availabilitiesBlock",
  },
  AvailSlot: {
    style: {
      minWidth: "100px",
      backgroundColor: "unset",
      cursor: "pointer",
      fontSize: "16px",
    },
    className: "availSlot",
  },
  DayCell: {
    style: (p) =>
      p.isSelected
        ? {
            color: "#9cbcc4",
            boxShadow: "inset 0 0 10px #9cbcc4",
            width: 88,
            height: 60,
            flexBasis: "50%",
          }
        : {
            border: "1px solid #000",
            width: 88,
            height: 60,
            flexBasis: "50%",
          },
  },
};
