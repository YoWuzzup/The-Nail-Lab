import Link from "next/link";
import { useSelector } from "react-redux";
import moment from "moment";
import { useStyles } from "./doneInfo";

export default function DoneInfo() {
  const classes = useStyles();
  const info = useSelector((state) => state.checkoutService);
  const day = moment(info).format("D");
  const month = moment(info).format("MMMM");
  const time = moment(info).format("ddd hh:mm a");

  return (
    <div className={`${classes.doneInfo}`}>
      <h3 className={`${classes.header}`}>GREAT, YOU'RE BOOKED!</h3>
      <div className={`${classes.completed}`}>
        A confirmation email is on its way to you.
      </div>

      <div className={`${classes.info}`}>
        <div className={`${classes.info_date}`}>
          <div className={`${classes.info_day}`}>{day}</div>
          <div className={`${classes.info_month}`}>{month}</div>
          <div className={`${classes.info_time}`}>{time}</div>
        </div>

        <div className={`${classes.info_order}`}>
          <div className={`${classes.info_name}`}>{info.name}</div>
          <div className={`${classes.info_staff}`}>{info.staff}</div>
          <div className={`${classes.info_duration}`}>{info.duration} min</div>
          <div className={`${classes.info_price}`}>${info.cost}</div>
        </div>
      </div>

      <Link href={"/treatments"}>
        <div className={`${classes.services_link}`}>
          Check out more services
        </div>
      </Link>
    </div>
  );
}
