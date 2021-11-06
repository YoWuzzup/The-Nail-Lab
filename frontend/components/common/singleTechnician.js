import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "30%",
    margin: "0 auto",
    "& > *": {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  image: {
    width: "100%",
    minHeight: "200px",
    objectFit: "cover",
    margin: "0 auto 75px",
    imageResolution: "from-image",
  },
  info: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  name: {
    flexBasis: "100%",
    fontSize: "35px",
    textAlign: "center",
    margin: "0 0 30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  description: {
    display: "flex",
    flexFlow: "column",
    margin: "0 auto 50px",
  },
  description_item: {
    fontSize: "17px",
    margin: "0 auto 15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}));
