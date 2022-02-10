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
  const [error, setError] = useState();
  const userInfo = useSelector((state) => state.buyerInfo);

  const handleChange = async (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await userLogin(userInfo)
      .then(async (e) => {
        if (e.status === 404) {
          throw e;
        }
        const { user } = e?.data; // get fetched user

        setError(null); // set error to null
        dispatch(signInUser(user)); // dispatch fetched user data to redux
        localStorage.setItem("user", JSON.stringify(user)); // set user ifno to the localstorage

        await router.push("/"); // go to main page when user is fetched successfully
      })
      .catch((er) => {
        const { data } = er;
        setError(data.error);
      });
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
              style={{ WebkitTextSecurity: "disc", textSecurity: "disc" }}
            />
          </div>
          <div className={`${classes.error}`}>{error && error}</div>
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
