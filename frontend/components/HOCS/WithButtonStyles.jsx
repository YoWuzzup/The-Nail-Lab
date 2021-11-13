import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import Link from "next/link";

const styles = {
  root: {
    outline: "none",
    backgroundColor: "#000",
    transition: "all .3s ease-in-out",
    fontSize: "inherit",
    margin: "0 auto",
    padding: "0",
    borderRadius: "0",
    width: "100%",
    height: "100%",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      cursor: "pointer",
      color: "#000",
    },
  },
};

function WithButtonStyles({ type, classes, name, url }) {
  return (
    <Link href={`/${url}`} underline="none" passHref={true}>
      <Button className={classes.root} disableRipple disableFocusRipple>
        {name}
      </Button>
    </Link>
  );
}

export default withStyles(styles)(WithButtonStyles);
