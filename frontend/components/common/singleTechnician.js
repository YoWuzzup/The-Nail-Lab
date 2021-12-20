import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "30%",
    margin: "0 auto",
    backgroundColor: "#fff",
    "& > *": {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginBottom: "30px",
    },
  },
  image: {
    width: "80%",
    minHeight: "228px",
    objectFit: "cover",
    margin: "32px auto 24px",
    imageResolution: "from-image",
  },
  info: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    flexBasis: "100%",
    fontSize: "24px",
    textAlign: "center",
    margin: "0 0 30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  description: {
    display: "flex",
    flexFlow: "column",
    margin: "0 auto 0",
  },
  description_item: {
    fontSize: "14px",
    margin: "0 auto 15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  button: {
    width: "100%",
    height: "40px",
    margin: "0 auto 33px",
  },
}));
