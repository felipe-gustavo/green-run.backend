import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

const SANITIZE_PHONE = /[^0-9]/g;

export class PhoneValueObj extends ValueObject<string> {
  get value() {
    return this._value;
  }

  get formmatedPhone() {
    return this.value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  }

  get areaCode() {
    return this.value.match(/(\d{2})/)?.[1];
  }

  constructor(value: string) {
    super(value.replace(SANITIZE_PHONE, ''));
  }

  update(value: string) {
    super.update(value.replace(SANITIZE_PHONE, ''));
  }

  validate(value: string): void {
    if (!value) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.phone.empty,
        'phone',
        value,
      );
    }

    if (value.length < 10 || value.length > 11) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.phone.invalid,
        'phone',
        value,
      );
    }
  }
}
