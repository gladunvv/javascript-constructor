import { col, row } from '../utils';

export class Block {
  constructor(type, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован!');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<h1>${this.value}</h1>`), styles);
  }
}
