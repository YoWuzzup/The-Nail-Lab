import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexBasis: "30%",
    minWidth: "230px",
    margin: "0 0 30px",
  },
  image: {
    objectFit: "cover",
    maxWidth: "100%",
    height: "auto",
    minHeight: "200px",
    display: "block",
    margin: "0 auto 50px",
    cursor: 'pointer',
    position: 'relative',
  },
  info: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  name: {
    fontSize: "22px",
    fontWeight: "400",
    textTransform: "capitalize",
    transition: "all linear .3s",
    margin: "0 auto 25px",
    cursor: 'pointer',
    "&:hover": {
      opacity: ".5",
    },
  },
  duration: {
    margin: "0 auto 25px",
    fontSize: '16px'
  },
  cost: {
    margin: "0 auto 25px",
    fontSize: '16px'
  },
  button: {
    width: "130px",
    height: "38px",
    margin: "0 0 25px",
  },
}));
