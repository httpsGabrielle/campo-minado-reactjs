import { alpha } from "@mui/material/styles";

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#FFF9FB",
  200: "#FDF1F6",
  300: "#F7E3EC",
  400: "#EBCFDB",
  500: "#C9AEB9",
  600: "#A08895",
  700: "#7A6772",
  800: "#554752",
  900: "#372D36",
};

const PRIMARY = {
  lighter: "#FFEAF4",
  light: "#FFC8DF",
  main: "#FF9BC6",
  dark: "#F17DAF",
  darker: "#D85D93",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#F1EEFF",
  light: "#D9CFFF",
  main: "#BDA8FF",
  dark: "#9C86F0",
  darker: "#7D68CE",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#EAF8FF",
  light: "#C8ECFF",
  main: "#9EDCFF",
  dark: "#73C0EE",
  darker: "#4EA5D2",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#EEFFF2",
  light: "#CFF7DB",
  main: "#A8E9BD",
  dark: "#84D2A0",
  darker: "#5EBA82",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF9E9",
  light: "#FFEFC4",
  main: "#FFDFA0",
  dark: "#F7C97A",
  darker: "#E3B05A",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFECEC",
  light: "#FFD1D6",
  main: "#FFAFB8",
  dark: "#F48F9A",
  darker: "#DC6E7D",
  contrastText: "#fff",
};

/// Cores para trabalhar futuramente

const DARK = {
  lighter: "#FFF5FA",
  light: "#CBBAC4",
  main: "#A7939E",
  dark: "#856E7B",
  darker: "#5D4955",
  contrastText: "#fff",
};

const LIGHT = {
  lighter: "#FFFFFF",
  light: "#FFF9FD",
  main: "#FFF3FA",
  dark: "#FCE8F4",
  darker: "#fff",
  contrastText: "#000",
};

//----------------------------------------------------------------

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  dark: DARK,
  light: LIGHT,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: "#5A4955",
    secondary: "#866F7A",
    disabled: "#B49DA8",
  },
  background: {
    paper: "#FFFDFE",
    default: "#FFF7FB",
    neutral: "#FDEEF6",
  },
  action: {
    active: "#927A86",
    hover: alpha("#FF9BC6", 0.16),
    selected: alpha("#BDA8FF", 0.22),
    disabled: alpha(GREY[500], 0.78),
    disabledBackground: alpha("#C9AEB9", 0.24),
    focus: alpha("#9EDCFF", 0.28),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
