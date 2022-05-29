export default class BaseView {
  static fromEntity(entity) {
    throw new Error('Not implemented');
  }

  static fromArray(array) {
    return array.map(x => this.fromEntity(x));
  }
}