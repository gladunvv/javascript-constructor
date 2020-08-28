import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from './classes/blocks';

import { css } from './utils';

export const model = [
  new TitleBlock('Test Title', {
    styles: css({
      'text-align': 'center',
    }),
  }),
  new ImageBlock('', { alt: 'img', imageStyles: '' }),
  new TextBlock('Lorem ajfokja jldsaj fkldsj kl', {
    styles: css({}),
  }),
  new TextColumnsBlock(['1 text', '2 text', '3 text'], {
    styles: css(),
  }),
];
