import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "0% 0%",
    gridTemplateAreas: ` 
      "header header header header para para para para"
      "header header header header para para para para"
      "header header header header address address hours hours"
      "header header header header address address hours hours"`,
    justifyContent: "stretch",
    alignContent: "stretch",
    justifyItems: "stretch",
    alignItems: "stretch",
    height: "100%",
    backgroundColor: "#fff",
    color: "#333",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      display: "flex",
      flexFlow: "column",
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      "& > *": {
        alignSelf: "flex-start",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  header: {
    gridArea: "header",
    fontSize: "76px",
    margin: "0 0 0 50px",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    transform: "translateY(-50px)",
    color: "#000",
    "&::after": {
      content: "'/'",
      position: "absolute",
      width: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 0 20px",
    },
  },
  para: {
    gridArea: "para",
    width: "90%",
    margin: "75px 0 50px",
    fontSize: "16px",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      margin: "0 0 50px 50px",
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 50px 20px",
      width: "80%",
    },
  },
  address: {
    gridArea: "address",
  },
  hours: {
    gridArea: "hours",
  },
  blocks: {
    flexBasis: "13%",
    display: "flex",
    flexFlow: "column",
    minHeight: "90px",
    "& > *": {
      fontSize: "16px",
      color: "#333",
      width: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "0 5px 0 0",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 0 50px 50px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 0 20px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 20px 20px",
    },
  },
  headers: {
    fontSize: "18px",
    textDecoration: "upper-case",
    fontWeight: "400",
    margin: "0 0 20px",
  },
  imageDiv: {
    width: "60%",
    height: "auto",
    minHeight: "400px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));
