export function row(conent, styles = '') {
  return `<div class="row" style="${styles}">${conent}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
