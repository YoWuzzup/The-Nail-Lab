import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "100px auto 0",
    display: "flex",
    flexFlow: "column",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  staff_block: {
    flexBasis: "100%",
    margin: '0 auto 50px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
}));
