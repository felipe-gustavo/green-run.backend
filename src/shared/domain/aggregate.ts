export class Aggregate<T> {
  constructor(props: T) {
    Object.keys(props).forEach((valueKey) => {
      this[valueKey] = props[valueKey];
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  validate(props: T): void {}
}
