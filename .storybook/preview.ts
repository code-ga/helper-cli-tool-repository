import type { Preview, Decorator } from '@storybook/react'
import '../src/index.css'

import { withThemeByDataAttribute } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators: Decorator[] = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;