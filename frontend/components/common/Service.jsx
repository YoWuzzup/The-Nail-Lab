import { useStyles } from "./service";
import Link from "next/link";
import { WithButtonStyles } from "../index";
import { getCheckoutService } from "../../Redux/Actions/CheckoutService";
import { useDispatch } from "react-redux";

export default function Service({ data }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const url = data.name;

  const handleClick = (e) => {
    dispatch(
      getCheckoutService({
        name: data.name,
        cost: data.cost,
        duration: data.duration,
      })
    );
  };

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

        <div className={`${classes.button}`} onClick={handleClick}>
          <WithButtonStyles name={"book it"} url="checkout" />
        </div>
      </div>
    </div>
  );
}
