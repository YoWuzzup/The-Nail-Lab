import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../styles/theme'
import { NavBar, Footer } from "../components/index";
import { wrapper } from "../Redux/wrapper";

function MyApp({ Component, pageProps }) {
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