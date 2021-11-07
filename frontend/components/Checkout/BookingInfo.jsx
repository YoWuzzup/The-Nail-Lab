import { useSelector } from "react-redux";
import { useStyles } from "./bookingInfo";
import { WithButtonStyles } from "..";
import moment from "moment";

export default function BookingInfo() {
  const classes = useStyles();
  const checkoutService = useSelector((state) => state.checkoutService);
  const formatedDate = moment(checkoutService.startDate).format(
    "MMMM D, YYYY hh:mm a"
  );

  const onClick = (e) => {
    // HERE
    console.log('done');
    if (!checkoutService) return;
  };

  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.name}`}>{checkoutService.name}</div>
      <div className={`${classes.info}`}>
        <div className={`${classes.duration}`}>
          {checkoutService.duration} min
        </div>
        <div className={`${classes.cost}`}>${checkoutService.cost}</div>
      </div>
      <div className={`${classes.chosenDate}`}>
        {checkoutService.startDate ? formatedDate : ""}
      </div>
      <div className={`${classes.staff}`}>{checkoutService.staff}</div>
      <div className={`${classes.btn}`} >
        <WithButtonStyles name={"Next"} url={"checkout/info"} onClick={onClick}/>
      </div>
    </div>
  );
}
