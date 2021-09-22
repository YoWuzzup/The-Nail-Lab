import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core/";

const styles = {
  root: {
    outline: "none",
    backgroundColor: "#000",
    transition: "all .3s ease-in-out",
    fontSize: "inherit",
    margin: "0 25px",
    padding: "0",
    borderRadius: '0',
    width: "130px",
    height: "35px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      cursor: "pointer",
      color: "#000",
    },
  },
};

function WithButtonStyles({ classes, name, url }) {
  return (
    <Link href={`/${url}`} underline="none">
      <Button className={classes.root} disableRipple disableFocusRipple>
        {name}
      </Button>
    </Link>
  );
}

export default withStyles(styles)(WithButtonStyles);
