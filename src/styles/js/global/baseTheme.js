import { createMuiTheme } from '@material-ui/core/styles';
import * as colors from './colors';
import * as fontFamily from './fontFamily';
/**
  https://material-ui.com/customization/default-theme/
 */

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      light: colors.altFontColor,
      main: colors.mainFontColor,
      dark: colors.mainFontColor,
      contrastText: colors.white,
    },
    secondary: {
      light: colors.altFontColor,
      main: colors.mainFontColor,
      dark: colors.mainFontColor,
      contrastText: colors.white,
    },
    default: {
      light: colors.altFontColor,
      main: colors.mainFontColor,
      dark: colors.mainFontColor,
      contrastText: colors.white,
    },
    error: {
      light: colors.errorColor,
      main: colors.errorColor,
      dark: colors.errorColor,
      contrastText: colors.white,
    },
  },
  typography: {
    fontFamily: fontFamily.Lato,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
    h1: {
      color: colors.mainFontColor,
      fontFamily: fontFamily.Lato,
      fontSize: '26px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    h2: {
      color: colors.mainFontColor,
      fontFamily: fontFamily.Lato,
      fontSize: '24px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: 'normal',
    },
    h3: {
      color: colors.mainFontColor,
      fontFamily: fontFamily.Lato,
      fontSize: '22px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: 'normal',
    },
    h4: {
      color: colors.mainFontColor,
      fontFamily: fontFamily.Lato,
      fontSize: '20px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: 'normal',
    },
    h5: {
      color: colors.mainFontColor,
      fontFamily: fontFamily.Lato,
      fontSize: '18px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: 'normal',
    },
    h6: {
      color: colors.mainFontColor,
      fontFamily: fontFamily.Lato,
      fontSize: '16px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      letterSpacing: '0.3px',
    },
  },
});
export default baseTheme;
