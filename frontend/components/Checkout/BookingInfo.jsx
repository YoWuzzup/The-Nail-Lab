import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./bookingInfo";
import { Button } from "@material-ui/core/";
import moment from "moment";
import Link from "next/link";
import { postUser } from "../../api";

const ErrorLable = ({ message, names }) => {
  const classes = useStyles();
  return <div className={`${classes[names]}`}>{message}</div>;
};

export default function BookingInfo({ url }) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const checkoutService = useSelector((state) => state.checkoutService);
  const buyerInfo = useSelector((state) => state.buyerInfo);
  const formatedDate = moment(checkoutService.startDate).format(
    "MMMM D, YYYY hh:mm a"
  );

  const handleClick = (e) => {
    if (buyerInfo.name || buyerInfo.email) {
      postUser(buyerInfo);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (checkoutService && checkoutService.staff && checkoutService.startDate) {
      setError(false);
    } else {
      setError(true);
    }
  }, [checkoutService.staff, checkoutService.startDate]);

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
      <div className={`${classes.btn}`}>
        {!error ? (
          <Link href={`${url}`} underline="none" passHref={true}>
            <Button
              onClick={handleClick}
              variant="outlined"
              className={`${classes.singleBtn}`}
              style={{ backgroundColor: "#000", color: "#fff" }}
              type="submit"
            >
              Next
            </Button>
          </Link>
        ) : null}
      </div>

      {error ? (
        <div className={`${classes.errors}`}>
          {!checkoutService.startDate ? (
            <ErrorLable
              message={`Choose date and time to continue`}
              names={"errorLable"}
            />
          ) : null}

          {!checkoutService.staff ? (
            <ErrorLable message={`Choose the master`} names={"errorLable"} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
