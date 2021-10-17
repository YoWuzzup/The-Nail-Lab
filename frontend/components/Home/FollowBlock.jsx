import Link from "next/link";
import { useStyles } from "./followBlock";
import { banana, bud, icecream, lemons, stem } from "../../images";

export default function FollowBlock() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link href={`https://www.instagram.com/yowuzzupla/`}>
          <div
            className={`${classes.images} ${classes.icecream}`}
            style={{ backgroundImage: `url(${icecream.src})` }}
          >
            <div className={classes.icecream_innerFollow}>FOLLOW US ON</div>
            <div className={classes.icecream_innerHeader}>
              INSTA- <br />
              GRAM!
            </div>
          </div>
        </Link>
        <div
          className={`${classes.images} ${classes.bud}`}
          style={{ backgroundImage: `url(${bud.src})` }}
        />
        <div
          className={`${classes.images} ${classes.stem}`}
          style={{ backgroundImage: `url(${stem.src})` }}
        />
        <div
          className={`${classes.images} ${classes.lemons}`}
          style={{ backgroundImage: `url(${lemons.src})` }}
        />
        <div
          className={`${classes.images} ${classes.banana}`}
          style={{ backgroundImage: `url(${banana.src})` }}
        />
        <Link href={`https://www.instagram.com/yowuzzupla/`}>
          <div className={`${classes.images} ${classes.touch}`}>
            <div className={classes.touch_inner}>
              Get in <br /> Touch
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
