import { useStyles } from "./contactInfo";
import { cottoncandy } from "../../images/index";

export default function ContactInfo() {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.info}`}>
      
        <div className={`${classes.blocks} ${classes.address}`}>
          <h4 className={`${classes.headers} ${classes.address_header}`}>
            ADDRESS
          </h4>
          <div className={classes.address_street}>
            500 Terry Francois Street
          </div>
          <div className={classes.address_state}>San Francisco, CA 94158</div>
        </div>

        <div className={`${classes.blocks} ${classes.hours}`}>
          <h4 className={`${classes.headers} ${classes.hours_header}`}>
            OPENING HOURS
          </h4>
          <div className={classes.hours_days}>Mon-Thurs: 9:00am-8:00pm</div>
          <div className={classes.hours_friday}>Fri: 9:00am-8:00pm</div>
          <div className={classes.hours_sunday}>Sunday - 9:00am-3:00pm</div>
        </div>
      </div>

      <div
        className={`${classes.imageDiv}`}
        style={{
          backgroundImage: `url('${cottoncandy.src}')`,
        }}
      />
    </div>
  );
}
