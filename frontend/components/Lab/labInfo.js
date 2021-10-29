import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "0 auto",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    color: "#333",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  para: {
    flexBasis: "50%",
    color: "inherit",
    fontSize: "16px",
    lineHeight: "1.5rem",
    padding: "0 3rem 0 0",
    margin: "0 0 50px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
      padding: "0",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
      flexBasis: "80%",
    },
  },

  //   images
  images: {
    width: "60%",
    height: "100%",
    minHeight: "733px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "0",
    gridTemplateAreas: `'hands mamell'
    'hands apple'`,
    justifyContent: "stretch",
    alignContent: "stretch",
    justifyitems: "stretch",
    alignItems: "stretch",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      display: "flex",
      flexFlow: "column",
      padding: "0 0 50px",
    },
  },
  image: {
    background: "no-repeat center center",
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      minHeight: "210px",
    },
  },
  hands: {
    gridArea: "hands",
    [theme.breakpoints.down("xs")]: {
      minHeight: "415px",
      order: "3",
    },
  },
  mamell: {
    gridArea: "mamell",
    [theme.breakpoints.down("xs")]: {
      order: "1",
    },
  },
  apple: {
    gridArea: "apple",
    [theme.breakpoints.down("xs")]: {
      order: "2",
    },
  },
}));
