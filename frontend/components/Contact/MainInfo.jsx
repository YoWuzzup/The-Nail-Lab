import { useStyles } from "./mainInfo";
import { cottoncandy } from "../../images/index";

export default function MainInfo({ header }) {
  const classes = useStyles();
  const replaced = header.replace(" ", "\n");

  return (
    <>
      <div className={`wrapper ${classes.root}`}>
        <h2 className={`${classes.header} italic`}>{replaced} </h2>

        <p className={`${classes.para}`}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>

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
    </>
  );
}
