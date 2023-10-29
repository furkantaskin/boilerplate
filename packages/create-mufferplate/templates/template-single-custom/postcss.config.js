import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';
import sortMediaQueries from "postcss-sort-media-queries";

const postcssConfig = {
  plugins: [
    autoprefixer,
    sortMediaQueries({
      sort: 'desktop-first'
    }),
    cssnano({
      preset: 'cssnano-preset-advanced',
    }),
    purgecss({
      content: ['./theme/**/*.php', './theme/**/*.js'],
      safelist: ['swiper-pagination-bullet'],
      fontFace: true,
      keyframes: true,
      defaultExtractor: (content) => content.match(/[\w-/:.-]+(?<!:)/g) || [],
    }),
  ],
};
export default postcssConfig;