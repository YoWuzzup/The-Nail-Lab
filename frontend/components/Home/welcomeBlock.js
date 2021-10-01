import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  //   first image
  handImage_container: {
    flexBasis: "49%",
    height: "90%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "right",
    margin: "0 0 20px",
  },
  //   info block
  info: {
    flexBasis: "49%",
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#fff",
  },
  info_common: {
    width: "60%",
    textAlign: "left",
    margin: "0 0 30px 10%",
  },
  welcome: {
    fontSize: "24px",
    textTransform: "uppercase",
    marginTop: "5%",
  },
  header: {
    fontSize: "76px",
    fontWeight: "400",
  },
  para: {
    fontSize: "16px",
    marginBottom: "5%",
  },
}));
