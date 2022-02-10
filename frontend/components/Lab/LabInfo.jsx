import { useStyles } from "./labInfo";
import { hands, apple, mamell } from "../../images";

export default function LabInfo() {
  const classes = useStyles();
  return (
    <>
      <div className={`${classes.root}`}>
        <div className={`${classes.para}`}>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Tell your visitors the story of how you came up with the
          idea for your business and what makes you different from your
          competitors.
        </div>
      </div>

      <div className={`${classes.images}`}>
        <div
          className={`${classes.image} ${classes.hands}`}
          style={{ backgroundImage: `url(${hands.src})` }}
        />

        <div
          className={`${classes.image} ${classes.mamell}`}
          style={{ backgroundImage: `url(${mamell.src})` }}
        />

        <div
          className={`${classes.image} ${classes.apple}`}
          style={{ backgroundImage: `url(${apple.src})` }}
        />
      </div>
    </>
  );
}
