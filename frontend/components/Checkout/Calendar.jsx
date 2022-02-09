import { useDispatch, useSelector } from "react-redux";
import { AvailabilityCalendar } from "react-availability-calendar";
import moment from "moment";

// redux
import { getCheckoutService } from "../../Redux/Actions/CheckoutService";
import { getBookings } from "../../Redux/Actions/Bookings";
import { getTechnicians } from "../../Redux/Actions/Technicians";

// styles
import { useStyles, newOverrides } from "./calendar";
import { useRouter } from "next/router";

const msInHour = 60 * 60 * 1000;
const providerTimeZone = "Europe/Warsaw";

export default function Calendar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.checkoutService);
  const staff = useSelector((state) => state.technicians);
  const bookings = useSelector((state) => state.bookings);
  const now = new Date();
  const classes = useStyles();

  const handleChange = (e) => {
    // add staff name to the chosen service
    dispatch(getCheckoutService({ staff: e.target.value }));
    // fetching bookings from mongoDB
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

    // fetching bookings from mongoDB on loading
    dispatch(getBookings("All staff"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("checkout/info");
  };

  // range of working day, this one says: from 8:00am to 8:00pm are working.
  // 1t and 2d array accordinly.
  const blockOutPeriods = [
    [0 * msInHour, 8 * msInHour],
    [21 * msInHour, 24 * msInHour],
  ];

  return (
    <div className={`${classes.root}`}>
      <form className={`${classes.form}`} id="main" onSubmit={handleSubmit}>
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
          // the lable for picking date
          theme={{
            requestAppointmentLabel: "",
          }}
        />
      </div>
    </div>
  );
}
