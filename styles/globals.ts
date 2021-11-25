import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '"Montserrat", sans-serif',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  p: {
    mb: '0 !important',
  },
  'ol, ul, dl': {
    mb: '0 !important',
  },
  a: {
    color: '#fff',
    pointerEvents: 'cursor',
  },
});
