import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  treatment: {
    height: "475px",
    flexBasis: "30%",
    backgroundColor: "#fff",
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-end",
  },
  treatment_header: {
    color: "#333",
    fontSize: "76px",
    fontStyle: "italic",
    transform: "translateY(-20%)",
    width: "80%",
    margin: "0 auto",
    whiteSpace: "pre-wrap"
  },
  treatment_image: {
    width: "100%",
    height: "210px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignSelf: "flex-end",
  },
}));

export default function Treatment({ item, length }) {
  const classes = useStyles();
  const itemName = item.i.replace(' ', "\n");

  return (
    <div className={classes.treatment}>
      <header className={classes.treatment_header} >
        {length < 10 ? `0${length}` : length} / <br/>
        {itemName}
      </header>
      <div
        className={classes.treatment_image}
        style={{ backgroundImage: `url(${item.img})` }}
      />
    </div>
  );
}
