import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchBookings } from "../../api/index";

// redux
import { getCheckoutService } from "../../Redux/Actions/CheckoutService";
import { getBookings } from "../../Redux/Actions/Bookings";
import { getTechnicians } from "../../Redux/Actions/Technicians";

// styles
import { useStyles, newOverrides } from "./calendar";

const msInHour = 60 * 60 * 1000;
const providerTimeZone = "Europe/Warsaw";

export default function Calendar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.checkoutService);
  const staff = useSelector((state) => state.technicians);
  const bookings = useSelector((state) => state.bookings);
  const now = new Date();
  const classes = useStyles();
  const [newbookings, setBookings] = useState([
    {
      startDate: new Date(2021, 11, 25, 18),
      endDate: new Date(2021, 11, 25, 20),
    },
    {
      startDate: new Date(2021, 11, 25, 13, 10),
      endDate: new Date(2021, 11, 25, 16, 30),
    },
  ]);

  const handleChange = (e) => {
    dispatch(getCheckoutService({ staff: e.target.value }));
    dispatch(getBookings(e.target.value));
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
    // fetch bookings here
    dispatch(getTechnicians());
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
          {staff.map((person, index) => {
            return (
              <option
                key={`${person.name}_${index}`}
                className={`${classes.form_option}`}
                value={`${person.name} ${person.surname}`}
              >
                {person.name} {person.surname}
              </option>
            );
          })}
        </select>
      </form>
      <div className={`${classes.calendar_container}`}>
        <AvailabilityCalendar
          bookings={newbookings}
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
