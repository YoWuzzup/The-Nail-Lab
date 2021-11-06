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

// styles
import { useStyles, newOverrides } from "./calendar";

const msInHour = 60 * 60 * 1000;
const providerTimeZone = "Europe/Warsaw";

export default function Calendar() {
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

  const onAvailabilitySelected = (a) =>
    console.log("Availability slot selected: ", a);

  const onChangedCalRange = (r) =>
    console.log("Calendar range selected (fetch bookings here): ", r);

  // range of working day, this one says: from 8:00am to 8:00pm are working. 1t and 2d array accordinly.
  const blockOutPeriods = [
    [0 * msInHour, 8 * msInHour],
    [21 * msInHour, 24 * msInHour],
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={`${classes.root}`}>
      <form className={`${classes.form}`}>
        <label htmlFor="staff" />
        <select
          id="staff"
          name="staff"
          className={`${classes.form_select}`}
          onChange={(e) => handleChange(e)}
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
