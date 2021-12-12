import { useState } from "react";
import {
  AvailabilityCalendar,
  AvailabilityEvent,
  MsSinceMidnightRange,
  Booking,
  Range,
  CalendarThemeProp,
  Overrides,
} from "react-availability-calendar";
import moment from "moment";
import { getCheckoutService } from "../../Redux/Actions/CheckoutService";
import { useDispatch, useSelector } from "react-redux";

// styles
import { useStyles, newOverrides } from "./calendar";

const msInHour = 60 * 60 * 1000;
const providerTimeZone = "Europe/Warsaw";

export default function Calendar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.checkoutService);
  const now = new Date();
  const classes = useStyles();
  const [bookings, setBookings] = useState([
    {
      startDate: new Date(2021, 10, 9, 18),
      endDate: new Date(2021, 10, 10, 20),
    },
    {
      startDate: new Date(2021, 11, 1, 16, 30),
      endDate: new Date(2021, 11, 1, 17),
    },
  ]);

  const handleChange = (e) => {
    dispatch(getCheckoutService({ staff: e.target.value }));
  };

  // on clicking on the available time
  const onAvailabilitySelected = (a) => {
    let newEndDate = moment(a.startDate).add(data?.duration, "m").toDate();
    dispatch(
      getCheckoutService({ startDate: a.startDate, endDate: newEndDate })
    );
  };

  // fetching on loading the component
  const onChangedCalRange = (r) => {
    // console.log("Calendar range selected (fetch bookings here): ", r);
  };

  // range of working day, this one says: from 8:00am to 8:00pm are working. 1t and 2d array accordinly.
  const blockOutPeriods = [
    [0 * msInHour, 8 * msInHour],
    [21 * msInHour, 24 * msInHour],
  ];

  return (
    <div className={`${classes.root}`}>
      <form className={`${classes.form}`} id="main">
        <label htmlFor="staff" />
        <select
          id="staff"
          name="staff"
          className={`${classes.form_select}`}
          onChange={handleChange}
        >
          <option className={`${classes.form_option}`} value="All staff">
            All staff
          </option>
          <option className={`${classes.form_option}`} value="Nataly">
            Nataly
          </option>
          <option className={`${classes.form_option}`} value="Sonya">
            Sonya
          </option>
          <option className={`${classes.form_option}`} value="Lilya">
            Lilya
          </option>
        </select>
      </form>
      <div className={`${classes.calendar_container}`}>
        <AvailabilityCalendar
          bookings={bookings}
          providerTimeZone={providerTimeZone}
          moment={moment}
          initialDate={now}
          onAvailabilitySelected={onAvailabilitySelected}
          onCalRangeChange={onChangedCalRange}
          blockOutPeriods={blockOutPeriods}
          // range of minutes in schedule
          slotStepMs={1800000}
          overrides={newOverrides}
        />
      </div>
    </div>
  );
}
