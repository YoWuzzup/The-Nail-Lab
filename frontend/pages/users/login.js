import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { buyerInfo } from "../../Redux/Actions/Buyer";
import { signInUser } from "../../Redux/Actions/User";
import { userLogin } from "../../api/index";

import { InputBase, InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core/";
import { useStyles } from "../../components/Checkout/checkoutInfoContent";

export default function login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const [formValues, setFormValues] = useState({});
  const userInfo = useSelector((state) => state.buyerInfo);

  const handleChange = async (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // login in
    await userLogin(userInfo).then((e) => {
      const { user } = e.data;

      dispatch(signInUser(user));
    });

    await router.push("/");
  };

  useEffect(() => {
    dispatch(buyerInfo(formValues));
  }, [formValues]);

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
