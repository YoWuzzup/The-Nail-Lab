import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    maxHeight: "1200px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "none",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    gap: "0% 0%",
    gridTemplateAreas: `
      ". icecream icecream bud bud ."    
      ". icecream icecream stem stem ."   
      ". icecream icecream lemons banana ."   
      ". icecream icecream touch touch ."`,
    width: "100%",
    maxHeight: "1300px",
    transform: "translateY(-165px)",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateAreas: `
      "icecream icecream bud bud"    
      "icecream icecream stem stem"   
      "icecream icecream lemons banana"   
      "icecream icecream touch touch"`,
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "20px auto 0",
      transform: "none",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      gridTemplateAreas: `
      "icecream icecream"    
      "icecream icecream"    
      "icecream icecream"    
      "bud bud"    
      "stem stem"   
      "lemons banana"   
      "touch touch"`,
      maxHeight: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      flexFlow: "column",
      margin: "20px auto 0",
    },
  },
  images: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "center",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minHeight: "170px",
    },
  },
  icecream: {
    gridArea: "icecream",
    height: "1255px",
    alignSelf: "flex-end",
    color: "#333",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      maxHeight: "none",
      height: "none",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "500px",
      minHeight: "500px",
    },
  },
  icecream_innerFollow: {
    fontSize: "24px",
    textTransform: "upper-case",
    textAlign: "center",
    margin: "150px 0 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  icecream_innerHeader: {
    fontSize: "100px",
    textTransform: "upper-case",
    fontStyle: "italic",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "59px",
    },
  },
  bud: {
    gridArea: "bud",
    height: "370px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "208px",
      minHeight: "208px",
    },
  },
  stem: {
    gridArea: "stem",
    height: "340px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "188px",
      minHeight: "188px",
    },
  },
  lemons: {
    gridArea: "lemons",
    height: "340px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "170px",
      minHeight: "170px",
    },
  },
  banana: {
    gridArea: "banana",
    height: "340px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "170px",
      minHeight: "170px",
    },
  },
  touch: {
    gridArea: "touch",
    height: "314px",
    backgroundColor: "#e8f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      maxHeight: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "170px",
      minHeight: "170px",
    },
  },
  touch_inner: {
    fontSize: "76px",
    color: "#333",
    fontStyle: "italic",
    position: "relative",
    "&::before": {
      content: '"/ "',
      top: 0,
      left: "-40px",
      position: "absolute",
    },
  },
}));
