import { useEffect } from "react";
import { wrapper } from "../Redux/wrapper";
import { signInUser } from "../Redux/Actions/User";
import { useDispatch } from "react-redux";

import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import { NavBar, Footer } from "../components/index";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  // checking if the client authed or not
  useEffect(() => {
    // checking the client side rendering (for window obj)
    const checkIfClient = typeof window !== "undefined" ? true : false;

    if (checkIfClient) {
      const localUser = localStorage.getItem("user") || null;
      const parsedUser = localUser ? JSON.parse(localUser) : null;
      dispatch(signInUser(parsedUser));
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
