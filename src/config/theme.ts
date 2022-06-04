import { createTheme } from '@mui/material/styles';

const palette = {
  default: {
    main: '#E0E0E0',
    light: '#E6E6E6',
    contrastText: '#3F3F3F',
  },
  primary: {
    main: '#2962FF',
  },
  secondary: {
    main: '#455A64',
  },
  warning: {
    main: '#D32F2F',
  },
};

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: ['"Noto Sans"', 'sans-serif'].join(', '),
  },
  components: {
    MuiButton: {
      defaultProps: {
        children: 'button',
        color: 'default',
        variant: 'contained',
      },
    },
    MuiTextField: {
      defaultProps: {
        placeholder: 'placeholder',
        label: 'Label',
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          '& .MuiInputLabel-formControl': {
            top: '-1rem',
            left: '-0.8rem',
          },
          '& .MuiInputBase-inputAdornedStart': {
            paddingLeft: '0.8rem',
          },
          '& legend': {
            display: 'none',
          },
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        color: 'secondary'
      }
    }
  },
});
