import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({palette: {
    primary: {
      main: "#ffe3d8",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#19857b",
    },
  },});

export default theme;