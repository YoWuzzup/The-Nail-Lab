import { useStyles } from "./bookingInfo";
import { WithButtonStyles } from "..";

export default function BookingInfo() {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.name}`}>Classic Manicure</div>
      <div className={`${classes.info}`}>
        <div className={`${classes.duration}`}>20 min</div>
        <div className={`${classes.cost}`}>$30</div>
      </div>
      <div className={`${classes.chosenDate}`}>November 12, 2021 5:00 pm</div>
      <div className={`${classes.btn}`}>
        <WithButtonStyles name={"Next"} url={"#"} />
      </div>
    </div>
  );
}
