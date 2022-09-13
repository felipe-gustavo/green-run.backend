import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

export type NameValueType = { firstName: string; lastName: string };

export class NameValueObj extends ValueObject<NameValueType> {
  get firstName() {
    return this._value.firstName;
  }

  get lastName() {
    return this._value.lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  validate(value: NameValueType): void {
    const { firstName, lastName } = value;
    if (!firstName || !lastName) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.name.empty,
        'name',
        value,
      );
    }
  }
}
