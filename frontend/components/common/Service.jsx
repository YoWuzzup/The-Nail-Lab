import { useStyles } from "./service";
import Link from "next/link";
import { WithButtonStyles } from "../index";

export default function Service({ data }) {
  const classes = useStyles();
  const url = data.name;
  // data.name.includes(" ")
  // ? data.name.split(" ").join("")
  // : 
  return (
    <div className={`${classes.root}`}>
      <Link href={`/treatments/${url}`}>
        <img
          className={`${classes.image}`}
          alt={`${data.name}`}
          src={`${data.image}`}
        />
      </Link>

      <div className={`${classes.info}`}>
        <Link href={`/treatments/${url}`}>
          <div className={`${classes.name}`}>{data.name}</div>
        </Link>

        <div className={`${classes.duration}`}>{data.duration} min</div>
        <div className={`${classes.cost}`}>${data.cost}</div>

        <div className={`${classes.button}`}>
          <WithButtonStyles name={"book it"} url="checkout" />
        </div>
      </div>
    </div>
  );
}
