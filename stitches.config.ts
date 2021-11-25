import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

type SpaceCSSProperty = Stitches.ScaleValue<'space'> | string | number;

export const {
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#fa4778',
      black: '#292D32',
      white: '#FFFFFF',
      red: '#FC5E49',
      // gray
      gray100: '#F7FAFD',
      gray200: '#EFF3F7',
      gray: '#8FA4BD',
    },
    shadows: {
      primary: '0px 0px 32px 0px rgba(143, 164, 189, 0.24)',
    },
    radii: {
      sm: '2px',
      default: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '20px',
      circle: '50%',
      full: '9999px',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    // inspired from https://tailwindcss.com/docs/breakpoints
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xlMax: '(max-width: 1279px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    m: (value: SpaceCSSProperty) => ({
      margin: value,
    }),
    mt: (value: SpaceCSSProperty) => ({
      marginTop: value,
    }),
    mr: (value: SpaceCSSProperty) => ({
      marginRight: value,
    }),
    mb: (value: SpaceCSSProperty) => ({
      marginBottom: value,
    }),
    ml: (value: SpaceCSSProperty) => ({
      marginLeft: value,
    }),
    mx: (value: SpaceCSSProperty) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: SpaceCSSProperty) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: SpaceCSSProperty) => ({
      padding: value,
    }),
    pt: (value: SpaceCSSProperty) => ({
      paddingTop: value,
    }),
    pr: (value: SpaceCSSProperty) => ({
      paddingRight: value,
    }),
    pb: (value: SpaceCSSProperty) => ({
      paddingBottom: value,
    }),
    pl: (value: SpaceCSSProperty) => ({
      paddingLeft: value,
    }),
    px: (value: SpaceCSSProperty) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: SpaceCSSProperty) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    size: (value: number) => ({
      width: value,
      height: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    radius: (value: Stitches.ScaleValue<'radii'> | number) => ({
      borderRadius: value,
    }),
    widthPercent: (value: number) => ({
      width: `${value}%`,
    }),
    sizePercent: (value: number) => ({
      width: `${value}%`,
      height: `${value}%`,
    }),
    lineClamp: (rows: number) => ({
      display: '-webkit-box',
      '-webkit-line-clamp': rows,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }),
  },
});
export type CSS = Stitches.CSS<typeof config>;
