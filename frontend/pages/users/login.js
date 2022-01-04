import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyerInfo } from "../../Redux/Actions/Buyer";
import { userLogin } from "../../api/";

import { InputBase, InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core/";
import { useStyles } from "../../components/Checkout/checkoutInfoContent";

export default function login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    dispatch(buyerInfo(formValues));
  };
  const userInfo = useSelector((state) => state.buyerInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    userLogin(userInfo);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className={`${classes.container}`}>
        <div className={`${classes.registration_form}`}>Login</div>
        <form
          id="login"
          className={`${classes.form_block}`}
          onSubmit={handleSubmit}
          style={{ width: "50%" }}
        >
          <div style={{ width: "50%" }}>
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
            />
          </div>
        </form>

        <Button
          variant="outlined"
          className={`${classes.singleBtn}`}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            margin: "0 auto 30px",
            flexBasis: "20%",
          }}
          type="submit"
          form="login"
        >
          Log in
        </Button>

        <Link href={`/users/registration`}>
          <Button
            variant="outlined"
            className={`${classes.singleBtn}`}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              margin: "0 auto 30px",
              flexBasis: "20%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Do not have an account?
          </Button>
        </Link>
      </div>
    </>
  );
}
