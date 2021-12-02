import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  doneInfo: {
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
  header: {
    fontSize: "26px",
    fontWeight: "400",
    margin: "0 0 25px",
  },
  completed: {
    fontSize: "16px",
    fontWeight: "400",
    margin: "0 0 80px",
  },

  info: {
    width: "100%",
    display: "flex",
    flexFlow: " row nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: "0 0 90px",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
    },
  },
  info_date: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    flexGrow: "1",
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 30px",
    },
  },
  info_day: {
    fontSize: "48px",
    margin: "0 0 10px",
  },
  info_month: {
    fontSize: "22px",
    margin: "0 0 20px",
  },
  info_time: {
    fontSize: "16px",
  },

  info_order: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    flexGrow: "1",
  },
  info_name: {
    fontSize: "22px",
    textTransform: "capitalize",
    fontWeight: "700",
    margin: "0 0 10px",
    flexBasis: "100%",
  },
  info_staff: {
    fontSize: "16px",
    margin: "0 0 20px",
    flexBasis: "100%",
  },
  info_duration: {
    fontSize: "16px",
    padding: "0 10px 0 0",
    borderRight: "1px solid #000",
  },
  info_price: {
    fontSize: "16px",
    margin: "0 0 0 15px",
  },

  services_link: {
    fontSize: "16px",
    color: "#9BBDC2",
    textDecoration: "underline",
    margin: "0 0 60px",
  },
}));
