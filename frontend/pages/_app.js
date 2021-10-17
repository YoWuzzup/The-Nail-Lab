import "../styles/globals.css";
import { NavBar, Footer } from "../components/index";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe3d8'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#19857b',
    },
  },
});

export default function MyApp({ Component, pageProps }) {
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
