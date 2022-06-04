import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    default: {
      main: '#E0E0E0',
      contrastText: '#3F3F3F',
    },
    primary: {
      main: '#2962FF',
    },
    secondary: {
      main: '#455A64'
    },
    warning: {
      main: '#D32F2F'
    },
  },
  typography: {
    fontFamily:  ['"Noto Sans"', 'sans-serif'].join(', ')
  },
  components: {
    MuiButton: {
      defaultProps: {
        children: 'button',
        color: 'default',
        variant: 'contained',
        
      },
    },
  },
});
