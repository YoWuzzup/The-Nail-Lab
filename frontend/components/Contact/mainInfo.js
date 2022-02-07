import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "0% 5%",
    gridTemplateAreas: ` 
      "header header header header para para para para"
      "header header header header para para para para"`,
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
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto 0",
    },
  },
  para: {
    gridArea: "para",
    width: "90%",
    margin: "75px 0 50px",
    fontSize: "16px",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto 50px",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 50px 20px",
      width: "80%",
    },
  },
}));
