import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    default?: PaletteColorOptions;
  }
  interface Palette {
    default: PaletteColor;
  }
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}
