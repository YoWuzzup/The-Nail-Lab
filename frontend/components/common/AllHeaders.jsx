import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "75px 0 0",
  },
  inner: {
    whiteSpace: "pre-wrap",
    fontSize: "92px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "65px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
    "&::before": {
      content: "'/'",
      position: "absolute",
      transform: "translateX(-60px)",
      width: "100px",
    },
  },
}));

export default function AllHeaders({ header }) {
  const replaced = header.replace(/ /g, "\n");
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <div className={`italic ${classes.inner}`}>{replaced}</div>
    </div>
  );
}
