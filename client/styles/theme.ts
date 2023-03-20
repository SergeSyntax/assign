import { createTheme } from '@mui/material/styles';
import { FONT_SIZE } from './theme.const';

export const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    htmlFontSize: 10,
    fontSize: FONT_SIZE,
    h1: {
      fontSize: '3rem',
      lineHeight: '1.3',
      letterSpacing: 'letter-spacing',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      lineHeight: '1.2',
      letterSpacing: 'letter-spacing',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '5rem',
      letterSpacing: '.1rem',
      fontWeight: 500,
    },
    h6: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      letterSpacing: '.1rem',
      fontWeight: 600,
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: 'transparent' },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          background: 'rgba(9, 30, 66, 0.54)',
        },
      },
    },
  },
});
