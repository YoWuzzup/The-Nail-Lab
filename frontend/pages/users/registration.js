/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { InputBase, InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core/";

import { buyerInfo } from "../../Redux/Actions/Buyer";
import { useStyles } from "../../components/Checkout/checkoutInfoContent";
import { userRegistration } from "../../api/";

export default function technicians() {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formValues, setFormValues] = useState({});
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const userInfo = useSelector((state) => state.buyerInfo);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    dispatch(buyerInfo(formValues));
  };

  const handleConfirmationChange = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.password === confirmationPassword) {
      userRegistration(userInfo);
      await router.push("/users/login");
    } else {
      alert("the password is not correct");
    }
  };

  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>

      <div
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "rgb(255, 228, 212)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexFlow: "column wrap",
        }}
      >
        <div className={`${classes.registration_form}`}>Registration</div>
        <form
          id="registration"
          className={`${classes.form_block}`}
          onSubmit={handleSubmit}
          style={{ width: "50%" }}
        >
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

          <InputLabel htmlFor="password" className={classes.labels} required>
            password
          </InputLabel>
          <InputBase
            onChange={handleChange}
            id="password"
            type="text"
            name="password"
            className={`${classes.input}`}
            style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }}
          />

          {/* confirmation password */}
          <InputLabel
            htmlFor="confirmation_password"
            className={classes.labels}
            required
          >
            Confirm your password
          </InputLabel>
          <InputBase
            onChange={handleConfirmationChange}
            id="confirmation_password"
            type="text"
            name="confirmation_password"
            className={`${classes.input}`}
            style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }}
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

          <div className={`${classes.extra}`}>* Required Info</div>
        </form>

        <Button
          variant="outlined"
          className={`${classes.singleBtn}`}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            margin: "0 auto 30px",
          }}
          type="submit"
          form="registration"
        >
          Register
        </Button>
      </div>
    </>
  );
}
