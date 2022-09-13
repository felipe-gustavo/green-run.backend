export abstract class ValueObject<ValueType> {
  constructor(protected _value: ValueType) {
    this.validate(_value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  validate(value: ValueType): void {}

  update(value: ValueType): void {
    this.validate(value);
    this._value = value;
  }
}
