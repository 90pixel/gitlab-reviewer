import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '"Montserrat", sans-serif',
  },
  'html,body': {
    background: '$gray200',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '$red',
    },
  },
  p: {
    mb: '0 !important',
  },
  'ol, ul, dl': {
    mb: '0 !important',
  },
  a: {
    color: '$gray200',
    pointerEvents: 'cursor',
    '&:hover': {
      color: '$red',
    },
  },
});
