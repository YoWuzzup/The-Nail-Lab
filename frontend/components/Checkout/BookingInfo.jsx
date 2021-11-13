import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./bookingInfo";
import { Button } from "@material-ui/core/";
import moment from "moment";
import Link from "next/link";

const ErrorLable = ({ message, names }) => {
  const classes = useStyles();
  return <div className={`${classes[names]}`}>{message}</div>;
};

export default function BookingInfo() {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const checkoutService = useSelector((state) => state.checkoutService);
  const formatedDate = moment(checkoutService.startDate).format(
    "MMMM D, YYYY hh:mm a"
  );

  useEffect(() => {
    if (checkoutService && checkoutService.staff && checkoutService.startDate) {
      setError(false);
    } else {
      setError(true);
    }
  }, [checkoutService.staff, checkoutService.startDate]);

  console.log("asd");
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
        {error ? (
          <Button
            variant="outlined"
            className={`${classes.singleBtn}`}
            disabled
          >
            Next
          </Button>
        ) : (
          <Link href={`/checkout/info`} underline="none" passHref={true}>
            <Button
              variant="outlined"
              className={`${classes.singleBtn}`}
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              Next
            </Button>
          </Link>
        )}
      </div>
      {error ? (
        <ErrorLable
          message={`Choose date and time to continue`}
          names={"errorLable"}
        />
      ) : null}
    </div>
  );
}