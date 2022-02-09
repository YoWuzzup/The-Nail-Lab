import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useStyles } from "./checkoutContent";
import { Calendar, BookingInfo } from "../";

export default function CheckoutContent() {
  const router = useRouter();
  const classes = useStyles();
  const checkoutService = useSelector((state) => state.checkoutService);

  useEffect(() => {
    if (!checkoutService.name) {
      return router.push("/treatments");
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
        <BookingInfo form={`main`} />
      </div>
    </div>
  );
}
