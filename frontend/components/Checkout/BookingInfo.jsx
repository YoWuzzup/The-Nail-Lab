import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import { useStyles } from "./bookingInfo";
import { Button } from "@material-ui/core/";
import moment from "moment";

const ErrorLable = ({ message, names }) => {
  const classes = useStyles();
  return <div className={`${classes[names]}`}>{message}</div>;
};

export default function BookingInfo({ form }) {
  const router = useRouter();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const checkoutService = useSelector((state) => state.checkoutService);
  const user = useSelector((state) => state.user);
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
          <Button
            variant="outlined"
            form={`${form}`}
            className={`${classes.singleBtn}`}
            style={{ backgroundColor: "#000", color: "#fff" }}
            type="submit"
          >
            Next
          </Button>
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
