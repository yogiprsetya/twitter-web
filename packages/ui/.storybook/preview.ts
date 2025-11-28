import '../src/styles.css';
import './style.css';
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [],
      },
    },
  },
};

export default preview;
