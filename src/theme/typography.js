import Typography from 'typography';

const NotoSansJP = 'Noto+Sans+JP';
const fontFamily = ['Noto Sans JP', 'sans-serif'];
const MOBILE_MEDIA_QUERY = '@media only screen and (max-width:480px)';

const BASE_FONT_SIZE = 16;

const typographyTheme = {
  baseFontSize: `${BASE_FONT_SIZE}px`,
  baseLineHeight: 1.6,
  scaleRatio: 2.4,
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  blockMarginBottom: 0,
  googleFonts: [
    {
      name: NotoSansJP,
      styles: ['500'],
    },
  ],
  overrideStyles: () => ({
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: `${(BASE_FONT_SIZE / 18) * 100}%`,
      },
    },
  }),
};

const typography = new Typography(typographyTheme);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export const { scale, rhythm, options, ...rest } = typography;

export default typography;
