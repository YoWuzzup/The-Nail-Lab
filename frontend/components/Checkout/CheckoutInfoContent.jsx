import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useStyles } from "./checkoutInfoContent";
import { BookingInfo } from "../";
import { InputBase, InputLabel } from "@material-ui/core";
import { buyerInfo } from "../../Redux/Actions/Buyer";
import axios from "axios";

export default function CheckoutInfoContent() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    dispatch(buyerInfo(formValues));
  };

  const handle = (e) => {
    console.log(formValues);
    axios.post("http://localhost:5000/users/", formValues);
  };

  return (
    <div className={`${classes.root}`}>
      <Link href={`/checkout`}>
        <div className={`${classes.backButton}`}>Back</div>
      </Link>

      <div className={`${classes.header}`}>Add Your Info</div>
      <div className={`${classes.sub_header}`}>
        Tell us a bit about yourself
      </div>

      <form id="main" className={`${classes.form_block}`} onClick={handle}>
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

        <div className={`${classes.extra}`}>* Required Info</div>
      </form>

      <BookingInfo url={"/checkout/done"} />
    </div>
  );
}
