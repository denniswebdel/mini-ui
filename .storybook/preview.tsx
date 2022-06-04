import { themes } from '@storybook/theming';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/config/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  layout: 'fullscreen'
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      {Story()}
    </ThemeProvider>
  )
];
