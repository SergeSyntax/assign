import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      htmlFontSize: 10,
      fontSize: 16,
      h4: {
        fontSize: '5rem',
        letterSpacing: '.1rem',
        fontWeight: 500
      },
      h6: {
        fontWeight: 600,
        fontSize: '2rem'
      },
      button: {
        letterSpacing: '.1rem',
        fontWeight: 600,
        textTransform: 'capitalize'
      }
    },
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: { backgroundColor: 'transparent' }
        }
      },
      MuiDialog: {
        styleOverrides: {
          container: {
            backgroundColor: 'rgba(9, 30, 66, 0.54)'
          }
        }
      }
    }
  })
);
