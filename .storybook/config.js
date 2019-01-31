import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { configureViewport } from '@storybook/addon-viewport';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

// pick all stories.js
const req = require.context('../src', true, /stories\.js$/);

addDecorator(withKnobs);

addDecorator(
  withOptions({
    name: 'Storybook Example',
    theme: themes.dark
  })
);

const viewports = {
  small: {
    name: 'small',
    styles: {
      width: '320px',
      height: '240px'
    }
  },
  medium: {
    name: 'medium',
    styles: {
      width: '800px',
      height: '600px'
    }
  },
  large: {
    name: 'large',
    styles: {
      width: '1280px',
      height: '1024px'
    }
  }
}

configureViewport({
  viewports
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);