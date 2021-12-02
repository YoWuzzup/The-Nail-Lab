import Link from "next/link";
import { useStyles } from "./checkoutContent";
import { Calendar, BookingInfo } from "../";

export default function CheckoutContent() {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <Link href={`/treatments`}>
        <div className={`${classes.backButton}`}>Back</div>
      </Link>

      <div className={`${classes.header}`}>Schedule Online</div>

      <div className={`${classes.calendar_block}`}>
        <Calendar />
        <BookingInfo url={"/checkout/info"} />
      </div>
    </div>
  );
}
