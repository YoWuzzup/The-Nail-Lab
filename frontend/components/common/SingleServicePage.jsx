import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { getSingleService } from "../../Redux/Actions/Service";
import { getCheckoutService } from "../../Redux/Actions/CheckoutService";
import { useStyles } from "./singleServicePage";
import { WithButtonStyles } from "..";

export default function SingleServicePage({ name }) {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.singleService);
  const classes = useStyles();

  const handleClick = (e) => {
    dispatch(
      getCheckoutService({
        name: service[0]?.name,
        cost: service[0]?.cost,
        duration: service[0]?.duration,
      })
    );
  };

  useEffect(() => {
    dispatch(getSingleService(name));
  }, [name]);

  return (
    <div className={`${classes.root}`}>
      <Link href={`/treatments`}>
        <div className={`${classes.backButton}`}>Back</div>
      </Link>

      <div className={`${classes.info}`}>
        <div className={`${classes.name}`}>{service[0]?.name}</div>

        <div className={`${classes.duration}`}>{service[0]?.duration} min.</div>
        <div className={`${classes.cost}`}>$ {service[0]?.cost}</div>

        <div className={`${classes.button}`} onClick={handleClick}>
          <WithButtonStyles name={"book now"} url="checkout" />
        </div>
      </div>

      <img
        className={`${classes.image}`}
        alt={`${service[0]?.name}`}
        src={`${service[0]?.image}`}
      />

      <div className={`${classes.secondInfoBlock}`}>
        <div className={`${classes.description}`}>
          {service[0]?.description?.map((item, index) => {
            return (
              <div
                key={`${item.n}_${index}`}
                className={`${classes.description_item}`}
              >
                {item.n}
              </div>
            );
          })}
        </div>

        <div className={`${classes.restInfo}`}>
          <div className={`${classes.online}`}>Book Online</div>
          <div className={`${classes.secondName}`}>{service[0]?.name}</div>
          <div className={`${classes.secondDuration}`}>
            {service[0]?.duration} min
          </div>
          <div className={`${classes.secondCost}`}>$ {service[0]?.cost}</div>
        </div>

        <div className={`${classes.secondButton}`} onClick={handleClick}>
          <WithButtonStyles name={"book now"} url="checkout" />
        </div>

        <div className={`${classes.details}`}>
          <div className={`${classes.location}`}>
            Location & Contact Details
          </div>
          <div className={`${classes.email}`}>info@mysite.com</div>
        </div>
      </div>
    </div>
  );
}
