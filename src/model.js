import { Block, TitleBlock } from './classes/blocks';

export const model = [
  new TitleBlock('Test Title', {
    styles: 'background: darkred; color: #fff;',
  }),
  new Block('image', '', { alt: 'img', imageStyles: '' }),
  new Block('text', 'Lorem ajfokja jldsaj fkldsj kl', {
    styles: 'background: darkblue; color: yellow',
  }),
  new Block('textColumns', ['1 text', '2 text', '3 text'], {
    styles: 'padding: 1  rem',
  }),
];
