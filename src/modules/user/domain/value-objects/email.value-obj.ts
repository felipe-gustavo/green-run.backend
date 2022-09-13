import { ERROR_CODES } from '@shared/domain/constants/error-codes';
import { ValueObjectException } from '@shared/domain/errors/value-object-exception.error';
import { ValueObject } from '@shared/domain/value-objects/value-object';

const EMAIL_REG =
  /^[A-Za-z0-9.-_\+]{2,}\@(?:[a-zA-Z0-9-]{3,}\.)+?(?:[a-zA-Z]{2,}\.?)+(?!.)$/;

export class EmailValueObj extends ValueObject<string> {
  get value() {
    return this._value;
  }

  get nickname() {
    return this._value.match(/^([A-Za-z0-9.-_\+]{2,})\@/)[1];
  }

  get domain() {
    return this._value.match(/\@(.+)$/)[1];
  }

  validate(value: string): void {
    if (!value) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.email.empty,
        'email',
        value,
      );
    }

    if (!value.match(EMAIL_REG)) {
      throw new ValueObjectException(
        'user',
        ERROR_CODES.valueObject.email.invalid,
        'email',
        value,
      );
    }
  }
}
