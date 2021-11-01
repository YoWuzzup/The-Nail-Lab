import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
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
  backButton: {
    fontSize: "16px",
    color: "#aac2c5",
    position: "relative",
    margin: "0 0 75px 20px",
    cursor: "pointer",
    alignSelf: "flex-start",
    "&::before": {
      content: '""',
      width: "10px",
      height: "10px",
      position: "absolute",
      borderBottom: "3px solid #aac2c5",
      borderLeft: "3px solid #aac2c5",
      transform: "rotate(45deg) translateX(-15px) translateY(15px)",
      top: "0",
      left: "0",
    },
  },
  //   first info block
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
  duration: {
    flexBasis: "45%",
    textAlign: "right",
    fontSize: "21px",
    padding: "0 20px 0",
    margin: "0 0 30px",
    borderRight: "2px solid #000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      padding: "0 5px 0",
    },
  },
  cost: {
    flexBasis: "45%",
    padding: "0 20px 0",
    margin: "0 0 30px",
    fontSize: "21px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      padding: "0 5px 0",
    },
  },
  button: {
    width: "115px",
    height: "42px",
    margin: "0 0 50px",
  },
  //   image
  image: {
    width: "100%",
    objectFit: "cover",
    margin: "0 auto 75px",
    imageResolution: "from-image",
  },
  //   second info block
  secondInfoBlock: {
    display: "flex",
    flexFlow: "row wrap",
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
  restInfo: {
    flexBasis: "100%",
    display: "flex",
    flexFlow: "row wrap",
  },
  online: {
    fontSize: "18px",
    fontWeight: "600",
    flexBasis: "100%",
    margin: "0 auto 25px",
  },
  secondName: {
    flexBasis: "100%",
    fontSize: "17px",
    margin: "0 auto 10px",
  },
  secondDuration: {
    flexBasis: "13%",
    fontSize: "17px",
    margin: "0 0 30px",
    borderRight: "2px solid #000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      flexBasis: "auto",
      padding: "0 10px 0 0",
    },
  },
  secondCost: {
    flexBasis: "auto",
    margin: "0 0 30px",
    padding: "0 0 0 10px",
    fontSize: "17px",
  },
  secondButton: {
    flexBasis: "20%",
    height: "40px",
    margin: "0 0 30px",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "50%",
    },
  },
  // location & details
  details: {
    flexBasis: "100%",
    borderTop: "1px solid grey",
    padding: "75px 0 0",
    margin: "0 auto 75px",
    textAlign: "left",
  },
  location: {
    fontSize: "24px",
    margin: "0 0 50px",
  },
  email: {
    fontSize: "17px",
  },
}));
