// Example theme.js

import { future, highlight, notes } from '@mdx-deck/themes'

export const theme = {
  ...future,
  ...highlight,
  ...notes,
  "styles": {
    "root": {
        "textAlign": "center"
    },
    "pre": {
        "textAlign": "left"
    }
  }
}

console.log(notes);

export default {
  fonts: {
    body: 'Roboto, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: 'white',
    background: 'black',
    primary: 'blue',
  },
}