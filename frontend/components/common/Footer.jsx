import { useState } from "react";
import { useStyles } from "./footer";

export default function Footer() {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      submit();
    }
  };
  
  return (
    <div className={classes.root}>
      <div className={`${classes.address} ${classes.blocks}`}>
        <h4 className={`${classes.headers} ${classes.address_header}`}>
          ADDRESS
        </h4>
        <div className={classes.address_street}>500 Terry Francois Street</div>
        <div className={classes.address_state}>San Francisco, CA 94158</div>
      </div>

      <div className={`${classes.blocks} ${classes.contact}`}>
        <h4 className={`${classes.headers} ${classes.contact_header}`}>
          contact
        </h4>
        <a href="tel:123-456-7890">Tel: 123-456-7890</a>
        <a href="fax:123-456-7890">Fax: 123-456-7890</a>
        <a href="mailto:mymail@asd.com">Fax: mymail@asd.com</a>
      </div>

      <div className={`${classes.hours} ${classes.blocks}`}>
        <h4 className={`${classes.headers} ${classes.hours_header}`}>
          OPENING HOURS
        </h4>
        <div className={classes.hours_days}>Mon-Thurs: 9:00am-8:00pm</div>
        <div className={classes.hours_friday}>Fri: 9:00am-8:00pm</div>
        <div className={classes.hours_sunday}>Sunday - 9:00am-3:00pm</div>
      </div>

      <div className={`${classes.updated} ${classes.blocks}`}>
        <h4 className={`${classes.headers} ${classes.hours_header}`}>
          stay updated
        </h4>
        <input
          className={classes.input}
          type="email"
          placeholder="Enter your email here"
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />

        <button className={classes.button} onClick={(e) => submit(e)}>
          Subscribe
        </button>
      </div>
    </div>
  );
}
