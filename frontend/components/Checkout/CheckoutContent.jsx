import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useStyles } from "./checkoutContent";
import { Calendar, BookingInfo } from "../";

export default function CheckoutContent() {
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      setUrl("checkout/done");
    } else {
      setUrl("checkout/info");
    }
  }, []);

  return (
    <div className={`${classes.root}`}>
      <Link href={`/treatments`}>
        <div className={`${classes.backButton}`}>Back</div>
      </Link>

      <div className={`${classes.header}`}>Schedule Online</div>

      <div className={`${classes.calendar_block}`}>
        <Calendar />
        <BookingInfo url={`${url}`} />
      </div>
    </div>
  );
}
