import { useStyles } from "./service";
import { cottoncandy } from "../../images";
import { WithButtonStyles } from "../index";

export default function Service() {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <img
        className={`${classes.image}`}
        alt={`yes`}
        src={`${cottoncandy.src}`}
      />

      <div className={`${classes.info}`}>
        <div className={`${classes.name}`}>name</div>
        <div className={`${classes.duration}`}>duration</div>
        <div className={`${classes.cost}`}>cost</div>

        <div className={`${classes.button}`}>
          <WithButtonStyles name={"book it"} url="checkout" />
        </div>
      </div>
    </div>
  );
}
