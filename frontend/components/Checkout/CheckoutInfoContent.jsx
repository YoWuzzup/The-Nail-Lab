import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { userRegistration, sendBookingData } from "../../api";
import { BookingInfo } from "../";
import { buyerInfo } from "../../Redux/Actions/Buyer";

import { InputBase, InputLabel } from "@material-ui/core";
import { useStyles } from "./checkoutInfoContent";

export default function CheckoutInfoContent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const buyer = useSelector((state) => state.buyerInfo);
  const checkoutService = useSelector((state) => state.checkoutService);
  const user = useSelector((state) => state.user);
  const bookingToSend = {
    ...checkoutService,
    user_name: user ? user.name : buyer.name,
    user_email: user ? user.email : buyer.email,
    user_phone: user ? user.phone : buyer.phone,
  };

  const classes = useStyles();
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = async (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buyer.name && buyer.email) {
      userRegistration(buyer);
      setError("");
      // send booking data
      sendBookingData(bookingToSend);

      router.push("done");
    } else {
      setError("Enter required info");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      // send booking data
      sendBookingData(bookingToSend);
      router.push("done");
    }

    dispatch(buyerInfo(formValues));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <div className={`${classes.root}`}>
      <Link href={`/checkout`} passHref={true}>
        <div className={`${classes.backButton}`}>Back</div>
      </Link>

      <div className={`${classes.header}`}>Add Your Info</div>
      <div className={`${classes.sub_header}`}>
        Tell us a bit about yourself
      </div>

      <form
        id="registrationForm"
        className={`${classes.form_block}`}
        onSubmit={handleSubmit}
      >
        <InputLabel htmlFor="name" className={classes.labels} required>
          name
        </InputLabel>
        <InputBase
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          className={`${classes.input}`}
        />

        <InputLabel htmlFor="email" className={classes.labels} required>
          email
        </InputLabel>
        <InputBase
          onChange={handleChange}
          id="email"
          type="email"
          name="email"
          className={`${classes.input}`}
        />

        <InputLabel htmlFor="phone" className={classes.labels}>
          Phone Number
        </InputLabel>
        <InputBase
          onChange={handleChange}
          id="phone"
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className={`${classes.input}`}
        />

        <InputLabel htmlFor="message" className={classes.labels}>
          Add Your Message
        </InputLabel>
        <textarea
          onChange={handleChange}
          id="message"
          type="text"
          name="message"
          className={`${classes.textarea}`}
        />

        <div
          className={`${classes.extra}`}
          style={{ color: error ? "red" : "#808080" }}
        >
          {error || "* Required Info"}
        </div>
      </form>

      <BookingInfo form={"registrationForm"} />
    </div>
  );
}
